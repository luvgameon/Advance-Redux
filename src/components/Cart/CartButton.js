import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/redux-store';

const CartButton = (props) => {
  const dispatch=useDispatch();

  const showcart=()=>{
  
    dispatch(cartAction.cartreducer());

  }
  return (
    <button className={classes.button} onClick={showcart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
