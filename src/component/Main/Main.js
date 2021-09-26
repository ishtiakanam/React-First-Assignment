import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'
import './Main.css'
const Main = (props) => {
    const {name,age,Profession,character,gender,salary,image}=props.actor; 
    const element = <FontAwesomeIcon icon={ faMoneyCheckAlt} />
    return (
        <div className='card'>
             <div className='image-container'>
                <img src={image} alt="" />
                 <h4>Name:{name}</h4>
                <h4>Age:{age}</h4>
                <h4>Profession:{Profession}</h4>
                <h4>Charecter:{character}</h4>
                <h4>Gender:{gender}</h4>
                <h4>Salary:{salary}</h4>
                <button onClick={()=>props.handleAddToCart(props.actor)}
             className='purchase-btn'>{element} add-Salary</button>
            </div>
        </div>
    );
};

export default Main;