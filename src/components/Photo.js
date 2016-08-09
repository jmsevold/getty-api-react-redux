import React from 'react';

const photo = (props) => {
  return(
   <li>
     <img src={props.url} alt="puppy"/>
   </li>
  );
};

export default photo;