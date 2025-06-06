
import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-transparent border-t-cyan-400 border-r-purple-400 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-pink-400 border-l-blue-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <div className="absolute inset-2 w-16 h-16 border-2 border-transparent border-t-cyan-300 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
      </div>
      <div className="absolute mt-32 text-cyan-400 text-lg font-light tracking-widest animate-pulse">
        DIVYA PATEL
      </div>
    </div>
  );
};

export default LoadingAnimation;
