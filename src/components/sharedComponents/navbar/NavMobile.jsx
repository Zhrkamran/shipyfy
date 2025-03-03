import { useState } from "react";
import { motion } from "framer-motion";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router";
import { nav } from "./nav.constant";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="">
        <RiMenu3Line size={32} className="text-gray-800" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold">دستری سریع</span>
          <button onClick={() => setIsOpen(false)}>
            <IoCloseOutline size={28} className="text-gray-600" />
          </button>
        </div>

        <ul className="p-4 space-y-2">
          {nav.map((nav) => (
            <Link
              key={nav.to}
              to={nav.to}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-100 transition"
            >
              <span>{nav.title}</span>
            </Link>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default MobileMenu;
