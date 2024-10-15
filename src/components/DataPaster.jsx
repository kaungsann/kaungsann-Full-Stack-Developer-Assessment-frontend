import PropTypes from "prop-types";
import { Button, Textarea } from "@nextui-org/react";
import HeaderBox from "./HeaderBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DataPaster({ type }) {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/v1/infos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: value }),
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      const data = await response.json();
      console.log("Success:", data);
      navigate("/three-six-five");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="p-4">
      <HeaderBox />

      <div className="w-4/5 p-4">
        <Textarea
          isRequired
          variant="bordered"
          label={`${type}`}
          labelPlacement="outside"
          placeholder={`Paste Your ${type} Data`}
          classNames={{
            base: "max-w-6xl border-color", //border-[#6366F1]
            input: "resize-y min-h-[550px] ",
            inputWrapper: "border-2 border-[#6366F1]",
            label: "text-xl font-semibold font-serif-san",
          }}
          onValueChange={setValue}
        />

        <div
          className="flex justify-end my-6 gap-4
        "
        >
          <Button
            color="primary"
            variant="ghost"
            className="rounded-md"
            onClick={() => navigate("/three-six-five")}
          >
            Back
          </Button>
          <Button
            className="bg-[#6366F1] text-white rounded-md"
            size="md"
            onClick={handleSubmit}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
DataPaster.propTypes = {
  type: PropTypes.string.isRequired,
};

export default DataPaster;
