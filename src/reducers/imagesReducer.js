import * as helpers from '../helpers';

const initialState = {
  images: [],
};

export default function imagesReducer(state = initialState, action){
  switch(action.type){
    case 'LOAD_IMAGES_SUCCESS':
      return Object.assign({}, initialState, { images: action.images });
      
    case 'DELETE_IMAGE':
      const images = initialState.images;
      const index  = action.index;
      return Object.assign({}, initialState,{ images: helpers.removeFromArray(images,index)});
   
    default:
      return initialState;
  }
}