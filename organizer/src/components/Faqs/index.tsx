import React from "react";
import { Button, Col, Collapse, Row, Space } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { IFaq } from "@/interfaces";
import { FaqService } from "@/services";
import ShowRichText from "../ShowRichText";

const { Panel } = Collapse;

const FaqList = ({
  faqs,
  setFaq,
  getFaqs,
  setLoading,
  loading,
}: {
  faqs: IFaq[];
  setFaq: (faq: IFaq | null) => void;
  getFaqs: () => void;
  setLoading: (loading: string) => void;
  loading: string;
}) => {
  const deleteFaq = async (id: number) => {
    setLoading("delete-faq");

    const response = await FaqService.remove(id);

    if (response) {
      getFaqs();
    }
    setLoading("");
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={18}>
        <Collapse>
          {faqs.map((faq) => (
            <Panel
              header={faq.question}
              key={String(faq.id)}
              extra={
                <Space onClick={(e) => e.stopPropagation()}>
                  <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => setFaq(faq)}
                  />
                  <Button
                    icon={<DeleteOutlined />}
                    type="text"
                    danger
                    loading={loading === "delete-faq"}
                    onClick={() => deleteFaq(faq?.id || 0)}
                  />
                </Space>
              }
            >
              <ShowRichText text={faq.answer} />
            </Panel>
          ))}
        </Collapse>
      </Col>
    </Row>
  );
};

export default FaqList;
