import React from 'react'
import './Events.css'
import film_festival from '../../assets/film-festival.png'
import yoga_day from '../../assets/yoga day.png'
import trivia from '../../assets/trivia-night.png'
import film from '../../assets/film.png'
import yoga from '../../assets/lotus.png'
import trivia_icon from '../../assets/trivia.png'
const Events = () => {
  return (
    <div className='events'>
            <div className='event'>
                <img src = {film_festival} alt = "" />
                <div className='caption'>
                    <img src = {film} alt = ""/>
                    <p>Film Festival</p>
                </div>
            </div>
            <div className='event'>
                <img src = {yoga_day} alt = "" />
                <div className='caption'>
                    <img src = {yoga} alt = ""/>
                    <p>Yoga Day</p>
                </div>
            </div>
            <div className='event'>
                <img src = {trivia} alt = "" />
                <div className='caption'>
                    <img src = {trivia_icon} alt = ""/>
                    <p>Trivia Night</p>
                </div>
            </div>
          
        
        </div>
  )
}

export default Events