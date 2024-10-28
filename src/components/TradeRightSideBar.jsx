import { Spinner } from "@nextui-org/react";
import { useGetForexsQuery } from "../services/forexApi";
import Footer from "./Footer";

const TradeRightSideBar = () => {
  const {
    data: forexs,
    isLoading: isForexLoading,
    error: forexError,
  } = useGetForexsQuery(1);

  return (
    <>
      <section className="right-side-bar bg-white dark:bg-[#020817] ">
        {forexError && (
          <span className="text-center text-danger-400 font-sans">
            {forexError.data?.message}
          </span>
        )}

        <div className="overflow-y-auto h-[550px]">
          {isForexLoading ? (
            <Spinner />
          ) : forexs?.results?.length > 0 ? (
            forexs.results.map((item) => (
              <div
                key={item?.name}
                className=" dark:bg-gray-700 bg-blue-100 p-3 my-3 rounded-md cursor-pointer hover:opacity-75"
              >
                <div className="flex justify-between items-center">
                  <span className="my-1 text-lg font-sans font-semibold">
                    {item?.pair}
                  </span>
                  <span className="text-md text-emerald-500 font-bold">
                    {item?.price}
                  </span>
                </div>
                <span className="text-md">
                  {item?.updatedAt && new Date(item.updatedAt).toLocaleString()}
                </span>
              </div>
            ))
          ) : (
            <span>No data available</span>
          )}
        </div>

        <Footer
          className=" flex justify-between items-center absolute bottom-0 mt-32 mb-8"
          blockImg={true}
        />
      </section>
    </>
  );
};

export default TradeRightSideBar;
