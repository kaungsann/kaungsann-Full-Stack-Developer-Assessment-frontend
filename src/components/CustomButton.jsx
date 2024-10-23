import { Button, Spinner } from "@nextui-org/react";
import PropTypes from "prop-types";

function CustomButton({
  name,
  className,
  variant,
  color,
  onClick,
  loading,
  type,
}) {
  return (
    <>
      <Button
        type={type}
        color={color}
        variant={variant}
        className={`${className}`}
        onClick={onClick}
        disabled={loading}
      >
        {loading ? <Spinner size="md" color="secondary" /> : name}
      </Button>
    </>
  );
}

CustomButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  type: PropTypes.string,
};

export default CustomButton;
