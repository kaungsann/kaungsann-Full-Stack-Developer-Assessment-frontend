import React from "react";
import { Pagination } from "@nextui-org/react";

export const BottomContent = ({
  page,
  pages,
  setPage,
  selectedKeys,
  itemsLength,
}) => {
  return (
    <div className="py-2 px-2 flex justify-between items-center">
      <Pagination page={page} total={pages} onChange={setPage} />
      <span>
        {selectedKeys === "all"
          ? "All items selected"
          : `${selectedKeys.size} of ${itemsLength} selected`}
      </span>
    </div>
  );
};
