import React from 'react';

export const CArdGif = ({title,url}) => {

  return( 
  <div className='card'>
      <img src={url}/>
     <h2>{title}</h2>
  </div>
  )
};
