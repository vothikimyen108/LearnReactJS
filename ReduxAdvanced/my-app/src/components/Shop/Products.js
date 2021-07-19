import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
];

const Products = (props) => {
  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            onAdd={addItemHandler.bind(null, product)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
