import PropTypes from "prop-types";
import { Input } from "@nextui-org/react";

function CustomInput({
  name,
  label,
  placeholder,
  className,
  value,
  register,
  error,
}) {
  return (
    <>
      <Input
        {...register(name)}
        type={name}
        variant="bordered"
        label={label}
        placeholder={placeholder}
        className={`${className}`}
        labelPlacement="outside"
        value={value}
        status={error ? "error" : "default"}
        helperText={error?.message}
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
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default CustomInput;
