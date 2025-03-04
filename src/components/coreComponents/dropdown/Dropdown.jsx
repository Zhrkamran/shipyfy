import  { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Dropdown = ({ title = "Menu", items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block w-full" ref={dropdownRef}>
      <Button
        onClick={toggleDropdown}
        className="w-full text-start menu-item group menu-item-active"
      >
        {title}
      </Button>

      {isOpen && (
        <ul className="w-full bg-white">
          {items.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {item.route ? (
                <Link to={item.route} className="block text-gray-800">
                  {item.label}
                </Link>
              ) : (
                <span onClick={item.onClick}>{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
