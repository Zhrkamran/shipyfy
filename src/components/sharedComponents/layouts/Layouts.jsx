import Container from "../../coreComponents/container/Container";
import Login from "../auth/Login/Login";
import Banner from "../banner/Banner";
import Cart from "../cart/Cart";
import Navbar from "../navbar/Navbar";
import { useState, useEffect } from "react";
import NavMobile from "../navbar/NavMobile";

function Layouts({ children }) {
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
      <section className="block h-10 w-full lg:h-[60px]">
        <Banner placement="top" />
      </section>

      <header className="w-full  shadow py-4">
        <Container>
          <div className="flex justify-between items-center">
            <div className={isMobile ? "mobile-menu ps-3" : "desktop-menu"}>
              {isMobile ? <NavMobile/> : <Navbar />}
            </div>

            <div className="flex items-center justify-center">
              <div className="ml-6">
                <Login />
              </div>
              <Cart />
            </div>
          </div>
        </Container>
      </header>
      {children}
    </>
  );
}

export default Layouts;
