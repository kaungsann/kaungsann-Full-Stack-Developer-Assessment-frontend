import PropTypes from "prop-types";
import { Pagination } from "@nextui-org/react";

const BottomContent = ({ page, totalPages, setPage, selectedKeys }) => {
  //${selectedKeys.size} of ${itemsLength}
  return (
    <div className="py-2 px-2 flex justify-between items-center">
      <Pagination
        page={page}
        total={totalPages}
        onChange={setPage}
        variant="bordered"
        showControls
        loop
        initialPage={setPage} // first see page
        classNames={{
          cursor: "bg-[#6366F1]",
        }}
      />
      <span>{selectedKeys === "all" ? "All items selected" : ` `}</span>
    </div>
  );
};

BottomContent.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPage: PropTypes.number.isRequired,
  selectedKeys: PropTypes.array,
  itemsLength: PropTypes.array,
};

export default BottomContent;
