import { useCallback, useState } from "react";
import HeaderBox from "../components/HeaderBox";

import TableBox from "../components/TableBox";
import {
  FOREX_INITIAL_VISIBLE_COLUMNS,
  forex_columns,
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
import { useGetForexsQuery } from "../services/forexApi";

const TradingPage = () => {
  const [page, setPage] = useState(1);

  const [selectedQueies, setSelectedQueies] = useState({
    name: "",
  });

  const navigateTo = useNavigate();

  const { data: forexs } = useGetForexsQuery();

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
        case "pair":
          return <div>{datas?.pair}</div>;
        case "price":
          return <h3>{datas?.price}</h3>;
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
                      navigateTo(`/forexs/edit/${datas.id}`);
                    }}
                  >
                    Edit
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => {
                      navigateTo(`/forexs/delete/${datas.id}`);
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
        totalPages={forexs?.totalPages}
        page={forexs?.page}
        results={forexs?.results}
        selectedQueries={selectedQueies}
        onFilter={handleFilterChange}
        paginatePage={paginatePage}
        initial_visible_columns={FOREX_INITIAL_VISIBLE_COLUMNS}
        columns={forex_columns}
        renderCell={renderCell}
        handleNavigate={handleNavigate}
      />
    </div>
  );
};

export default TradingPage;
