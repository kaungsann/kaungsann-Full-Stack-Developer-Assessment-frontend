import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";

function CustomButton({
  name,
  className,
  variant,
  color,
  onClick = (fn) => fn,
}) {
  return (
    <>
      <Button
        color={color}
        variant={variant}
        className={`${className}`}
        onClick={onClick}
      >
        {name}
      </Button>
    </>
  );
}

CustomButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
