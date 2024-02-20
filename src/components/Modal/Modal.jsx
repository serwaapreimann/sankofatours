import React from 'react';
import './modal.scss';
import Data from  '../../data/browse.json';
import Image from '../../images/detty december.jpeg';
import 'animate.css';




export default function Modal() {
    return (
      <>
        <h1 className='explore--title'>Explore Africa</h1>
        <div className="modal--container">
          {Data.map((item) => (
            <div className='explore--container' key={item.id}>
              <figure className="explore--figure">
                <img className='explore--image' src={Image} alt={item.category} />
                <figcaption className='explore--caption'>{item.category}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </>
    );
  }
  