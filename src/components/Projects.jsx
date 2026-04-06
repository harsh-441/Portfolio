import React from 'react';

const Projects = () => {
  const projectList = [1, 2, 3, 4, 5, ]; // Representing your 6 cards
  const projectNames = [
    'Insta Login UI',
    'Aarti Sangrah',
    'Job Card',
    'Stone Paper Scissors',
    'Basic Calculator',
    
  ];
 
  
  const projectLinks = [
    { id: 1, link: 'https://www.linkedin.com/feed/update/urn:li:activity:7433972026765348864/' },
    { id: 2, link: 'https://www.linkedin.com/feed/update/urn:li:activity:7432872195447640064/' },
    { id: 3, link: 'https://www.linkedin.com/feed/update/urn:li:activity:7432870208408629249/' },
    { id: 4, link: 'https://www.linkedin.com/feed/update/urn:li:activity:7373968402966761473/' },
    { id: 5, link: 'https://www.linkedin.com/feed/update/urn:li:activity:7373304369095766016/' },
  ];

  return (
    <div className="flex-1 bg-none rounded-[10px] p-2 px-2 md:px-5 flex flex-col items-center shadow-2xl fade-in overflow-y-auto max-h-full min-h-0 hide-scrollbar">
      <div className="bg-none px-4 md:px-20 py-2 md:py-4 rounded-[10px] mb-4 md:mb-10 shadow-xl drop-shadow-2xl border border-white/40">
        <h2 className="text-3xl md:text-6xl playfair-display-sc-regular text-white">Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
        {projectList.map((item) => (
          <div key={item} className="bg-gray-600/3 rounded-[10px] p-2 md:p-4 flex flex-col items-center gap-2 md:gap-4 shadow-xl border border-white/20 group">
            {/* Project Name Header */}
            <div className="bg-white/50 opacity-100 px-4 md:px-8 py-1 w-full text-center rounded-xl shadow-sm">
              <span className="text-black font-bold uppercase tracking-widest text-xs md:text-sm">{projectNames[item - 1]}</span>
            </div>
            {/* View Button */}
            <button 
              className="bg-gray-300 hover:bg-gray-800 hover:text-white px-6 md:px-12 py-1 md:py-2 rounded-full text-gray-800 font-bold italic transition-all shadow-md active:scale-95 text-sm md:text-base"
              onClick={() => window.open(projectLinks.find(p => p.id === item)?.link, '_blank')}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;