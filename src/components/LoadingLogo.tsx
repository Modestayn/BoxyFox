import React, { useEffect, useState } from 'react';

const word = 'BoxyFox';
const orangeColor = '#FF6A00';

type LoadingLogoProps = {
  onFinish: () => void;
};

export const LoadingLogo: React.FC<LoadingLogoProps> = ({ onFinish }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(word.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === word.length) {
        clearInterval(interval);
        setTimeout(onFinish, 500);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '4rem',
        fontWeight: 600,
        color: orangeColor,
        userSelect: 'none',
      }}
    >
      {displayedText}
      <span
        className='cursor'
        style={{
          display: 'inline-block',
          width: '2px',
          animation: 'blink 1s step-start infinite',
          backgroundColor: orangeColor,
          marginLeft: '4px',
          height: '1.2em',
          verticalAlign: 'bottom',
        }}
      ></span>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};
