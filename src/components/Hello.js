import React from 'react';

// const Hello = () => {
//     return(
//         <div className="dummyClass">
//             <h1>Hello Your Name</h1>
//         </div>
//     )
// }

const Hello = () => {
  return React.createElement(
    'div',
    { id: 'hello', className: 'dummyClass' },
    React.createElement('h1', null, 'Hello Your Name')
  );
};

export default Hello;
