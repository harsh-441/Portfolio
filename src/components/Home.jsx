import React from 'react';

const Home = () => {
  return (
    <div className="flex-1 relative bg-none rounded-[10px] overflow-hidden  shadow-2xl fade-in">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/cerificates/main.png')" }} 
      />

      {/* Name and Title Overlay */}
      <div className="absolute inset-0 flex flex-col items-center md:items-end justify-center p-4 md:p-25 text-center md:text-right">
        <div className="relative w-full max-w-sm md:max-w-xl p-4 md:p-10 bg-white/10 md:bg-white/1 rounded-[20px] md:rounded-[100px] backdrop-blur-sm">
          <h1 className="text-2xl md:text-7xl playfair-display-sc-regular text-black font-black opacity-100 drop-shadow-lg">
            Harsh Kapoor
          </h1>
          <div className="mt-2 md:mt-4 space-y-1 italic">
            <p className="text-lg md:text-4xl font-script text-white">Full Stack Developer</p>
            <p className="text-base md:text-2xl font-script text-white">And</p>
            <p className="text-lg md:text-4xl font-script text-white">Data Analyst</p>
          </div>
        </div>
      </div>
      </div> 
  );
};

export default Home;