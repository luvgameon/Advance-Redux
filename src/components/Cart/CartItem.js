import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartitemAction } from "../../store/redux-store";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id, description } = props.item;
  const removecartitem = () => {
    dispatch(cartitemAction.removecartitem(itemdetails));
  };
  const addcarthandler = () => {
    dispatch(cartitemAction.additemtocart(itemdetails));
  };
  const itemdetails = {
    title: title,
    price: price,
    des: description,
    id: id,
    quantity: quantity,
    totalprice: price,
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removecartitem}>-</button>
          <button onClick={addcarthandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
