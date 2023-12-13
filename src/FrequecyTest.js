import React from 'react'
import './PureToneAudiometry.css'

import hand from './images/car.jpeg';
import bell from './images/cat.jpeg';
import book from './images/dog.jpeg';
import car from './images/hand.jpeg';
import cat from './images/king.jpeg';
import king from './images/tree.jpeg';
import tree from './images/chair.jpeg';
import chair from  './images/bells.jpeg';
const PureToneAudiometry = () => {
  return (
    <div className='container'>
        <h1 className='title'>Pure Tone Audiometry</h1>
      <div className='board'>
        <div className="row1">
            <div className="box">
                <img className='icon' src={hand} alt="" />
            </div>
            <div className="box">
                <img className='icon' src={bell} alt="" />
            </div>
            <div className="box">
                <img className='icon' src={cat} alt="" />
            </div>
        </div>
        <div className="row2">
        <div className="box">
                <img className='icon' src={car} alt="" />
            </div>
            <div className="box">
                <img className='icon' src={tree} alt="" />
            </div>
            <div className="box">
                <img className='icon' src={king} alt="" />
            </div>
        </div>
        <div className="row3">
            <div className='box'>
               <img className='icon' src={tree} alt="" />
            </div>
            <div className="box">
                <img className='icon' src={chair} alt="" />
            </div>
            <div className="box">
                <img className='icon' src={book} alt="" />
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default PureToneAudiometry