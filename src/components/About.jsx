import React from 'react';

const About = () => {
  return (
    <div className="flex-1 bg-none rounded-[10px] p-2 md:p-3 flex flex-col md:flex-row items-center justify-around gap-4 md:gap-10 shadow-2xl fade-in">
      
      {/* Circle Profile Section */}
      <div className="relative flex flex-col items-center">
        <div className="w-70 h-70 md:w-100 md:h-100 rounded-full border-4 md:border-6 border-white drop-shadow-2xl overflow-hidden bg-gray-300">
          <img src="\cerificates\image.png" alt="Harsh Kapoor" className="w-full h-full object-cover " />
        </div>
      </div>

      {/* About Description Block */}
      <div className="max-w-sm md:max-w-md w-full flex flex-col items-center">
        <div className="bg-none px-4 md:px-16 py-2 md:py-4 rounded-2xl mb-4 md:mb-8 shadow-xl border border-white/40">
          <h2 className="text-3xl md:text-5xl playfair-display-sc-regular text-white">About</h2>
        </div>
        
        <div className=" p-4 md:p-8 rounded-[20px] md:rounded-[40px] backdrop-blur-sm border border-white/20 shadow-xl">
          <p className="text-center text-white text-lg md:text-2xl leading-relaxed italic font-medium">
            "Full Stack Developer by trade, Data Analyst by curiosity. <br/><br/>
            I specialize in building robust web applications and translating raw data into actionable business intelligence. 
            From designing responsive UI in React to managing data pipelines, I thrive at the intersection 
            of logic and creativity."
          </p>
        </div>  
      </div>
    </div>
  );
};

export default About;