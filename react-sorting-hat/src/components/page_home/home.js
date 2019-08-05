import React from 'react'
import './home.css'

const Home = props => {
    return (
        <div className='home' onClick={() => props.click('questions')}>
            <figure className='hogwarts-logo'></figure>
            <h1>HOGWARTS SCHOOL</h1>
            <h2>OF WITCHCRAFT AND WIZARDRY</h2>
            <pre>CLICK TO REGISTER</pre>
            <figure className='footer-img'></figure>
        </div>
    )
}

export default Home