import React from 'react';
import Video from '../../assets/videos/Hero.mp4'
import './hero.scss'

export default function Hero() {

    return (
        <video
            src={Video}
            loop
            autoPlay
            muted
        ></video>
    );
}
