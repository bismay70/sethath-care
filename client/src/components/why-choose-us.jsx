import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f2f9f9] py-20">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a3a40]">
            Why Choose <span className="text-[#0d7c86]">SehathCare Hospital?</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold">SehathCare Hospital</span>, we blend expert medical care with compassion, offering personalized treatment to ensure every patient feels supported and valued throughout their healing journey.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[220px]">
          
          {/* Card 1: 60+ Years */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3 row-span-2 bg-[#0c6b73] rounded-3xl overflow-hidden flex flex-col relative text-white group shadow-lg">
            <div className="p-8 z-10 relative">
              <h3 className="text-2xl font-bold mb-4">60+ Years of Excellence</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                Decades of trusted care, prioritizing your health and well-being
              </p>
            </div>
            <div className="mt-auto h-3/5 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c6b73] via-transparent to-transparent z-10 opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
                alt="Hospital Building" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 2: 1000+ Expert */}
          <div className="col-span-1 md:col-span-8 lg:col-span-6 row-span-1 bg-[#063338] rounded-3xl overflow-hidden flex relative text-white group shadow-lg">
            <div className="p-8 w-1/2 z-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">1000+ Expert Medical Care</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                A team of professionals committed to your Health and well-being
              </p>
            </div>
            <div className="w-1/2 h-full absolute right-0 bottom-0 flex justify-end items-end">
              <img 
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=600&q=80" 
                alt="Medical Team" 
                className="w-full h-[120%] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 3: Advanced Tech */}
          <div className="col-span-1 md:col-span-12 lg:col-span-3 row-span-1 bg-[#0c6b73] rounded-3xl overflow-hidden flex flex-col relative text-white group shadow-lg">
            <div className="p-6 z-10">
              <h3 className="text-xl font-bold mb-3">Advanced Medical Technology</h3>
              <p className="text-white/80 leading-relaxed text-xs">
                Medical technology for accurate diagnosis and effective treatment.
              </p>
            </div>
            <div className="mt-auto h-24 w-full relative">
               <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&q=80" 
                alt="Medical Technology" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 4: 98% Happy */}
          <div className="col-span-1 md:col-span-7 lg:col-span-5 row-span-1 bg-[#0c6b73] rounded-3xl overflow-hidden flex relative text-white group shadow-lg">
            <div className="p-8 w-3/5 z-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3">98% Happy Patients</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                We take pride in creating a positive experience for every patient.
              </p>
            </div>
            <div className="w-2/5 h-full absolute right-0 bottom-0 flex justify-end items-end pt-8">
              <img 
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=500&q=80" 
                alt="Happy Patient" 
                className="w-[120%] h-[120%] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 5: Pharmacy */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4 row-span-1 bg-[#063338] rounded-3xl overflow-hidden flex relative text-white group shadow-lg">
            <div className="p-8 w-full z-10 relative">
              <h3 className="text-2xl font-bold mb-3 relative z-10">40+ Years Trusted Pharmacy</h3>
              <p className="text-white/80 leading-relaxed text-sm relative z-10 w-3/4">
                We trusted pharmacy solutions, delivering quality care and reliability
              </p>
              
              {/* Image positioned bottom right */}
              <div className="absolute -bottom-4 -right-4 w-48 h-48">
                 <img 
                  src="https://images.unsplash.com/photo-1584308666744-24d5e4a7732a?auto=format&fit=crop&w=400&q=80" 
                  alt="Pharmacy Clipboard" 
                  className="w-full h-full object-cover rounded-tl-3xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
