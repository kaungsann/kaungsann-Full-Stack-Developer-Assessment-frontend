import { useCallback, useState } from "react";
import HeaderBox from "../components/HeaderBox";

import TableBox from "../components/TableBox";
import { INITIAL_VISIBLE_COLUMNS, columns } from "../constants/index";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Ellipsis } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../services/userApi";

const UserPage = () => {
  const [page, setPage] = useState(1);

  const [selectedQueies, setSelectedQueies] = useState({
    name: "",
  });

  const navigateTo = useNavigate();

  const { data: users } = useGetUsersQuery();

  console.log("user data is a", users);

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
        case "username":
          return <div>{datas?.username}</div>;
        case "email":
          return <h3>{datas?.email}</h3>;
        case "role":
          return <h3>{datas?.role}</h3>;
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
                      navigateTo(`/users/edit/${datas.id}`);
                    }}
                  >
                    Edit
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => {
                      navigateTo(`/users/delete/${datas.id}`);
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
    navigateTo("/users/create");
  };

  return (
    <div className="p-4">
      <HeaderBox />
      <TableBox
        totalPages={users?.totalPages}
        page={users?.page}
        results={users?.results}
        selectedQueries={selectedQueies}
        onFilter={handleFilterChange}
        paginatePage={paginatePage}
        initial_visible_columns={INITIAL_VISIBLE_COLUMNS}
        columns={columns}
        renderCell={renderCell}
        handleNavigate={handleNavigate}
      />
    </div>
  );
};

export default UserPage;
