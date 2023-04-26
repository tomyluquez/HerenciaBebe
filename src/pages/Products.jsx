import CardProducts from "../components/Main/CardProducts";
import CardProd from "../components/Products/CardProd";
import Filters from "../components/Products/Filters";
import Sort from "../components/Products/Sort";
import { products } from "../Data/products";
import { DivContainerProducts } from "../styles/Products/productsStyles";

const Products = () => {
  return (
    <DivContainerProducts>
      <Filters productsList={products} />
      <Sort productsList={products} />
      {products.map((prod) => (
        <CardProd key={prod.sku} prod={prod} />
      ))}
    </DivContainerProducts>
  );
};

export default Products;
