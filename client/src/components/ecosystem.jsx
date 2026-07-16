import React from "react";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Smile, 
  Activity, 
  Brain, 
  Bone, 
  ShieldPlus, 
  Droplets, 
  User, 
  Baby,
  ChevronRight
} from "lucide-react";

const specialties = [
  {
    title: "Cardiac Care",
    desc: "Heart health treatment",
    icon: Heart,
  },
  {
    title: "Dentistry",
    desc: "Dental Care Solutions",
    icon: Smile,
  },
  {
    title: "Gastrosciences",
    desc: "Digestive health care.",
    icon: Activity,
  },
  {
    title: "Neuroscience",
    desc: "Brain and nerve care.",
    icon: Brain,
  },
  {
    title: "Orthopaedics",
    desc: "Bone and joint care.",
    icon: Bone,
  },
  {
    title: "Liver Care",
    desc: "Liver Health and Transplant Care",
    icon: ShieldPlus,
  },
  {
    title: "Renal Care",
    desc: "Kidney health treatment",
    icon: Droplets,
  },
  {
    title: "Gynaecology",
    desc: "Gynaecological Care Solutions",
    icon: User,
  },
  {
    title: "Paediatric Care",
    desc: "Child health services",
    icon: Baby,
  },
];

const Ecosystem = () => {
  return (
    <section className="py-20 bg-[#f9fbfd]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#063338]">
            An Ecosystem for Clinical Excellence
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Discover world-class healthcare at SehathCare's specialized centres of medical innovation. Our advanced facilities offer unmatched expertise in key specialties and super specialties, setting new global standards in clinical excellence and patient care.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {specialties.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow border border-blue-50 cursor-pointer"
            >
              <div className="relative flex-shrink-0">
                <item.icon className="w-10 h-10 text-[#0d7c86] relative z-10" strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center z-20">
                   <span className="text-white text-xs font-bold leading-none">+</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#1a3a40] text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors">
            View All Specialties
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Ecosystem;
