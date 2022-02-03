import React from 'react';
import spinner from '../assets/spinner.gif';

const Loading = () => {

  return(    
    <div className="text-center my-5">               
      <img src={spinner} alt="" height="250px"/> 
      <p className="lead my-5 ">Loading...</p>        
    </div>     
  );
}

export default Loading;