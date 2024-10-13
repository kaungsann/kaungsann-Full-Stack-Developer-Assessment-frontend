import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { TopContent } from "./TopContent";
import { BottomContent } from "./BottomContent";
import { renderCell } from "../utils/renderCell";

export default function TableBox() {
  // const {
  //   sortedItems,
  //   headerColumns,
  //   selectedKeys,
  //   page,
  //   pages,
  //   setSelectedKeys,
  //   setSortDescriptor,
  //   setPage,
  //   onRowsPerPageChange,
  //   topContentProps,
  //   bottomContentProps,
  // } = useTableState();

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[middle=true]:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={<BottomContent />}
      bottomContentPlacement="outside"
      classNames={classNames}
      // selectedKeys={selectedKeys}
      // selectionMode="multiple"
      // sortDescriptor={topContentProps.sortDescriptor}
      // topContent={<TopContent {...topContentProps} />}
      // topContentPlacement="outside"
      // onSelectionChange={setSelectedKeys}
      // onSortChange={setSortDescriptor}
    >
      <TableHeader>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
