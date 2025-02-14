import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";
import { getHomeSliders } from "../../../services/api";


function Slider() {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    async function getDataSliders() {
      try {
        const result = await getHomeSliders();
        setSliders(result);
      } catch (errors) {
        console.log("Error", errors);
      }
    }
    getDataSliders();
  }, []);
  return (
    <>
      <section>
        <div  className="home-slider w-full">
          {sliders && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
             
              speed={1000}
              effect="fade"
            >
              {sliders.map((slider) => (
                <SwiperSlide key={slider.id}>
                  <img
                    src={slider.image}
                    className="w-full"
                    alt={slider.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) }
        </div>
      </section>
    </>
  );
}
export default Slider;
