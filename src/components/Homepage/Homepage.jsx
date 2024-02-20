import { useEffect } from 'react';
import Maps from '../Maps/Maps';
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero';
import About from '../About/About';

export default function Homepage () {
    useEffect(() => {
        document.title = "Sankofa Tours | Explore, Experience, Embrace."
    })
return(
    <>
        <Hero/>
        <About/>
        <Maps/>
        <Footer/>
    </>
)




}