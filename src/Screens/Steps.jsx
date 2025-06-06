"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"

const steps = [
  {
    id: 1,
    title: "Understanding business needs",
    description: "Ensuring solutions that aligns perfectly for your unique project needs.",
    gradient: "linear-gradient(744deg, #A1D9E2 40%, #7AC1CD 70%, #3A8CA1)", // Green
  },
  {
    id: 2,
    title: "Assign the right Experts",
    description: "Providing right skills for right projects at the right time.",
    gradient: "linear-gradient(744deg, #FFE3A1, #FCD073 50%, #C28E23)", // Yellow
  },
  {
    id: 3,
    title: "Seamless integration",
    description: "Our team smoothly works with your existing workflows and tools.",
    gradient: "linear-gradient(744deg, #E6D9FF, #CCB4FE 50%, #8F6FFF)", // Blue
  },
  {
    id: 4,
    title: "Measure and optimise",
    description: "Track progress and continuously optimize to ensure success.",
    gradient: "linear-gradient(744deg, #E2E0A0 30%, #C8C679 65%, #A6A65F)", // Red
  },
];

const StepsSection = () => {
  const [activeGradientIndex, setActiveGradientIndex] = useState(0)
  const [hoveredGradient, setHoveredGradient] = useState("")
  const intervalRef = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 1000 })
    startInterval()
    return () => clearInterval(intervalRef.current)
  }, [])

  const startInterval = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveGradientIndex((prevIndex) => (prevIndex + 1) % steps.length)
    }, 5000)
  }

  const handleDotClick = (index) => {
    setActiveGradientIndex(index)
    startInterval()
  }

  const activeGradient = hoveredGradient || steps[activeGradientIndex].gradient

  return (
    <section
      className="py-20 min-h-screen transition-all duration-1000 text-white relative overflow-hidden"
      style={{ background: activeGradient }}
    >
      {[...Array(3)].map((_, i) => (
        <div
          key={`bg-wave-${i}`}
          className={`section-wave absolute w-[100%] h-[100%] opacity-30 left-[-50%] top-[-50%] rounded-[40%]`}
          style={{
            background: activeGradient,
            animationDelay: `${i * 2}s`,
            animationDuration: `${15 + i * 5}s`,
          }}
        />
      ))}

      {/* Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] tracking-wide font-bold mb-2">
          Powering 365 Productivity
        </h1>
        <p className="text-[16px] sm:text-[18px] md:text-[20px]">
          with our proven 4-step process for efficiency
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center gap-12">
          {steps.map((step, index) => {
            const isActive = activeGradientIndex === index
            return (
              <motion.div
                key={index}
                className={`group e-card playing relative w-[300px] h-[400px] bg-transparent shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 ${isActive ? "scale-105 shadow-white/30 shadow-lg z-20" : "hover:scale-105 z-10"
                  }`}
                onMouseEnter={() => setHoveredGradient(step.gradient)}
                onMouseLeave={() => setHoveredGradient("")}
                onClick={() => handleDotClick(index)}
                style={{
                  border: isActive ? "2px solid white" : "2px solid transparent",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`wave absolute w-[540px] h-[700px] opacity-60 left-0 ${i === 0 ? "top-0 -mt-[70%]" : "top-[210px]"
                      } -ml-[50%] rounded-[40%]`}
                    style={{ background: step.gradient }}
                  />
                ))}

                {/* Step Number */}
                <div className="absolute group-hover:scale-110 top-20 left-1/2 transform -translate-x-1/2 border-2 border-white text-white font-bold text-sm sm:text-base w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg z-10">
                  {step.id}
                </div>

                {/* Card Content */}
                <div className="infotop absolute top-36 left-0 right-0 text-center text-white px-6">
                  <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] tracking-wide font-semibold mb-6 transition-transform duration-300 group-hover:scale-110">
                    {step.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-light px-1 transition-transform duration-300 group-hover:scale-110">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Liquid Dots Navigation */}
      <div className="flex justify-center mt-16 relative z-10" data-aos="fade-up">
        <div className="flex space-x-4">
          {steps.map((step, index) => {
            const isActive = activeGradientIndex === index
            return (
              <button
                key={`dot-${index}`}
                onClick={() => handleDotClick(index)}
                className="relative focus:outline-none group"
                aria-label={`Go to step ${step.id}: ${step.title}`}
              >
                <div
                  className={`liquid-dot w-3 h-3 border border-white rounded-full transition-all duration-500 flex items-center justify-center ${isActive ? "scale-125" : "scale-100 opacity-70 hover:opacity-100"
                    }`}
                  style={{ background: step.gradient }}
                >
                  <div className={`absolute inset-0 rounded-full overflow-hidden ${isActive ? "animate-pulse" : ""}`}>
                    <div
                      className="liquid-bubble absolute w-5 h-5 rounded-full"
                      style={{ background: step.gradient }}
                    />
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Wave and Liquid Animations */}
      <style jsx>{`
        .wave {
          animation: wave 155s infinite linear;
          pointer-events: none;
        }

        .section-wave {
          animation: wave 30s infinite linear;
          pointer-events: none;
        }

        .playing .wave {
          animation: wave 3000ms infinite linear;
        }

        .wave:nth-child(2) {
          animation-duration: 100s;
        }

        .playing .wave:nth-child(2) {
          animation-duration: 8000ms;
        }

        .wave:nth-child(3) {
          animation-duration: 145s;
        }

        .playing .wave:nth-child(3) {
          animation-duration: 10000ms;
        }

        .group:hover .wave {
          animation-play-state: paused;
        }

        .liquid-bubble {
          animation: liquidBubble 8s infinite ease-in-out;
          transform-origin: center;
        }

        .liquid-dot:hover .liquid-bubble {
          animation-duration: 3s;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes liquidBubble {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 50% 60% 30% 60% / 40% 30% 70% 50%;
          }
          75% {
            border-radius: 40% 60% 70% 30% / 60% 40% 30% 60%;
          }
        }
      `}</style>
    </section>
  )
}

export default StepsSection
