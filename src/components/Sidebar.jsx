import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { name: 'Home', icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png' },
    { name: 'About', icon: 'https://cdn-icons-png.flaticon.com/512/1250/1250615.png' },
    { name: 'Skills', icon: 'https://cdn-icons-png.flaticon.com/512/3484/3484606.png' },
    { name: 'Projects', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135820.png' },
    { name: 'Certificates', icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828535.png' },
    { name: 'Review', icon: 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png' },
    { name: 'Contact', icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png' },
  ];

  const kratosImages = [
    { name: 'Home', src: 'https://i.pinimg.com/1200x/89/74/9e/89749efa3cddc6e45b83bfe3f37edb26.jpg' },
    { name: 'About', src: 'https://i.pinimg.com/736x/9e/b9/6a/9eb96a77f06c9880b0f128a930db4f19.jpg' },
    { name: 'Skills', src: 'https://i.pinimg.com/1200x/b4/ff/f2/b4fff29038ae5cf93ded463a92d3c36f.jpg' },
    { name: 'Projects', src: 'https://i.pinimg.com/1200x/26/fc/f3/26fcf33a971f9afb2a21ded91b0d5965.jpg' },
    { name: 'Certificates', src: 'https://i.pinimg.com/736x/92/0c/1a/920c1a4ae808c459d4f4ae9735ee5fe6.jpg ' },
    { name: 'Review', src: 'https://i.pinimg.com/736x/b1/4f/7b/b14f7bd3cb7d679ef113016d90efa097.jpg' },
    { name: 'Contact', src: 'https://i.pinimg.com/736x/30/28/54/302854bafdd45d634748d70cb54446fb.jpg' },
  ];

  return (
    <div className="w-full md:w-64 rounded-[10px] p-2 md:p-8 flex flex-row md:flex-col gap-2 md:gap-5 shadow-xl border border-white/20">
      <div className="flex flex-row md:flex-col gap-5 md:gap-6 overflow-x-auto md:overflow-visible">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`relative shrink-0 md:shrink flex items-center gap-1 md:gap-3 py-2 md:py-3 px-2 md:px-3.5 rounded-full text-xs md:text-base font-script shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 text-left min-w-0 overflow-hidden
              ${activeTab === item.name ? 'bg-red-300 text-white' : 'bg-white text-black hover:bg-gray-100'}`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={kratosImages.find((entry) => entry.name === item.name)?.src}
                alt="Kratos background"
                className={`absolute inset-0 w-full h-full object-cover opacity-90 scale-110 transition-all duration-300 ${activeTab === item.name ? '' : 'blur-[20px]'}`}
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="relative z-10 w-6 h-6 md:w-11 md:h-11 bg-white/90 rounded-full flex items-center justify-center shadow-xl overflow-hidden shrink-0">
              <img src={item.icon} alt={`${item.name} icon`} className="w-3 h-3 md:w-5 md:h-5 object-contain" />
            </div>
            <span className="relative z-10 md:block hidden">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;