export function submitQuery(query){
  return {
    type: 'SUBMIT_QUERY',
    query
  };
}

export function deleteImage(index){
  return {
    type: 'DELETE_IMAGE',
    index
  };
}


/*
  loadImages()
    - make the call to the api
    
*/
