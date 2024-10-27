import { useCallback, useState } from "react";
import HeaderBox from "../components/HeaderBox";

import TableBox from "../components/TableBox";
import {
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

  const { data: channels } = useGetChannelsQuery();

  console.log("user data is a", channels);

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
          return <div>{datas?.username}</div>;
        case "create_by":
          return <h3>{datas?.create_by?.name}</h3>;
        case "members":
          return <h3>{datas?.members.length}</h3>;
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
    navigateTo("/channels/create");
  };

  return (
    <div className="p-4">
      <HeaderBox />
      <TableBox
        totalPages={channels?.totalPages}
        page={channels?.page}
        results={channels?.results}
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
