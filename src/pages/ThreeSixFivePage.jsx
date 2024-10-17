import { useCallback, useEffect, useState } from "react";
import HeaderBox from "../components/HeaderBox";

import TableBox from "../components/TableBox";
import { INITIAL_VISIBLE_COLUMNS, columns } from "../constants/sidebarLinks";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Ellipsis } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThreeSixFivePage = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [selectedQueies, setSelectedQueies] = useState({
    account: "",
    contact: "",
  });

  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/v1/threesixfives", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("error is a", error);
      }
    };

    fetchData();
  }, []); // Runs only on

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
        case "account":
          return <div>{datas.account}</div>;
        case "contact":
          return <h3>{datas.contact}</h3>;
        case "cur":
          return <h3>{datas.cur}</h3>;
        case "bet_amount":
          return <h3>{datas.bet_amount}</h3>;
        case "trun_over":
          return <h3>{datas.trun_over}</h3>;
        case "action":
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
                      navigateTo(`/three-six-five/${datas.id}`);
                    }}
                  >
                    View
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => {
                      navigateTo(`/master/projects/edit/${datas.id}`);
                    }}
                  >
                    Edit
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => {
                      navigateTo(`/master/projects/delete/${datas.id}`);
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

  return (
    <div className="p-4">
      <HeaderBox />
      <TableBox
        totalPages={data.totalPages}
        page={data.page}
        results={data?.results}
        selectedQueries={selectedQueies}
        onFilter={handleFilterChange}
        paginatePage={paginatePage}
        initial_visible_columns={INITIAL_VISIBLE_COLUMNS}
        columns={columns}
        renderCell={renderCell}
      />
    </div>
  );
};

export default ThreeSixFivePage;
