import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/Cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
    const [btnHighlighted, setBtnHighlighted] = useState(false);
    const cartCtxt = useContext(CartContext);
    const { items } = cartCtxt;

    const numberOfCartItems = items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

    useEffect(()=> {
        if (items.length  === 0) {
            return;
        }
        setBtnHighlighted(true);

        setTimeout(() => {
            setBtnHighlighted(false);
        }, 300)
    }, [items]);

    return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
)};

export default HeaderCartButton;