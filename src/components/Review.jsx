import React from 'react';

const Review = () => {
  return (
    <div className="flex-1 bg-none rounded-[10px] p-2 md:p-2 flex flex-col gap-4 md:gap-6 items-center shadow-2xl fade-in">
      {/* Page Header */}
      <div className="bg-none px-4 md:px-20 py-2 md:py-5 rounded-[10px] shadow-md border border-white/40">
        <h2 className="text-2xl md:text-5xl playfair-display-sc-regular text-white">Review</h2>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-3xl bg-gray-400/30 p-4 md:p-3 rounded-2xl md:rounded-4xl border border-white/20 flex flex-col gap-4 md:gap-8 shadow-inner">
        <div className="w-full flex flex-col gap-2 md:gap-3">
          <label className="text-xs md:text-sm uppercase tracking-[0.35em] text-white opacity-100">Title</label>
          <input 
            type="text" 
            placeholder="Write a short title"
            className="w-full bg-gray-400/30 rounded-full py-2 md:py-3 px-4 md:px-8 text-base md:text-2xl text-white placeholder-white outline-none shadow-sm border border-white/30 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
          />
        </div>

        <div className="w-full flex flex-col gap-2 md:gap-3">
          <label className="text-xs md:text-sm uppercase tracking-[0.35em] text-white opacity-100">Describe</label>
          <textarea 
            placeholder="Share your review or feedback..."
            rows="4"
            className="w-full bg-gray-400/30 rounded-[20px] md:rounded-[30px] p-3 md:p-5 text-base md:text-2xl text-white placeholder-white outline-none shadow-sm border border-white/30 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition resize-none"
          />
        </div>

        <button className="self-center bg-gray-600 hover:bg-gray-900 text-white px-6 md:px-14 py-2 md:py-4 rounded-full text-sm md:text-xl font-semibold transition-all shadow-xl transform active:scale-95 border-b-2 md:border-b-4 border-gray-400">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Review;