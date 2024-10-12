import PropTypes from "prop-types";
import { Input } from "@nextui-org/react";

function CustomInput({ name, label, placeholder, className }) {
  return (
    <>
      <Input
        type={name}
        variant="flat"
        label={label}
        placeholder={placeholder}
        className={`${className}`}
        labelPlacement="outside"
      />
    </>
  );
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CustomInput;
