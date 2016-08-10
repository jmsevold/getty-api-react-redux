import React from 'react';
import Photo from './Photo';


const photoList = (props) => {
  return(
    props.isLoading 
    ? <p>No images yet!</p>
    :
    <div>
      <ul>
      {props.images.map((image,index) => {
        return(
          <Photo 
            url={image.display_sizes[0].uri}
            key={index}
            index={index}
            handleDeleteImage={props.handleDeleteImage}
          />
        );
      })}
      </ul>
    </div>
  );
};

export default photoList;