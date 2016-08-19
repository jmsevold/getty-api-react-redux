import * as gettyHelper from '../gettyHelper';

export function loadImagesSuccess(images){
  return {
    type: 'LOAD_IMAGES_SUCCESS',
    images
  };
}

export function deleteImage(index){
  return {
    type: 'DELETE_IMAGE',
    index
  };
}


export function loadImages(query){
  return function (dispatch) {
    return gettyHelper.getImages(query).then((images) => {
      dispatch(loadImagesSuccess(images));
    }).catch((error) =>{
      throw(error);
    });
  };
}
