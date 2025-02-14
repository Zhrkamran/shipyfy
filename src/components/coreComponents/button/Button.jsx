import { twMerge } from 'tailwind-merge'
function Button({ children, size, className, ...rest }) {
  const _size = sizeCheker(size);
  return (
    <button
      {...rest}
      className={twMerge('rounded bg-red-700 hover:bg-red-900 text-white font-bold', `${className}  ${_size}`)}

    >
      {children}
    </button>
  );
}

export default Button;

function sizeCheker(size) {
  let sizeBtn = "";
  switch (size) {
    case "xs":
      sizeBtn = "px-2 py-1";
      break;
    case "lg":
      sizeBtn = "px-2 py-2";
      break;
    default:
      sizeBtn = "px-2 py-1";
  }
  return sizeBtn;
}
