import React from 'react';

const photo = (props) => {
  return(
  <div>
    <li>
      <img src={props.url} alt="puppy"/>
    </li>
    <button 
      className="glyphicon glyphicon-trash"
      onClick={props.handleDeleteImage.bind(this,props.index)}>
      Delete
    </button>
  </div>
  );
};

export default photo;