import React from 'react';
import Photo from './Photo';


const photoList = (props) => {
  return(
    props.isLoading 
    ? <p>No puppies yet!</p>
    :
    <div>
      <ul>
      {props.images.map((image,index) => {
        return(
          <Photo url={image.url} key={index}/>
        );
      })}
      </ul>
      <input type='submit' onClick={props.handleHidePuppies}/>
    </div>
  );
}

export default photoList;