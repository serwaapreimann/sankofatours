import "./App.scss";
import Header from "./components/Header/Header";
// import Maps from './components/Maps/Maps';
import POI from "./components/POI/POI";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useRef } from "react";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import PreLoader from "./components/PreLoading/PreLoading";
import "./components/PreLoading/preloading.scss";
import "./components/Modal/modal.scss";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [showLoader, setShowLoader] = useState(false);

  const [countryName, setCountryName] = useState(() => {
    const cachedName = localStorage.getItem("countryName");
    return cachedName ? JSON.parse(cachedName) : null;
  });

  const [destination, setDestination] = useState(() => {
    const cachedDestination = localStorage.getItem("destination");
    return cachedDestination ? JSON.parse(cachedDestination) : null;
  });

  const handleClick = (countryName) => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 5002);
  };

  const [modal, setModal] = useState(false);
  const onModal = () => {
    setModal(!modal);
  };

  const [counter, setCounter] = useState(0);
  const [wishCounter, setWishCounter] = useState(0);
 

  const [cart, setCart] = useState(false);
  const onCart = () => {
    setCart(!cart);
  };

  const [total, setTotal] = useState(0);
  const [currentCart, setCurrentCart] = useState([]);
  const [wishlist, setWishlist] = useState([])
  const [activeWish, setActiveWish] = useState([]);

  const onWish = (id)=>{
    setActiveWish()
  };


  const handleCart = (name, description, amount) => {
    const price = parseInt(amount);
    setCurrentCart([...currentCart, { name, description, price }]);
    setCounter(prevCounter => prevCounter + 1);
    setTotal(total + price);
  };

  const reduceCart = (name, description, amount) => {
    const itemToDelete = currentCart.findIndex(
      (item) =>
        item.name === name &&
        item.description === description &&
        item.price === amount
    );
    const price = parseInt(amount);
    const updatedCart = itemToDelete !== -1 ? [...currentCart] : currentCart;
    updatedCart.splice(itemToDelete, 1);
    setCurrentCart(updatedCart);
    setCounter(prevCounter => prevCounter - 1);
    setTotal(total - price);
  };

  const handleWishCount = (title) =>{
    setWishCounter(prevCounter => prevCounter + 1)
    if(activeWish.includes(title)){
       setActiveWish(activeWish.filter((checkTitle) => checkTitle !== title ))
  }else{
      setActiveWish([...activeWish, title])
  }
  }

  const [hoverOver, setHoverOver] = useState(false);


  const aboutRef = useRef(null)
  const mapRef = useRef(null)

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      aboutRef.current.classList.add("animate__animated", "animate__backInDown");
      aboutRef.current.classList.add("animate__animated", "animate__backInUp");
    }
  };

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header
          className="header--component"
          modal={modal}
          setModal={setModal}
          onModal={onModal}
          hoverOver={hoverOver}
          setHoverOver={setHoverOver}
          cart={cart}
          setCart={setCart}
          onCart={onCart}
          counter={counter}
          currentCart={currentCart}
          total={total}
          reduceCart={reduceCart}
          countryName={countryName}
          showLoading={handleClick}
          wishlist={wishlist}
          wishCounter={wishCounter}
          scrollToAbout={scrollToAbout}
          scrollToMap = {scrollToMap}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                handleClick={handleClick}
                setCountryName={setCountryName}
              />
            }
          />
          <Route
            path="/country/:countryName"
            element={
              <POI
                countryName={countryName}
                setDestination={setDestination}
                destination={destination}
                modal={modal}
                setModal={setModal}
                onModal={onModal}
                hoverOver={hoverOver}
                setHoverOver={setHoverOver}
                handleCart={handleCart}
                counter={counter}
                activeWish={activeWish}
                handleWishCount={handleWishCount}
              />
            }
          />
          <Route
            path="/:countryName/your-itinerary"
            element={<Checkout currentCart={currentCart} total={total} />}
          />
        </Routes>
        <Footer />
        {showLoader && (
          <div className="loading-screen">
            <PreLoader />
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
