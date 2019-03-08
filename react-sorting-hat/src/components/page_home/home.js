import React from 'react'
import './home.css'

const Home = props => {
    return (
        <div className='home' onClick={() => console.log('farts')}>
            <figure className='hogwarts-logo'></figure>
            <h1>HOGWARTS SCHOOL</h1>
            <h2>OF WITCHCRAFT AND WIZARDRY</h2>
            <pre>Click to find your house</pre>
            <figure className='footer-img'></figure>
        </div>
    )
}

export default Home