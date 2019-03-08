import React from 'react'
import Question from './question'
import './questions.css'

const Questions = props => {
    return (
        <div className='home' onClick={() => console.log('farts')}>
            <Question />
        </div>
    )
}

export default Questions