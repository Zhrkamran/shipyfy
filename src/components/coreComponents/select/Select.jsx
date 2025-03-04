import ReactSelect from "react-select";

function Select({ value, onChange, options, label }) {
  return (
    <div>
      {label && <label htmlFor="">{label}</label>}
      <ReactSelect value={value} onChange={onChange} options={options} />
    </div>
  );
}

export default Select;
