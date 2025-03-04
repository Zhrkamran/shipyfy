import { twMerge } from "tailwind-merge";
function Textarea({ className, label, ...rest }) {
  return (
    <div>
      {label && <label htmlFor="" className="mb-1 w-full block">{label}</label>}
      <textarea {...rest} className={twMerge("bg-white w-full", `${className}`)}></textarea>
    </div>
  );
}

export default Textarea;
