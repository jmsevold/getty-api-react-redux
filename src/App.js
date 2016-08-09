import React, { Component } from 'react';
import PhotoList from './components/PhotoList';
import images from './images';
import './App.css';
import * as gettyHelper from './gettyHelper';

class App extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      query: '',
      isLoading: true
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
  }
  
  handleTextChange(e){
    let query = e.target.value;
    this.setState({
      query: query
    });
  }
  
  handleSubmit(e){
    this.setState({
      isLoading: false
    });
  }
  
  handleHidePuppies(e){
    this.setState({
      isLoading: true
    });
    console.log(this.state.isLoading);
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Puppy Loader</h2>
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
          images={images}
          handleHidePuppies={this.onHidePuppies}
        />
      </div>
    );
  }
}

export default App;
