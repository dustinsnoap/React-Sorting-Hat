import React, { Component } from 'react';
import Home from './components/page_home/home'
import Questions from './components/page_questions/questions'
import './reset.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'home',
    }
  }
  h_page = page => {
    this.setState({page: page})
  }
  componentDidMount() {

  }
  render() {
    let page
    if(this.state.page === 'home') page = <Home click={this.h_page}/>
    if(this.state.page === 'questions') page = <Questions click={this.h_page}/>
    return (
      <div className='hogworts'>
        {page}
      </div>
    )
  }
}

export default App;