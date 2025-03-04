import { twMerge } from "tailwind-merge";
function Input({ className, label, ...rest }) {
  return (
    <div>
      {label && <label htmlFor="" className="mb-1 w-full block">{label}</label>}
      <input {...rest} className={twMerge("bg-white w-full", `${className}`)} />
    </div>
  );
}

export default Input;
