import React from 'react';

const AppSection = () => {
  return (
    <div className="flexCenter flex-col">
      <div className="w-full h-1/4 flexCenter">
        <div className="w-2/3 h-full flex justify-center pl-5 flex-col gap-2 items-start">
          <p className=" text-xl">Welcome to Duffle.io</p>
          <p className="text-white font-mono text-2xl font-semibold tracking-wide">
            Ohayo! Manthan
          </p>
        </div>
        <div className="w-1/3 h-full flexEnd px-4 py-3">
          <img
            src="https://i.ibb.co/80vYXmD/logo-invert-bg.png"
            alt="logo-invert-bg"
            className=""
          />
        </div>
      </div>
      <div className="w-[100%] h-1 border-b-[1px] border-gray-700"></div>
    </div>
  );
};

export default AppSection;

