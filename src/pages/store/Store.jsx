import { useState } from "react";
import ProductItem from "../../components/sharedComponents/productItem/ProductItem";
import { useEffect } from "react";
import { getProducts } from "../../services/Api";
import { Link } from "react-router";
import Container from "../../components/coreComponents/container/Container";
import SkeletonLoader from "../../components/coreComponents/skeletonLoader/SkeletonLoader";
import Filters from "../../components/sharedComponents/filter/Filters";

function Store() {
  const [products, setproduts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProudatsData() {
      const data = await getProducts();
      setproduts(data);
      setLoading(false);
    }
    getProudatsData();
  }, []);
  return (
    <Container className="px-2 lg:px-0">
      <div className="mt-6 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-3 lg:w-[300px]">
          <Filters />
        </div>
        <div className="col-span-12 lg:col-span-9">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-pulse">
              {[...Array(8)].map((_, index) => (
                <SkeletonLoader key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-2 gap-y-2  lg:gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3">
              {products.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`}>
                  <ProductItem {...item} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Store;
