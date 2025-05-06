// import React from 'react'

// const Authlayout = ({ children }) => {
//   return <div className="flex-justify-center items-center min-h-screen bg-white"> { children } </div>;
// };

// export default Authlayout;

import React from 'react';

const Authlayout = ({ children }) => {
  return <div className="flex justify-center items-center min-h-screen pt-40 ">
      {children}
    </div>
};

export default Authlayout;
