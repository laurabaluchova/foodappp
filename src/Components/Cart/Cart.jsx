import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCntxt = useContext(CartContext);
    const totalAmount = `$${cartCntxt.totalAmount.toFixed(2)}`;
    const hasItems = cartCntxt.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCntxt.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCntxt.addItem({...item, amount: 1})
    };


    const cartItems = <ul className={classes["cart-items"]}>{cartCntxt.items.map(item => <CartItem 
        key={item.id} name={item.name} amount={item.amount} price={item.price} 
        onAddItem={cartItemAddHandler.bind(null, item)} onRemoveItem={cartItemRemoveHandler.bind(null, item.id)}/>)}</ul>;

    return <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onHideCart} className={classes["button--alt"]}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
};

export default Cart;