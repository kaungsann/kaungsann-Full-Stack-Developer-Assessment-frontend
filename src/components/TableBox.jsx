import PropTypes from "prop-types";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import BottonContent from "./BottomContent";
import React, { useMemo } from "react";
import TopContent from "./TopContent";

const TableBox = ({
  totalPages,
  page,
  results = [],
  selectedQueries,
  onFilter,
  paginatePage,
  initial_visible_columns,
  columns,
}) => {
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(initial_visible_columns)
  );
  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return initial_visible_columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.key)
    );
  }, [visibleColumns, columns, initial_visible_columns]);

  return (
    <>
      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        selectionMode="multiple"
        checkboxesProps={{
          classNames: {
            wrapper: "after:bg-[#6366F1] after:text-white text-white",
          },
        }}
        topContent={
          <TopContent
            onFilter={onFilter}
            columns={columns}
            visibleColumns={visibleColumns}
            filterValue={selectedQueries.account}
            setVisibleColumns={setVisibleColumns}
          />
        }
      >
        <TableHeader columns={headerColumns}>
          <TableHeader columns={headerColumns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
        </TableHeader>
        <TableBody items={results}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell key={columnKey}>{(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <BottonContent
        page={page}
        totalPages={totalPages}
        onChange={paginatePage}
      />
    </>
  );
};

TableBox.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  results: PropTypes.array.isRequired,
  selectedQueries: PropTypes.object,
  onFilter: PropTypes.func,
  paginatePage: PropTypes.func,
  initial_visible_columns: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableBox;
