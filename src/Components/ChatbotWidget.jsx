import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Mail, Briefcase, Target, HelpCircle, Users, BookOpen, Sparkles } from 'lucide-react';

const SleekChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [userInput, setUserInput] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    service: '',
    usage: ''
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatFlow = {
    welcome: {
      botMessages: [
        { text: "Hello! I'm your Offshore 365 AI assistant.", delay: 500 },
        { text: "I'm here to help you find exactly what you're looking for.", delay: 1200 },
        { text: "How can I assist you today?", delay: 2000 }
      ],
      options: [
        { id: 'sales', text: 'I want to speak with sales team', icon: Users },
        { id: 'learn', text: "I'd like to learn about Offshore 365", icon: BookOpen },
      ]
    },
    support: {
      botMessages: [
        { text: "I'll connect you with our support team right away.", delay: 500 },
        { text: "Our technical experts provide 24/7 assistance for all your needs.", delay: 1200 },
        { text: "May I have your name to personalize your support experience?", delay: 2000 }
      ],
      inputType: 'name'
    },
    sales: {
      botMessages: [
        { text: "Excellent! Our sales consultants are ready to help.", delay: 500 },
        { text: "They'll provide customized solutions tailored to your business requirements.", delay: 1200 },
        { text: "What's your name so I can introduce you properly?", delay: 2000 }
      ],
      inputType: 'name'
    },
    learn: {
      botMessages: [
        { text: "Perfect! I'd be happy to share information about our platform.", delay: 500 },
        { text: "Offshore 365 offers comprehensive cloud solutions, collaboration tools, and scalable infrastructure.", delay: 1200 },
        { text: "What's your name? I'll provide information relevant to your interests.", delay: 2000 }
      ],
      inputType: 'name'
    },
    other: {
      botMessages: [
        { text: "Of course! I'm here to help with any questions you might have.", delay: 500 },
        { text: "No matter how specific or unique your inquiry is, we'll find the right solution.", delay: 1200 },
        { text: "Could you share your name so I can assist you better?", delay: 1800 }
      ],
      inputType: 'name'
    },
    email: {
      botMessages: [
        { text: `Thank you, ${userData.name}. It's great to meet you.`, delay: 500 },
        { text: `I'll make sure you receive personalized follow-up information.`, delay: 1200 },
        { text: "What's the best email address to reach you?", delay: 2000 }
      ],
      inputType: 'email'
    },
    service: {
      botMessages: [
        { text: "Perfect. Now I can provide more targeted assistance.", delay: 500 },
        { text: `${userData.name}, which of our service areas interests you most?`, delay: 1200 },
        { text: "This will help me connect you with the right specialist.", delay: 1800 }
      ],
      options: [
        { id: 'cloud', text: 'Cloud Services & Infrastructure', icon: Target },
        { id: 'collaboration', text: 'Team Collaboration Solutions', icon: Users },
        { id: 'project', text: 'Project Management Tools', icon: Briefcase },
        { id: 'infrastructure', text: 'Scalable Infrastructure', icon: Target },
        { id: 'all', text: 'Comprehensive Business Solutions', icon: Sparkles }
      ]
    },
    usage: {
      botMessages: [
        { text: `${userData.service} is an excellent choice.`, delay: 500 },
        { text: "Understanding your use case helps us provide the most relevant recommendations.", delay: 1200 },
        { text: "What's your primary business objective with these solutions?", delay: 2000 }
      ],
      options: [
        { id: 'startup', text: 'Scaling startup operations', icon: Target },
        { id: 'enterprise', text: 'Enterprise-level solutions', icon: Briefcase },
        { id: 'team', text: 'Small to medium team collaboration', icon: Users },
        { id: 'personal', text: 'Individual project management', icon: User }
      ]
    },
    final: {
      botMessages: [
        { text: `Thank you for the information, ${userData.name}.`, delay: 500 },
        { text: `Based on your interest in ${userData.service} for ${userData.usage}, I have everything needed.`, delay: 1200 },
        { text: `A specialist will contact you at ${userData.email} within 24 hours with tailored recommendations.`, delay: 2000 },
        { text: "Is there anything else I can help you with today?", delay: 2800 }
      ]
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startConversation();
    }
  }, [isOpen]);

  const startConversation = () => {
    const welcomeFlow = chatFlow.welcome;
    welcomeFlow.botMessages.forEach((msg, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: msg.text, timestamp: Date.now() }]);
      }, msg.delay);
    });
  };

  const handleOptionClick = (optionId, optionText) => {
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: optionText, timestamp: Date.now() }]);
    
    if (currentStep === 'welcome') {
      setCurrentStep(optionId);
      processStep(optionId);
    } else if (currentStep === 'service') {
      setUserData(prev => ({ ...prev, service: optionText }));
      setCurrentStep('usage');
      processStep('usage');
    } else if (currentStep === 'usage') {
      setUserData(prev => ({ ...prev, usage: optionText }));
      setCurrentStep('final');
      processStep('final');
    }
  };

  const processStep = (step) => {
    const stepFlow = chatFlow[step];
    if (stepFlow && stepFlow.botMessages) {
      stepFlow.botMessages.forEach((msg, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, { type: 'bot', text: msg.text, timestamp: Date.now() }]);
        }, msg.delay);
      });
    }
  };

  const handleInputSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: userInput, timestamp: Date.now() }]);

    if (currentStep === 'support' || currentStep === 'sales' || currentStep === 'learn' || currentStep === 'other') {
      setUserData(prev => ({ ...prev, name: userInput }));
      setCurrentStep('email');
      setTimeout(() => {
        processStep('email');
      }, 500);
    } else if (currentStep === 'email') {
      setUserData(prev => ({ ...prev, email: userInput }));
      setCurrentStep('service');
      setTimeout(() => {
        processStep('service');
      }, 500);
    }

    setUserInput('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      // Reset on close
      setMessages([]);
      setCurrentStep('welcome');
      setUserData({ name: '', email: '', service: '', usage: '' });
    }
  };

  const showOptions = () => {
    const step = chatFlow[currentStep];
    return step && step.options;
  };

  const showInput = () => {
    const step = chatFlow[currentStep];
    return step && step.inputType;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`absolute bottom-0 right-0 w-80 h-[500px] sm:w-96 sm:h-[550px] bg-white rounded-lg shadow-2xl transition-all duration-300 transform origin-bottom-right border ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{
          maxWidth: 'calc(100vw - 2rem)',
          maxHeight: 'calc(100vh - 2rem)'
        }}
      >
        {/* Header */}
        <div className="bg-white border-b p-3 sm:p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center">
              </div>
            </div>
            <div>
              <h3 className="regular text-gray-900 text-sm sm:text-base">Offshore 365 Chatbot</h3>
              <p className="text-xs text-gray-500 font-light">We reply instantly</p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[300px] sm:h-[350px] overflow-y-auto p-3 sm:p-4 space-y-3 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 regular rounded-lg text-xs sm:text-sm ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 border'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input/Options Area */}
        <div className="p-3 sm:p-4 border-t bg-white rounded-b-lg">
          {showOptions() && (
            <div className="space-y-2">
              {chatFlow[currentStep].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id, option.text)}
                  className="w-full text-left regular p-2 sm:p-3 text-xs sm:text-sm border rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-light"
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}

          {showInput() && (
            <div className="flex space-x-2">
              <input
                type={showInput() === 'email' ? 'email' : 'text'}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit(e)}
                placeholder={showInput() === 'email' ? 'Your email address...' : 'Type your message...'}
                className="flex-1 border regular rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-light"
              />
              <button
                onClick={handleInputSubmit}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SleekChatbot;