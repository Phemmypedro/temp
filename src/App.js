import { Fragment } from "react";
import products from "./products";
import ProductCard from "./Components/ProductCard";

function App() {
  return (
    <Fragment>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            ProductName={product.productName}
            price={product.price}
            description={product.description}
            imagepath={product.URL}
          />
        );
      })}
    </Fragment>
  );
}

export default App;
