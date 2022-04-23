import React from 'react';

import Navbar from './Navbar';

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <Navbar />
      <div className="w-full h-full pt-24 px-10">{children}</div>
    </div>
  );
};

export default PageLayout;
