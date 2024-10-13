import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";

function CustomButton({ name, className, color, varient }) {
  return (
    <>
      <Button color={color} variant={varient} className={`${className}`}>
        {name}
      </Button>
    </>
  );
}

CustomButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  varient: PropTypes.string.isRequired,
};

export default CustomButton;
