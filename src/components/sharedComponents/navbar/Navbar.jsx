import { Link, useLocation } from "react-router";
import { nav } from "./nav.constant";
import { useRef, useState } from "react";

function Navbar() {
  const [activePos, setActivePos] = useState({
    width: 0,
    right: 0,
    opacity: 0,
  });
  const menuRef = useRef(null);

  const handleHover = (event) => {
    const { offsetWidth, offsetLeft } = event.target;
    const parentWidth = menuRef.current.offsetWidth;
    const rightPosition = parentWidth - (offsetLeft + offsetWidth);

    setActivePos({ width: offsetWidth, right: rightPosition, opacity: 1 });
  };

  const handleLeave = () => {
    setTimeout(() => {
      setActivePos({ width: 0, right: 0, opacity: 0 });
    }, 200);
  };
  const location = useLocation();
  return (
        <nav ref={menuRef} className="relative" onMouseLeave={handleLeave}>
          {nav.map((nav) => (
            <Link
              className={`me-4 ${
                location.pathname === nav.to ? "text-red-700" : ""
              }`}
              key={nav.to}
              to={nav.to}
              onMouseEnter={handleHover}
            >
              {nav.title}
            </Link>
          ))}
          <div
            className="absolute -bottom-4 h-[2px] bg-red-500 transition-all duration-300"
            style={{
              width: `${activePos.width}px`,
              transform: `translateX(-${activePos.right}px)`, // حرکت از راست به چپ
              opacity: activePos.opacity,
            }}
          />
   </nav>
  );
}

export default Navbar;
