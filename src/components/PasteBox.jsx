import { useState } from "react";

const PasteBox = () => {
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/v1/infos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: textAreaValue }), // Send the textarea value in the body
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      const data = await response.json(); // Handle response
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="w-4/5 mx-auto mt-40">
        <textarea
          name="data_mapper"
          id="data_mapper"
          className="w-full h-60"
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
        ></textarea>

        <button
          onClick={handleSubmit} // Trigger POST request when button is clicked
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default PasteBox;
