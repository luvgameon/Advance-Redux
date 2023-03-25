import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const item = useSelector((state) => state.cartitem.cartitem);
  const cartQuantity = useSelector((state) => state.cartitem.totalquantity);
  const TotalPrice = useSelector((state) => state.cartitem.totalprice);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {item.map((i) => {
          return (
            <CartItem
              item={{
                title: i.title,
                quantity: i.quantity,
                price: i.price,
                id: i.id,
                total: i.totalprice,
              }}
            />
          );
        })}
      </ul>
      <h4>Total Quantity : {cartQuantity} </h4>
      <strong>Total Price : {TotalPrice}$ </strong>
    </Card>
  );
};

export default Cart;
