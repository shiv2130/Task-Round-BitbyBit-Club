import React from 'react'
import './About.css'
import about_img from '../../assets/abou01.jpg'
import about_img2 from '../../assets/about02.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src = {about_img} alt = "" className='about-img'/>
            <img src = {about_img2} alt = "" className='about-img'/>
        </div>
        <div className='about-right'>
                <h3>Building a Vibrant Community</h3>
                <h2>About Us</h2>
                <p>At our core, we are a community of like-minded individuals driven by curiosity, creativity, and the desire to make an impact. Our club serves as a platform for students from diverse backgrounds to come together, explore their interests, and hone their skills through engaging activities, events, and projects.
                   Whether you're here to dive deeper into your passion, learn something new, or just connect with peers who share your enthusiasm, our club has something for everyone. From hands-on workshops to insightful guest lectures, exciting competitions to community-driven initiatives, we strive to create an environment that fosters growth and discovery.
                </p>
                <p>Our mission is to empower students to unlock their potential, embrace challenges, and contribute meaningfully to the world around them. Together, we celebrate innovation, teamwork, and the joy of learning.</p>
        </div>
    </div>
  )
}

export default About