import PropTypes from "prop-types";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
} from "@nextui-org/react";

import BottonContent from "./BottomContent";
import React, { useMemo } from "react";
import TopContent from "./TopContent";
import { toast } from "sonner";

const TableBox = ({
  totalPages,
  page,
  results = [],
  selectedQueries,
  onFilter,
  paginatePage,
  initial_visible_columns,
  columns,
  renderCell,
  handleNavigate,
  isLoading,
  error,
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

  if (error) {
    toast.error(`${error.data.message}`);
  }

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
            handleNavigate={handleNavigate}
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
          {isLoading
            ? // Render skeleton rows when loading or when there are no results
              Array.from({ length: 10 }).map((_, index) => (
                <TableRow key={index}>
                  {headerColumns.map((column) => (
                    <TableCell key={column.key}>
                      <Skeleton className="h-3 min-w-16 rounded-lg" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : // Render actual table rows when results are available
              results.map((item) => (
                <TableRow key={item.id}>
                  {headerColumns.map((columnKey) => (
                    <TableCell key={columnKey.key}>
                      {renderCell(item, columnKey.key)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
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
  renderCell: PropTypes.func,
  handleNavigate: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
};

export default TableBox;
