import logo from '../../images/sankofa.png';
import  './header.scss';
import '../Modal/modal.scss'
import Contact from "../../images/24-hours-support.svg";
import { Link} from "react-router-dom";
import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import 'animate.css';


export default function Header() {
  const [modal, setModal] = useState(false);

  const onModal = () => {
      setModal(!modal)
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    const about__1 = document.querySelector('.about--sankofa-1');
    const about__2 = document.querySelector('.about--sankofa-2');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start'});
      about__1.classList.add('animate__animated', 'animate__backInDown');
      about__2.classList.add('animate__animated', 'animate__backInUp');
    }
    
  };

  const scrollToMap =() => {
    const mapSection = document.getElementById('map');
    if(mapSection) {
      mapSection.scrollIntoView({behavior:'smooth', block:'start'})
    }

  }
  


  (modal) ? document.body.classList.add('active--modal') : document.body.classList.remove('active-modal');
    return (
      <>
        <div className="header">
            <figure className = "header--logo">
                <Link to="/" className='header--link'>
                    <img src = {logo} alt="sankofa"/>
                </Link>
                    <h4 className="header--title">sankofa tours</h4>
                
                
            </figure>
            
            <div className='header--navigation'>
                <div className='header--contact'>
                      <button  className="__button" onClick={onModal}>Browse By Category</button>
                          {modal && (
                                <div className="modal">
                                  <div onClick={onModal} className="overlay"></div>
                                  <div className="modal-content animate__animated animate__zoomInDown">
                                    <Modal />
                                    <button className="close-modal" onClick={onModal}>
                                      X
                                    </button>
                                  </div>
                                </div>
          )}
              </div>
                
                <nav className="header--menu">
                  <ul className='header--menu-links'>
                    <li className='header--menu-link'><a href="#">home</a></li>
                    <li className='header--menu-link'><a href="#" onClick={scrollToAbout}>about SANKOFA</a></li>
                    <li className='header--menu-link'><a href="#" onClick={scrollToMap}>explore AFRICA</a></li>
                    <li className='header--menu-link'><a href="#">terms & conditions</a></li>
                    <li className='header--menu-link'><a href="#">FAQ</a></li>
                  </ul>
                </nav>
            </div>
  
  
  
        </div>
          
      </>
        
    )
  }
  