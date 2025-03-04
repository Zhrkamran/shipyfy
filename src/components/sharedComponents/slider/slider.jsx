import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";
import { getHomeSliders } from "../../../services/Api";

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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section>
        <div className="home-slider w-full">
          {sliders && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={10}
              slidesPerView={1}
              navigation={!isMobile}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              speed={1000}
              effect="fade"
            >
              {sliders.map((slider) => (
                <SwiperSlide key={slider.id}>
                   {isMobile ? 
                    <img src={slider.mobileImage} className="w-full" alt={slider.alt} />
                    : 
                     <img src={slider.desktopImage} className="w-full" alt={slider.alt} />
                    }
                 
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
    </>
  );
}
export default Slider;
