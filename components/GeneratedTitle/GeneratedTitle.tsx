import Image from 'next/image';
import React from 'react';

type IGeneratedTitleProps = {
  title?: string;
};

const GeneratedTitle: React.FC<IGeneratedTitleProps> = ({ title }) => {
  return (
    <div className="max-w-[725px] mx-auto mt-3 relative ">
      <Image
        className="absolute -rotate-45 md:top-11 overflow-visible"
        src="/img/arrow-down.png"
        alt="Arrow down pointing to generated title"
        width={100}
        height={100}
      />
      <p className="mt-3 font-proza-bold text-center text-[20px] text-brand-dark">
        {title}
      </p>
    </div>
  );
};

export default React.memo(GeneratedTitle);
