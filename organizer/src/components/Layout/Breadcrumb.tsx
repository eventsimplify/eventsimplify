import React from "react";
import { Breadcrumb as AntDesignBreadcrumb } from "antd";

const Breadcrumb = () => {
  return (
    <AntDesignBreadcrumb>
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
