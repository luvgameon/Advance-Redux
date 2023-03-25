import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products=[
    {
      key:'p1',
      title:'Test',
      price:6,
      description:'This is a first product - amazing!',
      id:'p1',
      quantity:1

    },
    {
    key:'p2',
      title:'bread',
      price:10,
      description:'This fresh breadt - amazing!',
      id:'p2',
      quantity:1
    }

  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{
        products.map((i)=>{
         return  <ProductItem
        key={i.key}
          title={i.title}
          price={i.price}
          description={i.description}
          id={i.id}
          quantity={i.quantity}
        />

        })
        }
      </ul>
    </section>
  );
};

export default Products;
