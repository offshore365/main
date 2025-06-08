"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialMetrics() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef(null)

  const testimonials = [
    {
      company: "Chris P",
      designation: "Operations Director",
      metric: "<1%",
      description: "Less than 1% rework due to Offshore 365's precise architectural work.",
      color: "bg-[#B5C7D6]",
      hoverColor: "bg-[#9EB3C8]",
      dotColor: "#7A95B0",
      textColor: "text-white",
    },
    {
      company: "David L",
      designation: "CEO",
      metric: "40%",
      description: "Operational costs cut by 40% without compromising on quality.",
      color: "bg-[#B2E7F1]",
      hoverColor: "bg-[#90d9eb]",
      dotColor: "#6ECBD9",
      textColor: "text-white",
    },
    {
      company: "Jessica M",
      designation: "Project Lead",
      metric: "2x",
      description: "Doubled our team's capacity with scalable offshore talent.",
      color: "bg-[#E2E0A0]",
      hoverColor: "bg-[#CDCB8F]",
      dotColor: "#B8B67E",
      textColor: "text-white",
    },
    {
      company: "Anna K",
      designation: "Principal",
      metric: "30%",
      description: "Accelerated timelines by 30% using the time zone advantage.",
      color: "bg-[#E1C2C1]",
      hoverColor: "bg-[#CBA9A8]",
      dotColor: "#B28E8D",
      textColor: "text-white",
    },
    {
      company: "Robert D",
      designation: "Senior Project Architect",
      metric: "100%",
      description: "Top-tier BIM expertise powering our tech-heavy deliverables.",
      color: "bg-[#FFCF72]",
      hoverColor: "bg-[#E6BA60]",
      dotColor: "#C9A24E",
      textColor: "text-white",
    },
    {
      company: "Mark T",
      designation: "Design Director",
      metric: "35%",
      description: "Project output increased by 35% in Q1 with seamless integration.",
      color: "bg-[#CCB4FE]",
      hoverColor: "bg-[#B99FF0]",
      dotColor: "#9B7CD3",
      textColor: "text-white",
    },
  ];

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPaused, testimonials.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const goToSlide = (index) => setCurrentSlide(index)
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  const [visibleSlides, setVisibleSlides] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleSlides(1)
      else if (window.innerWidth < 1024) setVisibleSlides(2)
      else setVisibleSlides(4)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const displaySlides = [...testimonials, ...testimonials, ...testimonials]
  const cardWidth = visibleSlides === 1 ? 280 : visibleSlides === 2 ? 260 : 310
  const gap = visibleSlides === 1 ? 16 : 12
  const slideWidth = cardWidth + gap
  const containerWidth = slideWidth * visibleSlides
  const offsetX = visibleSlides === 1 ? (window.innerWidth - cardWidth) / 2 - gap : 0

  return (
    <div className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d3557] mb-2 tracking-tight">
              This Impact Is Real
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#0d3557] max-w-2xl mx-auto">
              Discover how businesses grow with offshore 365
            </p>
          </div>
          {/* <div className="flex space-x-3">
            <button
              onClick={prevSlide}
              className="p-3 sm:p-4 border border-gray-300 rounded-full hover:bg-gray-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-[#0d3557]" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 sm:p-4 border border-gray-300 rounded-full hover:bg-gray-100"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#0d3557]" />
            </button>
          </div> */}
        </div>

        <div
          className="w-full overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentSlide % testimonials.length) * slideWidth - (offsetX || 0)}px)`,
              gap: `${gap}px`,
              paddingLeft: visibleSlides === 1 ? `${offsetX}px` : 0
            }}
          >
            {displaySlides.map((item, index) => (
              <div
                key={index}
                className={`testimonial-card ${item.color} ${item.textColor} rounded-2xl `}
                style={{
                  minWidth: `${cardWidth}px`,
                  height: visibleSlides === 1 ? "400px" : "370px",
                  flexShrink: 0
                }}
              >
                <div className="text-center px-6 sm:px-8 py-8 sm:py-10">
                  <span className="font-semibold text-[20px] block mb-1">{item.company}</span>
                  <span className="text-[14px] block mb-4">{item.designation}</span>
                  <h3 className="text-[50px] font-bold mb-2">{item.metric}</h3>
                  <p className="text-[16px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:mt-12">
          <div className="flex space-x-3 sm:space-x-4">
            {testimonials.map((item, index) => {
              const isActive = (currentSlide % testimonials.length) === index
              return (
                <button
                  key={`dot-${index}`}
                  onClick={() => goToSlide(index)}
                  className="relative focus:outline-none"
                  aria-label={`Go to testimonial ${item.company}`}
                >
                  <div
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 border border-white rounded-full transition-all duration-500 flex items-center justify-center ${isActive ? "scale-125" : "scale-100 opacity-70 hover:opacity-100"}`}
                    style={{ backgroundColor: item.dotColor }}
                  >
                    <div
                      className={`absolute inset-0 rounded-full ${isActive ? "animate-pulse" : ""}`}
                    >
                     
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}