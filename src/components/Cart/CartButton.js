import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/redux-store";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const showcart = () => {
    dispatch(cartAction.cartreducer());
  };
  let cartQuantity=0;
  const cart = useSelector((state) => state.cartitem.cartitem);
  cart.map((i)=>{
   return cartQuantity=cartQuantity+Number(i.quantity);
  })

  return (
    <button className={classes.button} onClick={showcart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
