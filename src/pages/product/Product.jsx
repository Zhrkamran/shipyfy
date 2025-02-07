import { useEffect, useState } from "react";
import Container from "../../components/container/Container"
import { getProduct } from "../../services/Api";
import { useParams } from "react-router";


function Product() {
    const {id}=useParams();
      const [product, setprodut] = useState({});
      useEffect(() => {
        async function ggetProductData() {
          const data = await getProduct(id);
          setprodut(data);
        }
        ggetProductData();
      }, []);
  return (
    <Container>
     <div className="flex flex-col lg:flex-row lg:gap-8 pt-4">
        <div className="flex flex-col lg:gap-3">
          <img src={product.image}/>
        </div>
        <div className="flex grow flex-col lg:flex-row lg:gap-8">
           <div className="flex w-full grow flex-col">
              <h1 className="text-body-16 font-medium text-text-black">
              {product.title}
              </h1>
              <div className="mt-1 font-medium font-medium  lg:text-body-14 text-gray-500">
              {product.model}
              </div>
           </div>
           <div className="w-[316px] flex-col gap-2 lg:flex">
              <div className="min-h-[352px] w-[316px] flex-col justify-between gap-6 rounded border border-gray-300 bg-gray-100 px-3 py-5 shadow-sm lg:flex">
              <div className="flex w-fit flex-col items-center gap-1 lg:gap-1.5" data-sentry-component="AppButtonPricing" data-sentry-source-file="app-button-pricing.tsx">
                <div className="flex items-center lg:gap-1">
                    <span className="px-2 text-center ">538,000</span>
                    <span className="w-[33px] rounded-md bg-red-700 text-center  font-medium text-white lg:w-10 inline-block ms-1">
                        {product.discount}٪
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-lg font-medium text-gray-900">
                    {product.price}
                    <span className="text-xs ms-0.5">تومان</span>
                     </span>
                    
                </div>
                </div>
              </div>
           </div>
        </div>
    </div>  
    <div className="mt-3 inline-flex flex-col items-end gap-2  rounded border border-gray-300 bg-surface-solid-0 px-2 py-3 text-justify lg:gap-3">
    {product.description}
    </div>  
    </Container>
  )
}

export default Product