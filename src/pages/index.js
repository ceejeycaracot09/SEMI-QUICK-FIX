// import React from 'react';

// const Home = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '80vh'
//       }}
//     >
//       <h1>Home</h1> 
//     </div>
//   );
// };

// export default Home;

import React from 'react';

const Home = () => {
  return (
    <div className='home'>
      <div className='col col1'>
      <h1>Hot Shops</h1>
      <p1>In here, you can see all the recommended shops available in the area.</p1>
      <button type='button'>See more</button>
      </div> 
      <div className='col'>
        <div className='card card1'></div>
        <div className='card card2'></div>
        <div className='card card3'></div>
        <div className='card card4'></div>
        <div className='card card5'></div>
        <div className='card card6'></div>
      </div>
    </div>
  );
};

export default Home;