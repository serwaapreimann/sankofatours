import React from 'react';
import {useNavigate} from 'react-router-dom';
import './cardlist.scss';




export default function CardList ({onCart,total,currentCart, reduceCart, countryName, showLoading, setCart}) {
    const navigate = useNavigate();
    const handleClick = () => {
        (total === 0 || isNaN(total)) ? alert('You must have at least 1 experience to checkout') : 
        setTimeout(() =>{
            navigate(`/${countryName}/your-itinerary`);
        },5001 )
        showLoading()
        setCart(false)
        
    }
    return(
            <div className='modal--cart-container'>
                <h1 className='cart--heading'>Your Itinerary</h1>
                <ul className='cart--listCard'>
                    {currentCart.map((item, index) => (
                        <div className='cart--list-container'>
                            <li key={index} className='cart--list'>
                                <div className='cart--list-name'>{item.name}</div>
                                <div className='cart--list-price'>${item.price}</div>
                                <img className='cart--list-delete' onClick={reduceCart} src='/images/minus-circle (1).png' alt='delete'/>
                             </li>
                        </div>
                
                    ))}
    
                </ul>

                <div className='cart--checkout'>
                    <div className='cart--total'>${total}</div>
                    <div className='cart--closeShopping' id='closeShopping' onClick={onCart}>Close</div> 
                </div> 
                <div className='cart--checkout-main' onClick={handleClick} total={total} >Checkout</div> 
                    
          
            <div/>
            </div>
    )
}
