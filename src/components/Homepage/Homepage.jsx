import { useEffect } from 'react';
import Maps from '../Maps/Maps';
import Hero from '../Hero/Hero';
import About from '../About/About';
import './homepage.scss';

export default function Homepage ({handleClick, setCountryName}) {
    useEffect(() => {
        document.title = "Sankofa Tours | Explore, Experience, Embrace."
    })
return(
    <>
        <Hero/>
        <About/>
        <Maps handleClick={handleClick} setCountryName={setCountryName}/>
    </>
)




}