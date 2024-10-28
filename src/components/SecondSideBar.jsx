import { useGetChannelsQuery } from "../services/channelApi";
import DataBox from "./DataBox";

const SecondSideBar = () => {
  const {
    data: channels,
    isLoading: isChannelLoading,
    error: channelError,
  } = useGetChannelsQuery();

  return (
    <>
      <section className="secsidebar bg-white dark:bg-[#020817]">
        <DataBox
          name="Channels"
          data={channels?.results}
          isLoading={isChannelLoading}
          error={channelError}
        />
      </section>
    </>
  );
};

export default SecondSideBar;
