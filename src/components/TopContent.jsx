import PropTypes from "prop-types";
import {
  Input,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

// import { columns } from "./data";
// import { capitalize } from "./utils";

const TopContent = ({
  filterValue,
  columns,
  visibleColumns,
  setFilterValue,
  setVisibleColumns,
  onRowsPerPageChange,
  usersLength,
}) => {
  const onSearchChange = (value) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue("");
    }
  };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          placeholder="Search by name..."
          size="md"
          value={filterValue}
          onClear={() => setFilterValue("")}
          onValueChange={onSearchChange}
          className="max-w-80"
          //  onValueChange={(val) => onFilter("name", val)}
        />
        <div className="flex gap-3">
          <Dropdown>
            <DropdownTrigger>
              <Button size="md" variant="flat">
                Columns
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              selectedKeys={visibleColumns}
              closeOnSelect={false}
              selectionMode="multiple"
              onSelectionChange={setVisibleColumns}
              classNames={{
                base: "h-96",
                content: "p-0 border-small border-divider bg-background",
              }}
            >
              {columns.map((column) => (
                <DropdownItem key={column.key}>{column.label}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Button
            size="md"
            className="bg-[#6366f1] text-white"
            onClick={() => navigate("/three-six-five/data-paste")}
          >
            Add Data
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span>Total {usersLength} users</span>
        <label>
          Rows per page:
          <select onChange={onRowsPerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    </div>
  );
};

TopContent.propTypes = {
  filterValue: PropTypes.string.isRequired,
  visibleColumns: PropTypes.instanceOf(Set).isRequired,
  setFilterValue: PropTypes.func.isRequired,
  setVisibleColumns: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func.isRequired,
  usersLength: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TopContent;
