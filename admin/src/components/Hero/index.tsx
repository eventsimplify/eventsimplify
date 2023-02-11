import React from "react";
import { Button, Col, Input, Row, Select, DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles.heroDetails}>
        <h1 className={styles.heroTitle}>
          Title and tigline for the business or branding
        </h1>
        <p className={styles.heroDescription}>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </p>
      </div>
      <div className={styles.search}>
        <h3 className="title">What do you want to do?</h3>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Search for tennis"
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col span={12}>
            <Select
              defaultValue="lucy"
              size="large"
              style={{ width: "100%" }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Col>
          <Col span={12}>
            <DatePicker style={{ width: "100%" }} size="large" />
          </Col>
        </Row>
        <Button type="primary" size="large">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Hero;
