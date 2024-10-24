import React from 'react';

const SaibaSection = ({ title, text, imgSrc, reverse }) => {
  return (
    <div className="py-16 text-gray-800 h-screen flex justify-center items-center">
        <div className={`container mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
            <div className="md:w-1/2">
                <img src={imgSrc} alt="Info" className="" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-lg mb-4">{text}</p>
            </div>
        </div>
    </div>
  );
}

export default SaibaSection;
