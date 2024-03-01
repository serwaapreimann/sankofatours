import "./header.scss";
import "../Modal/modal.scss";
import { Link } from "react-router-dom";
import React, {useRef} from "react";
import Modal from "../Modal/Modal";
import "animate.css";
import CardList from "../CardList/CardList";

export default function Header({
  modal,
  onModal,
  hoverOver,
  setHoverOver,
  cart,
  onCart,
  counter,
  total,
  currentCart,
  reduceCart,
  countryName, 
  showLoading,
  handleWishCount,
  wishCounter,
  scrollToMap,
  scrollToAbout,
  setCart
}) {

 

  modal
    ? document.body.classList.add("active--modal")
    : document.body.classList.remove("active-modal");

  cart
    ? document.body.classList.add("active")
    : document.body.classList.remove("active");

  return (
    <>
      <div className="header">
        <figure className="header--logo">
          <Link to="/" className="header--link">
            <img src="/images/sankofa.png" alt="sankofa" />
          </Link>
          <h4 className="header--title">sankofa tours</h4>
        </figure>

        <div className="header--navigation">
          <div className="navigation--icons">
            <div className="header--contact">
              <button className="__button" onClick={onModal}>
                Browse By Category
              </button>
              {modal && (
                <div className="modal">
                  <div onClick={onModal} className="overlay"></div>
                  <div className="modal-content">
                    <Modal />
                    <button
                      className={
                        hoverOver ? "rotate close-modal" : "close-modal"
                      }
                      onMouseEnter={() => setHoverOver(true)}
                      onMouseLeave={() => setHoverOver(false)}
                      onClick={onModal}
                    >
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="cart--shopping" id="openShopping">
              <img
                src="/images/honeymoon.svg"
                className="header--add-to-cart"
                alt="Add to Cart"
                onClick={onCart}
              />
              <span className="cart--quantity">{counter}</span>
            </div>
            {cart && (
              <div>
                  <div></div>
                  <div className="cart--card">
                      <CardList onCart = {onCart} total ={total} currentCart={currentCart} reduceCart={reduceCart} countryName={countryName} showLoading={showLoading} setCart={setCart} />
                  </div>


              </div>

            )}
            <div className="cart--wishlist">
              <img src="/images/wishlist (1).gif" alt="Wishlist" />
              <span>{wishCounter}</span>
            </div>
          </div>
          <div className="cart--list"></div>

          <nav className="header--menu">
            <ul className="header--menu-links">
              <li className="header--menu-link">
                <a href="/">home</a>
              </li>
              <li className="header--menu-link">
                <a href="/#about" onClick={scrollToAbout}>
                  about SANKOFA
                </a>
              </li>
              <li className="header--menu-link">
                <a href="/#map" onClick={scrollToMap}>
                  explore AFRICA
                </a>
              </li>
              <li className="header--menu-link">
                <a href="#">terms & conditions</a>
              </li>
              <li className="header--menu-link">
                <a href="#">FAQ</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
