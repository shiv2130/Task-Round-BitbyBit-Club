import React from 'react'
import './Gallery.css'
import event1 from '../../assets/event1.jpg'
import event2 from '../../assets/event2.jpg'
import event3 from '../../assets/event3.jpeg'
import event4 from '../../assets/event4.jpg'
import white_arrow from '../../assets/white-arrow.png'
import nxt from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className='photos'>
            <img src = {event1} alt = "" /> 
            <img src = {event2} alt = "" />
            <img src = {event3} alt = "" />
            <img src = {event4} alt = "" />
        </div>
        <button className='btn dark-btn'>See More here <img src = {white_arrow} /></button>
    </div>
  )
}

export default Gallery