import { Spinner } from "@nextui-org/react";
import PropTypes from "prop-types";

const DataBox = ({ data, isLoading, error, name }) => {
  console.log("share datat is a", data);
  console.log("loading is a", isLoading);
  console.log("error is a", error);

  return (
    <>
      <div>
        {error && (
          <span className="text-center text-danger-400 font-sans">
            {error.data?.message}
          </span>
        )}
        <h1 className="text-2xl font-sans font-semibold">{name}</h1>

        <div className="h-[550px] p-2 mt-12 overflow-y-auto">
          {isLoading ? (
            <Spinner />
          ) : (
            data?.map((item) => (
              <div
                key={item?.name}
                className="flex flex-col bg-gray-700 p-3 my-3 rounded-md cursor-pointer hover:opacity-75"
              >
                {/* Always include a unique key for each item */}
                <span className="my-1 text-lg font-sans font-semibold">
                  {item?.name}
                </span>
                <span className="text-md text-emerald-500 font-bold">
                  {" create-by" + " " + item?.created_by?.username}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

DataBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  name: PropTypes.string,
};

export default DataBox;
