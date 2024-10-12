import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";

function CustomButton({ name, className }) {
  return (
    <>
      <Button color="primary" variant="solid" className={`${className}`}>
        {name}
      </Button>
    </>
  );
}

CustomButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CustomButton;
