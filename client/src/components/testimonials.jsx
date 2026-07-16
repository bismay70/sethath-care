import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M",
    role: "Employee",
    title: "Exceptional Care and Support!",
    text: "The doctors and staff at Omnio Hospital were incredibly supportive throughout my treatment.",
    image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily R",
    role: "Patient",
    title: "A Lifesaving Experience",
    text: "I was amazed by the speed and precision of the medical team during my emergency visit.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
  {
    id: 3,
    name: "David K",
    role: "Patient",
    title: "Highly Recommend!",
    text: "The facilities are top-notch and the staff genuinely cares about your well-being.",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",
    rating: 4,
  },
  {
    id: 4,
    name: "Michael T",
    role: "Patient",
    title: "Professional and Kind",
    text: "Every nurse and doctor treated me like family. Best healthcare experience I've had.",
    image: "https://images.unsplash.com/photo-1471286174890-9c11241513e1?auto=format&fit=crop&w=400&q=80",
    rating: 5,
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#5ab2b8] py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Text and Controls */}
          <div className="w-full lg:w-1/3 text-white text-center lg:text-left z-10 relative">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Voices of Trust <br /> Our Patients
            </h2>
            <p className="text-lg opacity-90 mb-10 max-w-sm mx-auto lg:mx-0">
              Real stories from our patients about their journey to healing with Omnio Hospital
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-[#0d7c86] hover:bg-[#0a666e] flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#0d7c86] hover:bg-[#0a666e] flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Right Side: Carousel */}
          <div className="w-full lg:w-2/3 overflow-visible">
            {/* The carousel container must allow overflowing items to be partially visible on the right */}
            <div className="flex gap-4 lg:gap-6 items-center w-[200%] transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${activeIndex * 10}%)` }}>
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;

                return (
                  <div 
                    key={testimonial.id}
                    className={`transition-all duration-500 ease-in-out shrink-0 flex items-center ${
                      isActive ? "w-[500px]" : "w-[200px]"
                    }`}
                  >
                    {isActive ? (
                      // Active Expanded Card
                      <div className="bg-white rounded-[2rem] shadow-xl w-full h-[320px] flex overflow-hidden relative transition-all duration-500">
                        {/* Removed Play button overlay */}
                        {/* Image Half */}
                        <div className="w-5/12 h-full">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Content Half */}
                        <div className="w-7/12 p-8 flex flex-col justify-between">
                          <div>
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                              ))}
                            </div>
                            <h3 className="text-[#0d7c86] font-bold text-xl mb-3 leading-tight">
                              {testimonial.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                              "{testimonial.text}"
                            </p>
                          </div>
                          <div className="mt-4">
                            <span className="inline-block border border-[#5ab2b8] text-[#5ab2b8] text-xs font-semibold px-4 py-1.5 rounded-full">
                              {testimonial.name} - {testimonial.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Inactive Card (Just Image)
                      <div 
                        className="rounded-[2rem] overflow-hidden w-full h-[260px] relative cursor-pointer hover:shadow-xl transition-all duration-500 opacity-90 hover:opacity-100"
                        onClick={() => setActiveIndex(index)}
                      >
                         {/* Removed Play button overlay */}
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
