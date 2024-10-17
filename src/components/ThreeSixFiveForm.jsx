import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import CustomInput from "./CustomInput";
import HeaderBox from "./HeaderBox";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBigRight } from "lucide-react";
import CustomButton from "./CustomButton";

const ThreeSixFiveForm = ({ mode }) => {
  const [data, setData] = useState({});

  const { id } = useParams();
  const navigateTo = useNavigate();

  useEffect(() => {
    const getThreeFiveSixData = async () => {
      const response = await fetch(
        `http://localhost:3000/v1/threesixfives/${id}`
      );

      const result = await response.json();

      setData(result);
    };

    getThreeFiveSixData();
  }, [id]);

  console.log("three six five data is a", typeof data);
  return (
    <div className="p-4">
      <HeaderBox />

      <div className="flex my-8">
        <h2 className="text-xl font-sans font-semibold">Three Six Five Form</h2>
        <span className="ml-6 flex items-center">
          <ArrowBigRight color="#6366f1" size={25} />
          <span className="ml-3 font-sans text-xl text-[#6366f1] font-semibold ">
            {mode}
          </span>
        </span>
      </div>
      <form>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Object.entries(data).map(([key, value]) => (
            <CustomInput
              key={key}
              name={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              placeholder={`Enter ${key}`}
              value={value || ""}
              className=""
            />
          ))}
        </div>
        <div className="flex justify-end">
          <CustomButton
            className="mt-8 text-white"
            name="Back"
            color="primary"
            variant="ghost"
            onClick={() => navigateTo("/three-six-five")}
          />
          {mode === "Edit" ||
            (mode === "Delete" && (
              <CustomButton
                className="mt-8 bg-[#6366f1] text-white ml-4"
                name={mode}
                varient="flat"
              />
            ))}
        </div>
      </form>
    </div>
  );
};

ThreeSixFiveForm.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default ThreeSixFiveForm;
