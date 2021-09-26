import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers,faUserShield } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const element = <FontAwesomeIcon icon={ faUserShield} />
    const user = <FontAwesomeIcon icon={faUsers}/>
    const{cart} = props;
    let total=0;
    let name='';
    
    for(const actor of cart){
        total=total+actor.salary;
        name=name + actor.name ;
       
        
    }
    return (
        <div>
        <h2>{element} Actor item:{props.cart.length}</h2>
            <h2>{user}total Actor:{total}</h2><br/>
            <div className={"cart-item-container"}>
                { <>
                    {
                        cart.length > 0 &&<>
                            <div className="cart-item">
                            <span>Name</span>
                            <span>Salary</span>
                        </div>
                        {
                            cart?.map(item=>{
                        return <div className="cart-item">
                            <span>{item.name}</span>
                            <span>{item.salary}</span>
                        </div>
                    })
                        }
                        </> 
                    }
                 </>
                    
                }
            </div>
            <div>
            <button className='select-button'>Select Actor</button>
            </div>
        </div>
    );
};

export default Cart;