
import { useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect } from "react";
import { getProducts } from "../../services/Api";
import { Link } from "react-router";
import Container from "../../components/container/Container";

function Store() {
  const [products, setproduts] = useState([]);
  useEffect(() => {
    async function getProudatsData() {
      const data = await getProducts();
      setproduts(data);
    }
    getProudatsData();
  }, []);
  return (
    <Container>
      <div className="mx-auto max-w-2xl px-1 py-4 sm:px-2 sm:py-5 lg:max-w-7xl lg:px-1">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((item) => (
         <Link key={item.id} to={`/product/${item.id}`}>
           <ProductItem  {...item} />
         </Link>
        ))}
      </div>
    </div>
    </Container>
  );
}

export default Store;
