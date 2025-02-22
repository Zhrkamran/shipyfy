import { twMerge } from "tailwind-merge";
function Input({ className, ...rest }) {
  return <input {...rest} className={twMerge("bg-white", `${className}`)} />;
}

export default Input;
