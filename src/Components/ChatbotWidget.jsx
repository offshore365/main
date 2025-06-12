import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle, Minus, Send, User, Mail, Home, Briefcase, Target,
  HelpCircle, Users, BookOpen, Sparkles, Layout, Eye, Code, CheckCircle
} from 'lucide-react';

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
  const [isTyping, setIsTyping] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle clicks outside the chatbot to minimize it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const delayWithTyping = async (text, delay) => {
    setIsTyping(true);
    await new Promise(res => setTimeout(res, delay));
    setIsTyping(false);
    setMessages(prev => [...prev, { type: 'bot', text, timestamp: Date.now() }]);
  };

  const chatFlow = {
    welcome: {
      botMessages: [
        { text: "Hello! I'm your Offshore 365 AI assistant.", delay: 600 },
        { text: "I'm here to help you find exactly what you're looking for.", delay: 1200 },
        { text: "How can I assist you today?", delay: 1600 }
      ],
      options: [
        { id: 'sales', text: 'I want to speak with the sales team', icon: Users },
        { id: 'learn', text: "I'd like to learn about Offshore 365", icon: BookOpen },
      ]
    },
    sales: {
      botMessages: [
        { text: "Excellent! Our sales consultants are ready to help.", delay: 800 },
        { text: "They'll provide customized solutions tailored to your business.", delay: 1200 },
        { text: "What's your name so I can introduce you properly?", delay: 1400 }
      ],
      inputType: 'name'
    },
    learn: {
      botMessages: [
        { text: "Perfect! Let me introduce Offshore 365.", delay: 800 },
        { text: "We offer offshore solutions in Architecture, BIM, Interior, IT, and more.", delay: 1200 },
        { text: "What's your name? I'll personalize this better.", delay: 1400 }
      ],
      inputType: 'name'
    },
    email: {
      botMessages: [
        { text: `Thank you, ${userData.name}. Great to meet you.`, delay: 800 },
        { text: "Could you share your email address?", delay: 1200 }
      ],
      inputType: 'email'
    },
    service: {
      botMessages: [
        { text: "Awesome. Let's narrow things down.", delay: 800 },
        { text: `${userData.name}, which of our Top services are you most interested in?`, delay: 1200 }
      ],
      options: [
        { id: 'architecture', text: 'Architecture', icon: Layout },
        { id: 'visualization', text: '3D Visualization', icon: Eye },
        { id: 'bim', text: 'BIM', icon: Code },
        { id: 'it', text: 'IT', icon: User },
        { id: 'interior', text: 'Interior', icon: Home },
        { id: 'marketing', text: 'Marketing', icon: Sparkles },
        { id: 'admin', text: 'Admin', icon: Briefcase }
      ]
    },
    usage: {
      botMessages: [
        { text: `${userData.service} is an excellent choice.`, delay: 800 },
        { text: "Understanding your goals helps us help you better.", delay: 1000 },
        { text: "What is your business objective?", delay: 1200 }
      ],
      options: [
        { id: 'startup', text: 'Scaling startup operations', icon: Target },
        { id: 'enterprise', text: 'Enterprise-level solutions', icon: Briefcase }
      ]
    },
    final: {
      botMessages: [
        { text: `Thanks, ${userData.name}.`, delay: 600 },
        { text: `You're interested in ${userData.service}.`, delay: 1000 },
        { text: `A specialist will contact you at ${userData.email} within 24 hours.`, delay: 1400 },
        { text: "Thank you for choosing Offshore 365. We look forward to supporting your vision.", delay: 1800 }
      ]
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) startConversation();
  }, [isOpen]);

  const startConversation = async () => {
    const welcomeFlow = chatFlow.welcome;
    for (const msg of welcomeFlow.botMessages) {
      await delayWithTyping(msg.text, msg.delay);
    }
  };

  const resetChatbot = () => {
    setMessages([]);
    setCurrentStep('welcome');
    setUserData({
      name: '',
      email: '',
      service: '',
      usage: ''
    });
    setUserInput('');
    setShowSuccess(false);
    setIsTyping(false);
  };

  const processStepWithData = async (step, currentUserData) => {
    const stepFlow = chatFlow[step];
    if (stepFlow && stepFlow.botMessages) {
      for (const msg of stepFlow.botMessages) {
        await delayWithTyping(msg.text, msg.delay);
      }
    }
    if (step === 'final') {
      // Wait a bit to ensure all messages are sent
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Prepare data to send to backend with the most current userData
      const dataToSend = {
        userData: {
          name: currentUserData.name,
          email: currentUserData.email,
          service: currentUserData.service,
          usage: currentUserData.usage,
          timestamp: new Date().toISOString(),
          conversationId: Date.now().toString()
        },
        messages: messages,
        conversationSummary: {
          totalMessages: messages.length,
          userType: messages.some(msg => msg.text.includes('sales')) ? 'Sales Inquiry' : 'Learning Inquiry',
          completedAt: new Date().toISOString()
        }
      };

      console.log('Sending data to backend:', dataToSend);
      console.log('Final userData being sent:', currentUserData);

      try {
        const response = await fetch('http://localhost:8556/send-email', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(dataToSend),
        });
        
        const responseData = await response.json();
        
        if (response.ok) {
          console.log('Conversation email sent successfully:', responseData);
          
          // Show success UI
          setShowSuccess(true);
          
          // Reset after 3 seconds and close chat
          setTimeout(() => {
            resetChatbot();
            setIsOpen(false); // Close the chatbot
          }, 3000);
          
        } else {
          console.error('Failed to send conversation email:', response.statusText, responseData);
        }
      } catch (error) {
        console.error('Error sending conversation email:', error);
      }
    }
  };

  const processStep = async (step) => {
    const stepFlow = chatFlow[step];
    if (stepFlow && stepFlow.botMessages) {
      for (const msg of stepFlow.botMessages) {
        await delayWithTyping(msg.text, msg.delay);
      }
    }
    if (step === 'final') {
      // Wait a bit to ensure all state updates are complete
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Prepare data to send to backend with current userData state
      const dataToSend = {
        userData: {
          name: userData.name,
          email: userData.email,
          service: userData.service,
          usage: userData.usage,
          timestamp: new Date().toISOString(),
          conversationId: Date.now().toString()
        },
        messages: messages,
        conversationSummary: {
          totalMessages: messages.length,
          userType: messages.some(msg => msg.text.includes('sales')) ? 'Sales Inquiry' : 'Learning Inquiry',
          completedAt: new Date().toISOString()
        }
      };

      console.log('Sending data to backend:', dataToSend);
      console.log('Current userData state:', userData);

      try {
        const response = await fetch('http://localhost:8556/send-email', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(dataToSend),
        });
        
        const responseData = await response.json();
        
        if (response.ok) {
          console.log('Conversation email sent successfully:', responseData);
          
          // Show success UI
          setShowSuccess(true);
          
          // Reset after 3 seconds and close chat
          setTimeout(() => {
            resetChatbot();
            setIsOpen(false); // Close the chatbot
          }, 3000);
          
        } else {
          console.error('Failed to send conversation email:', response.statusText, responseData);
        }
      } catch (error) {
        console.error('Error sending conversation email:', error);
      }
    }
  };

  const handleOptionClick = async (optionId, optionText) => {
    setMessages(prev => [...prev, { type: 'user', text: optionText, timestamp: Date.now() }]);

    if (currentStep === 'welcome') {
      setCurrentStep(optionId);
      await processStep(optionId);
    } else if (currentStep === 'service') {
      // Update userData with service selection
      const updatedUserData = { ...userData, service: optionText };
      setUserData(updatedUserData);
      console.log('Service selected:', optionText, 'Updated userData:', updatedUserData);
      setCurrentStep('usage');
      await processStep('usage');
    } else if (currentStep === 'usage') {
      // Update userData with usage selection
      const updatedUserData = { ...userData, usage: optionText };
      setUserData(updatedUserData);
      console.log('Usage selected:', optionText, 'Final userData:', updatedUserData);
      setCurrentStep('final');
      
      // Use the updated data directly in processStep
      await processStepWithData('final', updatedUserData);
    }
  };

  const handleInputSubmit = async (e) => {
    e?.preventDefault();
    if (!userInput.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text: userInput, timestamp: Date.now() }]);

    if (['sales', 'learn'].includes(currentStep)) {
      setUserData(prev => ({ ...prev, name: userInput }));
      setCurrentStep('email');
      await processStep('email');
    } else if (currentStep === 'email') {
      setUserData(prev => ({ ...prev, email: userInput }));
      setCurrentStep('service');
      await processStep('service');
    }

    setUserInput('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const showOptions = () => chatFlow[currentStep]?.options;
  const showInput = () => chatFlow[currentStep]?.inputType;

  // Success UI Component
  const SuccessMessage = () => (
    <div className="absolute inset-0 bg-green-50 rounded-lg flex flex-col items-center justify-center z-10">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
            <CheckCircle size={32} className="text-white" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-green-700 text-lg font-semibold">Success!</h3>
          <p className="text-green-600 text-sm px-4">
            Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
          </p>
        </div>
        <div className="text-green-500 text-xs">
          Refreshing in 3 seconds...
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-4 right-4 z-[9999]" style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
      {/* Chat Button with Tooltip */}
      <div className="relative group">
        <button
          onClick={toggleChat}
          className={`w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center ${
            isOpen ? 'scale-0' : 'scale-100'
          }`}
          style={{ position: 'relative', zIndex: 10000 }}
        >
          <MessageCircle size={24} />
        </button>
        <div className="absolute bottom-full mb-2 right-0 opacity-0 group-hover:opacity-100 regular transition-opacity bg-blue-500 text-white text-xs rounded py-1 px-2 pointer-events-none whitespace-nowrap z-[10001]">
          Hey, I'm your Offshore AI assistant. <br /> Here to help!
        </div>
      </div>

      {/* Chat Window */}
      <div
        ref={chatContainerRef}
        className={`absolute bottom-0 right-0 w-80 h-[500px] sm:w-96 sm:h-[550px] bg-white rounded-lg shadow-2xl transition-all duration-300 transform origin-bottom-right border relative ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ position: 'absolute', bottom: '10px', right: '0px', zIndex: 9998 }}
      >
        {/* Success Overlay */}
        {showSuccess && <SuccessMessage />}

        {/* Header */}
        <div className="bg-white border-b p-3 sm:p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-blue-600 rounded-full" />
            </div>
            <div>
              <h3 className="text-[#0d3557] regular text-sm sm:text-base regular">Offshore 365 Chatbot</h3>
              <p className="text-xs text-[#0d3557]">We reply instantly</p>
            </div>
          </div>
          <button onClick={toggleChat} className="text-gray-400 hover:text-gray-600">
            <Minus size={16} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[300px] sm:h-[350px] overflow-y-auto p-4 space-y-3 bg-gray-50">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs regular px-3 py-2 rounded-lg text-sm regular ${
                message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-white border text-[#0d3557]'
              }`}>
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border px-3 py-2 rounded-lg text-sm text-gray-600 italic regular animate-pulse">
                ...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input or Options */}
        <div className="p-2 border-t bg-white rounded-b-lg">
          {showOptions() && currentStep === 'service' ? (
            <div className="space-y-2">
              {/* First row: 2 columns */}
              <div className="grid grid-cols-2 gap-2">
                {chatFlow.service.options.slice(0, 2).map(option => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.id, option.text)}
                    className="flex regular items-center  gap-2 px-3 py-2 border rounded-lg text-sm text-[#0d3557] hover:bg-gray-50 transition"
                  >
                    {option.text}
                  </button>
                ))}
              </div>

              {/* Second row: 3 columns */}
              <div className="grid grid-cols-3 gap-2">
                {chatFlow.service.options.slice(2, 5).map(option => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.id, option.text)}
                    className="flex items-center regular gap-2 px-3 py-2 border rounded-lg text-sm text-[#0d3557] hover:bg-gray-50 transition"
                  >
                    {option.text}
                  </button>
                ))}
              </div>

              {/* Third row: 2 columns */}
              <div className="grid grid-cols-2 gap-2">
                {chatFlow.service.options.slice(5).map(option => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.id, option.text)}
                    className="flex items-center regular gap-2 px-3 py-2 border rounded-lg text-sm text-[#0d3557] hover:bg-gray-50 transition"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            showOptions() && (
              <div className="grid grid-cols-2 gap-2">
                {chatFlow[currentStep].options.map(option => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.id, option.text)}
                    className="flex items-center regular gap-2 px-3 py-2 border rounded-lg text-sm text-[#0d3557] hover:bg-gray-50 transition"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )
          )}

          {showInput() && (
            <div className="flex mt-2 space-x-2">
              <input
                type={showInput() === 'email' ? 'email' : 'text'}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
                placeholder={showInput() === 'email' ? 'Your email address...' : 'Type your name...'}
                className="flex-1 border regular rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                disabled={showSuccess}
              />
              <button 
                onClick={handleInputSubmit}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 disabled:opacity-50"
                disabled={showSuccess}
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