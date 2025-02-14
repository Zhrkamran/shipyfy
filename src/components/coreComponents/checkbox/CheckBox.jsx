import { useState } from "react";

function CheckBox({ id, children, checked, onChange, className = "" }) {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleChange}
        className="hidden peer"
      />
      <div className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center transition-all duration-300 peer-checked:bg-red-700 peer-checked:border-red-700">
        {isChecked && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </div>
      <label htmlFor={id} className="text-gray-900 text-sm font-medium select-none cursor-pointer">
        {children}
      </label>
    </div>
  );
}

export default CheckBox;
