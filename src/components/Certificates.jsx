import React from 'react';

const Certificates = () => {
  const certs = [
    { id: 1, title: 'React', issuer: 'Hackerrank', date: '19 Mar 2026' , seal: 'https://i.pinimg.com/736x/10/90/93/1090932b057a65feab4dba0941c074cc.jpg'},
    { id: 2, title: 'JavaScript', issuer: 'Hackerrank', date: '19 Mar 2026' , seal: 'https://i.pinimg.com/736x/10/90/93/1090932b057a65feab4dba0941c074cc.jpg'},
    { id: 3, title: 'Css Basics', issuer: 'Hackerrank', date: '6 Mar 2026' , seal: 'https://i.pinimg.com/736x/10/90/93/1090932b057a65feab4dba0941c074cc.jpg'},

    { id: 4, title: 'Web Development', issuer: 'Codec Technology', date: '31 Aug 2025' , seal: "https://imgs.search.brave.com/Te5InyG-rDIKP31DYflHLAm4Yegt2vVf_TU1BkhQaXQ/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jb2Rl/Y3RlY2hub2xvZ2ll/cy5pbi93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNi8wMS8yMjIt/Mi0xNTB4MTUwLnBu/Zw"},

    { id: 5, title: 'C&C++', issuer: 'Iteonix Solutions', date: '22 july 2025' , seal: 'https://imgs.search.brave.com/u52mglbQj-XQQtJt0moMEbQ743dDBTdWXc537gxKORc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdWxj/ZG4uYXp1cmVlZGdl/Lm5ldC9iaXotbGl2/ZS9pbWctMzIweDIw/MC9pdHJvbml4LXNv/bHV0aW9ucy01MTYz/NjAzLWVkODQ1NDFi/LmpwZWc'},
    { id: 6, title: 'Appreciation', issuer: 'Zyniq', date: '3 Feb 2026' , seal: 'https://imgs.search.brave.com/a4Ba6gDNKqWwkK5BpZyUPDOaNDgJuyikf7S8fFN3YiQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZWExMGVkYTQ5/NzUxNGYzNDJkNGZh/MjQ4M2RjMGU3YWU4/YTFhNDk2ZGI3MzI4/Yzk5NTQ3ODI4Nzhk/ZjAwNzM4Ny93d3cu/enludGlxLmluLw'},
    { id: 7, title: 'Excellence', issuer: 'Zyniq', date: '4 Feb 2026' , seal: 'https://imgs.search.brave.com/a4Ba6gDNKqWwkK5BpZyUPDOaNDgJuyikf7S8fFN3YiQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZWExMGVkYTQ5/NzUxNGYzNDJkNGZh/MjQ4M2RjMGU3YWU4/YTFhNDk2ZGI3MzI4/Yzk5NTQ3ODI4Nzhk/ZjAwNzM4Ny93d3cu/enludGlxLmluLw'},
  ];
 const viewCertificate = [
    { id: 1, src: '/cerificates/hacker_react.jpg' },
    { id: 2, src: '/cerificates/hacker_java.jpg' },
    { id: 3, src: '/cerificates/hacker_css.jpg' },
    { id: 4, src: '/cerificates/codec_web.jpg' },
    { id: 5, src: '/cerificates/Iteronix_sol.jpg' },
    { id: 6, src: '/cerificates/zyntiq_app.jpg' },
    { id: 7, src: '/cerificates/zyntiq_exc.jpg' },
  ];
  

  return (
    <div className="flex-1 bg-none rounded-[10px] px-4 md:px-7 flex flex-col items-center shadow-2xl fade-in overflow-y-auto max-h-full min-h-0 hide-scrollbar">
      {/* Page Header */}
      <div className="bg-none px-4 md:px-16 py-2 md:py-4 rounded-[10px] mb-4 md:mb-10 shadow-xl drop-shadow-2xl border border-white/40">
        <h2 className="text-3xl md:text-6xl playfair-display-sc-regular text-white">Certificates</h2>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full hidden-scrollbar  scolbar-display-none">
        {certs.map((cert) => (
          <div key={cert.id} className="bg-gray-300/50 p-3 md:p-6 rounded-[20px] md:rounded-[35px] border border-white/30 flex flex-col items-center text-center gap-2 md:gap-4 shadow-xl hover:bg-gray-800 hover:text-white transition-all group">
            
            {/* Badge/Seal Icon Area */}
            <div className="w-12 h-12 md:w-20 md:h-20 bg-none rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
               <img src={cert.seal} alt="Seal" className="w-full h-full object-cover rounded-full" />
            </div>

            {/* Certificate Details */}
            <div className="space-y-1">
              <h3 className="text-sm md:text-xl font-bold italic leading-tight uppercase tracking-wide">
                {cert.title}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-300 font-script text-lg md:text-2xl">
                Issued by {cert.issuer}
              </p>
              <p className="text-xs font-mono opacity-60">
                DATE: {cert.date}
              </p>
            </div>

            {/* View Certificate Button */}
            <button 
              className="mt-1 md:mt-2 bg-white text-gray-800 px-3 md:px-6 py-1 rounded-full text-xs md:text-sm font-bold italic shadow-md hover:bg-blue-500 hover:text-white transition"
              onClick={() => window.open(viewCertificate.find(c => c.id === cert.id)?.src, '_blank')}
            >
              View Credential
            </button>
          </div>    
        ))}
      </div>
    </div>
  );
};

export default Certificates;