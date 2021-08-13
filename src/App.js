import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react'

export default class App extends Component {
  state={
    isLoaded:false
  }
  componentDidMount(){
    window.onload =()=>{
      setTimeout(() => {
        this.setState({isLoaded:true})
      }, 3000);
      
    }
  }

  

  render() {
    const {isLoaded}= this.state
    return (
      isLoaded? 
      (<Router>
        <div className="App">
          <Header />
          <Footer/>
        </div>
      </Router>) :
      (<div className="loader">
        <h1>Maureen</h1>
      </div>)
    )
  }
}


