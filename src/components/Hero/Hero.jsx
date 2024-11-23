import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-content'>
            <h1>Welcome to the Club! We are Happy to have you here!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat tortor elit, sit amet vestibulum est consectetur ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
            <button className='btn'>Learn More<img src = {dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero