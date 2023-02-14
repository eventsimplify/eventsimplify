import React from "react";
import { Breadcrumb as AntDesignBreadcrumb } from "antd";

const Breadcrumb = () => {
  return (
    <AntDesignBreadcrumb style={{ margin: "0px 0px 1rem 0px" }}>
      <AntDesignBreadcrumb.Item>Home</AntDesignBreadcrumb.Item>
      <AntDesignBreadcrumb.Item>
        <a href="">Application Center</a>
      </AntDesignBreadcrumb.Item>
      <AntDesignBreadcrumb.Item>
        <a href="">Application List</a>
      </AntDesignBreadcrumb.Item>
      <AntDesignBreadcrumb.Item>An Application</AntDesignBreadcrumb.Item>
    </AntDesignBreadcrumb>
  );
};

export default Breadcrumb;
