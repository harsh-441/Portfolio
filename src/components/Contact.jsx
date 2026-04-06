import React from 'react';

const Contact = () => {
  const socialLinks = [
    { name: 'Instagram', color: 'bg-pink-500', src: 'https://www.instagram.com/harshkapoor3031' },
    { name: 'LinkedIn', color: 'bg-blue-500', src: 'https://www.linkedin.com/in/harsh0121' },
    { name: 'GitHub', color: 'bg-gray-500', src: 'https://github.com/yourprofile' },
    { name: 'Email', color: 'bg-red-500', src: 'mailto:your.harshkapoor766@gmail.com' },
    { name: 'Phone', color: 'bg-green-500', src: 'tel:+917668025750' },
  ];
  const logoSrc = [
    { name: 'Instagram', src: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' },
    { name: 'LinkedIn', src: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
    { name: 'GitHub', src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
    { name: 'Email', src: 'https://cdn-icons-png.flaticon.com/512/732/732200.png' },
    { name: 'Phone', src: 'https://cdn-icons-png.flaticon.com/512/597/597177.png' },
  ];

  return (
    <div className="flex-1 bg-none rounded-[10px] p-4 md:p-7 flex flex-col items-center shadow-2xl fade-in">
      {/* Page Header */}
      <div className="bg-none px-8 md:px-24 py-2 md:py-4 rounded-[10px] mb-8 md:mb-24 shadow-xl drop-shadow-2xl border border-white/40">
        <h2 className="text-3xl md:text-6xl playfair-display-sc-regular text-white">Contact</h2>
      </div>

      {/* Circular Icons Row */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-12">
        {socialLinks.map((link, index) => {
          const logo = logoSrc.find(l => l.name === link.name);
          return (
            <div key={link.name} className="flex flex-col items-center gap-2 md:gap-4 group">
              <button 
                className={`${link.color} w-16 h-16 md:w-32 md:h-32 rounded-full border-2 md:border-[6px] border-white shadow-2xl flex items-center justify-center transition-all transform group-hover:scale-110 group-hover:bg-gray-300 relative`}
                onClick={() => window.open(link.src, '_blank')}
              >
                <img 
                  src={logo?.src} 
                  alt={link.name} 
                  className="w-8 h-8 md:w-16 md:h-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                />
                <span className="text-xs text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute">
                 
                </span> 
              </button>
              <span className="text-white font-bold italic tracking-wider text-xs md:text-sm">
                {link.name.toLowerCase()} 
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;