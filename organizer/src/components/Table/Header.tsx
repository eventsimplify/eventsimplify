import React from "react";
import { Button } from "antd";
import EventFilters from "../Filters/EventFilters";

const TableHeader = () => {
  return (
    <div className="table-header">
      <EventFilters />
      <Button type="primary">Create Event</Button>
    </div>
  );
};

export default TableHeader;
