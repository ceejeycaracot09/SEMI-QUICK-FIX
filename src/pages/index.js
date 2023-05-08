import React from 'react';
import './home.css';

const home = () => {
  return (
    <div className="home-container">
      <div className="home-image">
        <img src="https://tse3.mm.bing.net/th?id=OIP.uncCIs8fiTNIKKlio817cgHaGc&pid=Api&P=0" alt="placeholder" />
      </div>
      <div className="home-text">
        <h1>Welcome to My Website!</h1>
        <p>
          The concept of quick fix refers to a temporary or short-term 
          solution to a problem or situation. It is a strategy that 
          provides an immediate solution to an issue without addressing 
          the underlying cause. Quick fixes are often used to address 
          urgent problems, such as technical issues, crises, or 
          emergencies, or to achieve short-term goals.
        </p>
        <p>
          Do not wait for opportunities, create them." - Roy T. Bennett
        </p>
      </div>
    </div>
  );
};

export default home;
