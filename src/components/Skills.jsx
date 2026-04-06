import React from 'react';

const Skills = () => {
  const devSkills = ['MongoDB', 'ExpressJs', 'ReactJs', 'NodeJs', 'Python'];
  const dataSkills = ['Excel', 'PowerBi', 'Java','SQL'];
  const images = {
    'MongoDB': 'https://i.pinimg.com/736x/91/23/7f/91237f1eca767ef74d722ca534f9281a.jpg',
    'ExpressJs': 'https://i.pinimg.com/1200x/5d/09/32/5d0932d4dd17c926806635893260205e.jpg',
    'ReactJs': 'https://i.pinimg.com/736x/8d/fe/0a/8dfe0a99a74efbec4af0d8e440c00282.jpg',
    'NodeJs': 'https://i.pinimg.com/736x/e3/a2/49/e3a2498d2fabe3948c98e784f7f51808.jpg',
    'Python': 'https://i.pinimg.com/736x/6c/df/12/6cdf1232b1f705573716e1c3733a7bbc.jpg',
    'Excel': 'https://i.pinimg.com/736x/93/df/17/93df1786fd2eb09e5864b07ebdc5b474.jpg',
    'PowerBi': 'https://i.pinimg.com/736x/b8/87/63/b8876357eecb487ac780d266086bb55a.jpg',
    'Java': 'https://i.pinimg.com/1200x/8d/0c/72/8d0c72f49aaa0a6a35d34c7b98035baa.jpg',
    'SQL': 'https://i.pinimg.com/736x/ba/b2/c7/bab2c760c60f17191cb3a002e08a3dbf.jpg',
  };

  const SkillItem = ({ name }) => (
    <div className="flex items-center gap-2 md:gap-4 group fade-in">
      {/* Circle for Icon */}
      <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-400 rounded-full  shadow-xl border-2 md:border-4 border-white overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform drop-shadow-2xl">
        {images[name] && <img src={images[name]} alt={name} className="w-full h-full object-cover" />}
      </div>
      
      {/* Pencil-Tip Shape */}
      <div 
        className="bg-none text-white text-lg md:text-2xl font-bold px-4 md:px-8 py-2 md:py-3 w-32 md:w-48 shadow-2xl border border-white/20 transition-transform group-hover:scale-105 drop-shadow-2xl fade-in"
        style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)' }}
      >
        {name}
      </div>
    </div>
  );

  return (
    <div className="flex-1 bg-none rounded-[10px]  flex flex-col items-center shadow-2xl fade-in p-4">
      <div className="bg-none px-4 md:px-20 py-2 md:py-4 rounded-2xl mb-4 md:mb-12 drop-shadow-2xl shadow-xl border border-white">
        <h2 className="text-3xl md:text-6xl playfair-display-sc-regular text-white">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-20 gap-y-4 md:gap-y-6 w-full max-w-4xl">
        <div className="space-y-4 md:space-y-6">
          {devSkills.map(skill => <SkillItem key={skill} name={skill} />)}
        </div>
        <div className="space-y-4 md:space-y-6">
          {dataSkills.map(skill => <SkillItem key={skill} name={skill} />)}
        </div>
      </div>
    </div>
  );
};

export default Skills;