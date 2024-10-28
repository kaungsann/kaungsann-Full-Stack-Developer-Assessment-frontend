import { useCallback, useState } from "react";
import HeaderBox from "../components/HeaderBox";

import TableBox from "../components/TableBox";
import {
  FOREX_INITIAL_VISIBLE_COLUMNS,
  forex_columns,
  CHANNEL_INITIAL_VISIBLE_COLUMNS,
  channel_columns,
} from "../constants/index";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Ellipsis } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetChannelsQuery } from "../services/channelApi";

const ChannelPage = () => {
  const [page, setPage] = useState(1);

  const [selectedQueies, setSelectedQueies] = useState({
    name: "",
  });

  const navigateTo = useNavigate();

  const { data } = useGetChannelsQuery();

  const paginatePage = (pg) => {
    setPage(pg);
  };

  const handleFilterChange = (key, value) => {
    setSelectedQueies((prevState) => ({ ...prevState, [key]: value }));
  };

  const renderCell = useCallback(
    (datas, columnKey) => {
      if (!datas) return null; // Handle undefined datas

      const cellValue = datas[columnKey];

      switch (columnKey) {
        case "name":
          return <div>{datas?.name}</div>;
        case "members":
          return <h3>{datas?.members}</h3>;
        case "isPrivate":
          return <h3>{datas?.isPrivate}</h3>;
        case "actions":
          return (
            <div className="relative flex justify-start items-center">
              <Dropdown aria-label="Actions" className="bg-[#6366f1]">
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <Ellipsis className="dark:text-white" size={20} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Action Items" className="text-white">
                  <DropdownItem
                    onPress={() => {
                      navigateTo(`/channels/edit/${datas.id}`);
                    }}
                  >
                    Edit
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => {
                      navigateTo(`/channels/delete/${datas.id}`);
                    }}
                  >
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue !== undefined ? cellValue : null; // Handle undefined cellValue
      }
    },
    [navigateTo]
  );

  const handleNavigate = () => {
    navigateTo("/forexs/create");
  };

  return (
    <div className="p-4">
      <HeaderBox />
      <TableBox
        totalPages={data?.totalPages}
        page={data?.page}
        results={data?.results}
        selectedQueries={selectedQueies}
        onFilter={handleFilterChange}
        paginatePage={paginatePage}
        initial_visible_columns={CHANNEL_INITIAL_VISIBLE_COLUMNS}
        columns={channel_columns}
        renderCell={renderCell}
        handleNavigate={handleNavigate}
      />
    </div>
  );
};

export default ChannelPage;
