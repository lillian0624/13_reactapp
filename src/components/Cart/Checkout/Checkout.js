import React from 'react';
import ReactDOM  from 'react-dom';
import classes from './Checkout.module.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const CheckoutRoot =  document.getElementById('checkout-root');

const Checkout = (props) => {
    return ReactDOM.createPortal(
    <div className={classes.Checkout}>
        <div className={classes.Close}>
            <FontAwesomeIcon 
            onClick={()=>props.onHide()}
            icon={faXmark}/>
        </div>
    </div>,
    CheckoutRoot);
};

export default Checkout;