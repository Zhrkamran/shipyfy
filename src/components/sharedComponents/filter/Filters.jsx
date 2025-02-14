import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import CheckBox from "../../coreComponents/checkbox/CheckBox";

function FilterSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-2 last:border-b-0">
      <button
        className="w-full flex justify-between items-center text-lg font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <button
        className=" bg-blue-500 text-white px-4 py-2 rounded-lg md:hidden"
        onClick={() => setIsOpen(true)}
      >
        فیلترها
      </button>

      <div
        className={`w-full fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 md:static  md:h-screen md:sticky md:top-0 bg-white  overflow-y-auto`}
      >
        <button
          className="absolute top-4 left-4 text-lg md:hidden"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
      <div className="lg:w-full lg:border-1 lg:rounded-medium border-gray-300 rounded-2xl bg-neutral-000 p-4 ">
        <h2 className="text-xl font-semibold mb-4">فیلترها</h2>

   
        <FilterSection title="برند">
          <CheckBox id="brand1" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} className="mt-3">
            آدرا
          </CheckBox>
          <CheckBox id="brand2" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} className="mt-3">
          آر یو اکی
          </CheckBox>
          <CheckBox id="brand3" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} className="mt-3">
          آردن
          </CheckBox>
        </FilterSection>


        <FilterSection title="محدوده قیمت">
          <input type="range" className="w-full" />
        </FilterSection>
        </div>
      </div>
    </>
  );
}

export default Filters;
