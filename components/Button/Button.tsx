import { ReactElement } from 'react';

interface IButton {
  children?: string | ReactElement | ReactElement[] | ReactElement;
  generateTitle?: () => void;
}

const Button: React.FC<IButton> = ({ children, generateTitle }) => {
  return (
    <div className="max-w-[500px] mx-auto mt-[70px]">
      <button
        className="
        w-full 
        py-1 
        font-titillium-semiBold text-[24px] sm:text-[28px] md:text-[32px] text-center text-brand-dark hover:text-brand-pink 
        border-brand-dark border-2 hover:border-brand-pink 
        rounded-lg shadow-custom-dark 
        hover:shadow-custom-pink 
        transition-colors"
        onClick={generateTitle}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
