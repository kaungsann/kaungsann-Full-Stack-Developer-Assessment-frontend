import { useEffect, useState } from "react";
import HeaderBox from "../components/HeaderBox";

import TableBox from "../components/TableBox";
import { INITIAL_VISIBLE_COLUMNS, columns } from "../constants/sidebarLinks";

const ThreeSixFivePage = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [selectedQueies, setSelectedQueies] = useState({
    account: "",
    contact: "",
    assignedTo: "",
    status: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/v1/infos", {
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

  console.log("table data is a", data);

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
      />
    </div>
  );
};

export default ThreeSixFivePage;
