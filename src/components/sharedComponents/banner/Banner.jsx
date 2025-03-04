import { useEffect, useState } from "react";
import { getHomeBanners } from "../../../services/Api";

function Banner({ placement }) {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    async function getDataBanner() {
      const data = await getHomeBanners(placement);
      setBanners(data);
    }
    getDataBanner();
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return banners.map((item) => {
    const imageUrl = isMobile
      ? item.mobileImage || item.image
      : item.desktopImage || item.image;
  
    return (
      <img
        key={item.id}
        src={imageUrl}
        className="h-full w-full object-cover"
        alt={item.alt}
      />
    );
  });
  
}

export default Banner;
