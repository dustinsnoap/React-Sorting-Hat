import React, { Component } from 'react';
import Home from './components/page_home/home'
import Questions from './components/page_questions/questions'
import Results from './components/page_results/results'
import './reset.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'home',
      result: '',
    }
  }
  h_setPage = page => {
    this.setState({page: page})
  }
  h_result = result => {
    this.h_setPage('results')
    this.setState({result: result})
  }
  render() {
    let page
    if(this.state.page === 'home') page = <Home click={this.h_setPage}/>
    if(this.state.page === 'questions') page = <Questions click={this.h_result}/>
    if(this.state.page === 'results') page = <Results house={this.state.result}/>
    return (
      <div className='hogworts'>
        {page}
      </div>
    )
  }
}

export default App;