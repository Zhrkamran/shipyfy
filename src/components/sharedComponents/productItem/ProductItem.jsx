import { IoStarSharp } from "react-icons/io5";
import { BsFire } from "react-icons/bs";
import { motion } from "framer-motion";
import { numberWithCommas, calculateFinalPrice } from "../../../utils/number";

function ProductItem({
  image,
  title,
  price,
  model,
  discount,
  rating,
  ...rest
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group relative border border-gray-300 rounded-2xl p-3 overflow-hidden"
      >
        <div className="absolute right-1 top-1 z-10 flex w-full flex-wrap items-center gap-px lg:gap-0.5">
          <span className="p-1 flex items-center justify-center gap-px rounded-2xl bg-red-700  text-white lg:gap-0.5 text-xs">
            <BsFire size={15} className=" text-white text-4xl" />
            پرفروش
          </span>
        </div>
        <motion.img
          src={image}
          alt={title}
          className=" w-full object-contain   lg:aspect-auto lg:h-50 "
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        />
        <div className="mt-2 flex flex-col justify-around">
          <p className="font-medium  lg:text-body-14 text-gray-500">{model}</p>
          <h3 className="font-bold line-clamp-2  lg:text-body-14 min-h-10">
            {title}
          </h3>
          <div className="flex justify-between mt-2 min-h-13">
            <div className="flex items-center">
              <p className="text-body2-strong text-neutral-700">
                {rating.rate}
              </p>
              <div className="flex  shrink-0">
                <IoStarSharp size={20} className=" text-amber-400 text-4xl" />
              </div>
            </div>
            <div className="flex flex-col">
              {discount ? (
                <>
                  <div>
                    <span className="text-gray-500 line-through text-base">
                      {numberWithCommas(price)}
                    </span>
                    <span className="w-[33px] rounded-md bg-red-700 text-center  font-medium text-white lg:w-10 inline-block ms-1">
                      %{discount}
                    </span>
                  </div>
                  <div className="text-lg font-medium text-gray-900">
                    {calculateFinalPrice(price, discount)}
                    <span className="text-xs ms-0.5">تومان</span>
                  </div>
                </>
              ) : (
                <div className="text-lg font-medium text-gray-900">
                  {numberWithCommas(price)}
                  <span className="text-xs ms-0.5">تومان</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProductItem;
