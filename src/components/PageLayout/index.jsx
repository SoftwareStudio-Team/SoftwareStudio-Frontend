import React from 'react';

import Navbar from './Navbar';

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="w-full h-20">
        <Navbar />
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default PageLayout;
