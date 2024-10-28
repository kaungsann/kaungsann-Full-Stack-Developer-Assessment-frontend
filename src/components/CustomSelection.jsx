import PropTypes from "prop-types";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

const CustomSelection = ({
  options = [],
  onChange = (f) => f,
  isLoading = false,
  defaultValue = "",
  disabled = false,
  label = "",
  mode = "",
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleSelectChange = (selectedValue) => {
    setSelectedOption(selectedValue);
    onChange(selectedValue); // Passes the selected role directly
  };

  return (
    <>
      <Select
        radius="md"
        variant="bordered"
        isDisabled={mode === "View" || mode === "Delete"}
        selectedKeys={[selectedOption]}
        label={label}
        disabled={disabled}
        size="md"
        placeholder="Select an option"
        classNames={{
          base: "max-w-md",
          trigger: "h-12 rounded-lg mb-6",
        }}
        labelPlacement="outside"
        aria-label="Select option"
        onChange={(event) => handleSelectChange(event.target.value)}
      >
        {isLoading ? (
          <SelectItem>Loading...</SelectItem>
        ) : (
          options.map((option) => (
            <SelectItem
              key={option.id}
              value={option.username}
              className="w-full"
            >
              {option?.username ? option?.username : option.role}
            </SelectItem>
          ))
        )}
      </Select>
    </>
  );
};

CustomSelection.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  mode: PropTypes.string,
};

export default CustomSelection;
