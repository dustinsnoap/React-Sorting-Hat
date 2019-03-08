import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from './components/page_home/home'
import Questions from './components/page_questions/questions'
import './reset.css'
import './App.css';

// const questions = [
//   {
//     question: "Dusk or Dawn?",
//     answers: [
//       {answer: "Dusk", points: [1,1,0,0]},
//       {answer: "Dawn", points: [0,0,1,1]},
//     ],
//   },
//   {
//     question: "Which of the following would you most hate people to call you?",
//     answers: [
//       {answer: "Ordinary", points: [0,0,0,1]},
//       {answer: "Ignorant", points: [0,1,0,0]},
//       {answer: "Cowardly", points: [1,0,0,0]},
//       {answer: "Selfish", points: [0,0,1,0]},
//     ]
//   }
// ]

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'home',
      questions: [],
    }
  }
  componentDidMount() {
    ///
  }
  render() {
    if(this.state.page == 'home') return <Home />
    if(this.state.page == 'questions') return <Questions />
  }
}

export default App;