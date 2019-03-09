import React, { Component } from 'react'
import Question from './question'
import Answer from './answer'
import './questions.css'

class Questions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: questions,
            questionNum: 0,
            points: [0,0,0,0], //G, R, H, S
        }
    }
    h_nextQuestion = value => {
        this.setState(prevState => {
            //update points
            let points = prevState.points.map((p, i) => p + value[i])
            //increment question number
            let questionNum = prevState.questionNum + 1
            if(questionNum >= this.state.questions.length) {
                this.props.click('home')
                questionNum = 0
            }
            return {
                questionNum: questionNum,
                points: points,
            }
        })

    }
    render() {
        return (
            <div className='questions'>
                <Question question={this.state.questions[this.state.questionNum].question} />
                {this.state.questions[this.state.questionNum].answers.map((a,i) => <Answer answer={a.answer} value={a.points} key={i} click={this.h_nextQuestion}/>)}
            </div>
        )
    }
}

export default Questions

const questions = [
    {
      question: "Dusk or Dawn?",
      answers: [
        {answer: "Dusk", points: [1,1,0,0]},
        {answer: "Dawn", points: [0,0,1,1]},
      ],
    },
    {
      question: "Which of the following would you most hate people to call you?",
      answers: [
        {answer: "Ordinary", points: [0,0,0,1]},
        {answer: "Ignorant", points: [0,1,0,0]},
        {answer: "Cowardly", points: [1,0,0,0]},
        {answer: "Selfish", points: [0,0,1,0]},
      ]
    },
    {
      question: "Four goblets are placed before you. Which would you choose to drink?",
      answers: [
        {answer: "The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds.", points: [0,1,0,0]},
        {answer: "The smooth, thick, richly purple drink that gives off a delicious smell of chocolate and plums.", points: [0,0,1,0]},
        {answer: "The golden liquid so bright that it hurts the eye, and which makes sunspots dance all around the room.", points: [1,0,0,0]},
        {answer: "The mysterious black liquid that gleams like ink, and gives off fumes that make you see strange visions.", points: [0,0,0,1]},
      ]
    },
    {
      question: "Which would you rather be?",
      answers: [
        {answer: "Envied", points: [0,1,0,1]},
        {answer: "Imitated", points: [0,1,0,0]},
        {answer: "Trusted", points: [0,1,1,0]},
        {answer: "Praised", points: [1,0,0,1]},
        {answer: "Liked", points: [0,0,1,0]},
        {answer: "Feared", points: [0,0,0,1]},
      ]
    },
    {
      question: "If you could have any power, which would you choose?",
      answers: [
        {answer: "The power to read minds", points: [0,1,0,1]},
        {answer: "The power of invisibility", points: [1,0,0,0]},
        {answer: "The power of superhuman strength", points: [0,0,1,1]},
        {answer: "The power to speak to animals", points: [0,1,1,0]},
        {answer: "The power to change the past", points: [1,0,0,1]},
        {answer: "The power to change your appearance at will", points: [0,1,0,0]},
      ]
    },
    {
      question: "A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:",
      answers: [
        {answer: "Ask what makes them think so?", points: [0,1,0,0]},
        {answer: "Agree, and ask whether they’d like a free sample of a jinx?", points: [0,0,0,1]},
        {answer: "Agree, and walk away, leaving them to wonder whether you are bluffing?", points: [1,0,0,0]},
        {answer: "Tell them that you are worried about their mental health, and offer to call a doctor.", points: [0,0,1,0]},
      ]
    },
    {
      question: "Left or Right?",
      answers: [
        {answer: "Left", points: [0,1,0,1]},
        {answer: "Right", points: [1,0,1,0]},
      ]
    },
  ]