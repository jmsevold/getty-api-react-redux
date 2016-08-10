import React, { Component } from 'react';
import PhotoList from './components/PhotoList';
import './App.css';
import * as gettyHelper from './gettyHelper';

class App extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      query: '',
      images: [],
      isLoading: true
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
    this.handleDeleteImage = this.handleDeleteImage.bind(this);
  }
  
  handleTextChange(e){
    let query = e.target.value;
    this.setState({
      query: query
    });
  }
  
  handleSubmit(e){
    gettyHelper.getImages(this.state.query).then((images) =>{
      console.log(images);
      this.setState({
        isLoading: false,
        images: images
      });
    }).catch((err) => console.log(err));
    console.log(this.state);
  }
  
  handleHidePuppies(e){
    this.setState({
      isLoading: true
    });
  }
  
  handleDeleteImage(index){
    console.log(`index ${index} is going to be removed`);
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Getty Images API</h2>
        </div>
        <p className="App-intro">
          
        </p>
        
        <div className='container-fluid'>
          <input
            type="text"
            onChange={this.handleTextChange}
          />
          <input
            type="submit"
            onClick={this.handleSubmit}
          />
        </div>
        <PhotoList 
          isLoading={this.state.isLoading} 
          images={this.state.images}
          handleDeleteImage={this.handleDeleteImage}
        />
      </div>
    );
  }
}

export default App;
