import React from 'react';
const Header = () => {
  return (
    <header className="max-w-screen-xl h-[100px] px-2.5 mx-auto flex justify-start items-center">
      <h1 className="font-titillium-regular text-[24px] sm:text-[28px] md:text-[32px] text-brand-dark">
        THESIS TITLE{' '}
        <span className="font-titillium-bold text-pink-500">IDEA</span>
      </h1>
    </header>
  );
};

export default React.memo(Header);
