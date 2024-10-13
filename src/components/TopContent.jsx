import PropTypes from "prop-types";
import {
  Input,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/react";

// import { columns } from "./data";
// import { capitalize } from "./utils";

export const TopContent = ({
  filterValue,
  statusFilter,
  visibleColumns,
  setFilterValue,
  setVisibleColumns,
  setStatusFilter,
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
        />
        <div className="flex gap-3">
          <Dropdown>
            <DropdownTrigger>
              <Button size="md" variant="flat">
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              selectedKeys={statusFilter}
              selectionMode="multiple"
              onSelectionChange={setStatusFilter}
            >
              {/* {statusOptions.map((status) => (
                <DropdownItem key={status.uid}>
                  {capitalize(status.name)}
                </DropdownItem>
              ))} */}
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownTrigger>
              <Button size="md" variant="flat">
                Columns
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              selectedKeys={visibleColumns}
              selectionMode="multiple"
              onSelectionChange={setVisibleColumns}
            >
              {/* {columns.map((column) => (
                <DropdownItem key={column.uid}>
                  {capitalize(column.name)}
                </DropdownItem>
              ))} */}
            </DropdownMenu>
          </Dropdown>
          <Button size="md">Add New</Button>
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
  statusFilter: PropTypes.string.isRequired,
  visibleColumns: PropTypes.number.isRequired,

  setFilterValue: PropTypes.string.isRequired,
  setVisibleColumns: PropTypes.string.isRequired,
  setStatusFilter: PropTypes.number.isRequired,

  onRowsPerPageChange: PropTypes.string.isRequired,
  usersLength: PropTypes.number.isRequired,
};
