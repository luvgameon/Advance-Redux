import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

import { cartAction, cartitemAction } from "./store/redux-store";
import Notification from "./components/UI/Notification";
let isInitial = 0;
function App() {
  const togglecart = useSelector((state) => state.cart.showcart);
  const notification = useSelector((state) => state.cart.notification);
  const cart = useSelector((state) => state.cartitem.cartitem);
  const dispatch = useDispatch();

  useEffect(() => {
 
    const sendCartData = async () => {
    
          if(isInitial>2){
      dispatch(
        cartAction.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
          }

      const response = await fetch(
        "https://react-http-6410a-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
      if(isInitial>2){

      dispatch(
        cartAction.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };
  }
    if(isInitial>=0)
    {
      isInitial++;
    
    }
    console.log('intial in post',isInitial);

    sendCartData().catch((error) => {
      dispatch(
        cartAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);

  useEffect(() => {
    async function fetch() {
  
      dispatch(
        cartAction.showNotification({
          status: "pending",
          title: "Fetching...",
          message: "Fetching cart data!",
        })
      );
      const data = await axios.get(
        "https://react-http-6410a-default-rtdb.firebaseio.com/cart.json"
      );
      const respose = await data.data;
     
      if (data.status !== 200) {
        throw new Error("Fetching cart data failed.");
      }
      if(respose!==null){
      dispatch(cartitemAction.replacecart(respose));
      }
      
      dispatch(
        cartAction.showNotification({
          status: "success",
          title: "Success!",
          message: "fetch cart data successfully!",
        })
      );
      console.log('intial in fetch',isInitial);
  }
    fetch().catch((error) => {
      dispatch(
        cartAction.showNotification({
          status: "error",
          title: "Error!",
          message: "fetching cart data failed!",
        })
      );
    });
  }, [dispatch]);

  return (
    <Layout>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {togglecart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
