import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Main from '../Main/Main';
import './Actor.css'

const Actor = () => {
    const [actors,setActors] =useState([])
    const [cart,setCart] = useState([])
    
    useEffect(()=>{
      fetch('./Actor.JSON')  
      .then(response => response.json())
      .then(data =>setActors (data))
        
    },[])
    const handleAddToCart =(actor) => {
        if(!cart?.find(item=> item.name === actor.name)) {
            const newCart = [ ...cart, actor];
        setCart(newCart);
        }
        
    }
    
    return (
        <div className="actor-container">
            <div className="container">
           {
                actors.map(actor => <Main key={actor.key} actor={actor} handleAddToCart={handleAddToCart}> </Main>)
            }
            </div>
            <div className="cart-container">
             {/* <h2>actor:{actors.length}</h2> */}
            
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Actor;