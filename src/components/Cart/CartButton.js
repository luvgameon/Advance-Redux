import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/redux-store";

const CartButton = (props) => {
  const item = useSelector((state) => state.cartitem.cartitem);
  const dispatch = useDispatch();
  let totalitem = 0;
  item.forEach((item) => {
    totalitem = totalitem + Number(item.quantity);
  });

  const showcart = () => {
    dispatch(cartAction.cartreducer());
    console.log("show cart run");
  };
  return (
    <button className={classes.button} onClick={showcart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalitem}</span>
    </button>
  );
};

export default CartButton;
