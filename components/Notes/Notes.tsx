import React from 'react';

const Notes = () => {
  return (
    <p className="max-w-[470px] mt-[150px] mx-auto font-proza-regular text-center text-[18px] sm:text-[20px] text-brand-dark">
      This isn’t for you to use the title generated here, but was for you to get
      an <span className="text-pink-500">idea</span>.
    </p>
  );
};

export default React.memo(Notes);
