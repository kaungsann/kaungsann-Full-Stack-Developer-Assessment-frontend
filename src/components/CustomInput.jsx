import PropTypes from "prop-types";
import { Input } from "@nextui-org/react";

function CustomInput({ name, label, placeholder, className, value }) {
  return (
    <>
      <Input
        type={name}
        variant="bordered"
        label={label}
        placeholder={placeholder}
        className={`${className}`}
        labelPlacement="outside"
        value={value}
      />
    </>
  );
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default CustomInput;
