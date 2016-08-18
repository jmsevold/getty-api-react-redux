import * as helpers from '../helpers';

const initialState = {
  query: '',
  images: [],
  isLoading: true
};

export default function gettyReducer(state = initialState, action){
  switch(action.type){
    case 'SUBMIT_QUERY':
      return Object.assign({}, initialState, {images: action.images, isLoading: false});
      
    case 'DELETE_IMAGE':
      const images = initialState.images;
      const index  = action.index;
      return Object.assign({}, initialState,{ images: helpers.removeFromArray(images,index)});
   
    default:
      return initialState;
  }
}