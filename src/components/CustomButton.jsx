import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";

function CustomButton({ name, className, varient }) {
  return (
    <>
      <Button variant={varient} className={`${className}`}>
        {name}
      </Button>
    </>
  );
}

CustomButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  varient: PropTypes.string.isRequired,
};

export default CustomButton;
