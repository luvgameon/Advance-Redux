import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const togglecart=useSelector((state)=>state.cart.showcart)
  
  return (
    <Layout>
      { togglecart &&
      <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
