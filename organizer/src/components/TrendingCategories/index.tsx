import React from "react";
import { Col, Row } from "antd";

import Item from "./Item";

const TrendingCategories = () => {
  return (
    <div>
      <h2 className="title">Trending Categories</h2>
      <Row gutter={[30, 24]}>
        <Col span={6}>
          <Item />
        </Col>
        <Col span={6}>
          <Item />
        </Col>
        <Col span={6}>
          <Item />
        </Col>
        <Col span={6}>
          <Item />
        </Col>
        <Col span={6}>
          <Item />
        </Col>
        <Col span={6}>
          <Item />
        </Col>
        <Col span={6}>
          <Item />
        </Col>
        <Col span={6}>
          <Item />
        </Col>
      </Row>
    </div>
  );
};

export default TrendingCategories;
