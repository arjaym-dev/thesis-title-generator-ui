import React, { ReactElement } from 'react';

type IContainerProps = {
  children?: ReactElement | ReactElement[];
};

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className="max-w-screen-xl mx-auto px-[15px]">{children}</div>;
};

export default React.memo(Container);
