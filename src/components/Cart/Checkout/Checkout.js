import React, { useContext } from 'react';
import ReactDOM  from 'react-dom';
import classes from './Checkout.module.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartContext from '../../../store/CartContext';
import CheckoutItem from './CheckoutItem/CheckoutItem';
 
const CheckoutRoot =  document.getElementById('checkout-root');

const Checkout = (props) => {

const ctx = useContext(CartContext);

    return ReactDOM.createPortal(
    <div className={classes.Checkout}>
        <div className={classes.Close}>
            <FontAwesomeIcon 
            onClick={()=>props.onHide()}
            icon={faXmark}/>
        </div>
        <div className={classes.MealsDesc}>

        <header className={classes.Header}>
            <h2 className={classes.Title}>order details</h2>
        </header>

        <div className={classes.Meals}> 
            {ctx.items.map(item=> <CheckoutItem key={item.id} meal={item}/>)}
        </div>

        <footer className={classes.Footer}>
            <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
        </footer>
        </div>
    </div>,
    CheckoutRoot);
};

export default Checkout;