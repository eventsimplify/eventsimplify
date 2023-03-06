import React, { useEffect, useState } from "react";
import { Card, Divider, Row, Col, Typography } from "antd";

import EventLayoutWithContext from "@/layouts/event";

import { IFaq } from "@/interfaces";
import { FaqService } from "@/services";
import FaqList from "@/components/Faqs";
import FaqForm from "@/components/Faqs/FaqForm";

const { Title, Paragraph } = Typography;

const FAQs = () => {
  const [faqs, setFaqs] = useState<IFaq[]>([]);
  const [faq, setFaq] = useState<IFaq | null>(null);
  const [loading, setLoading] = useState("");

  const getFaqs = async () => {
    setLoading("faqs");
    const response = await FaqService.list();
    setFaqs(response);
    setLoading("");
  };

  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <Card>
      <Title level={4}>Frequently asked questions (FAQs) for your event</Title>
      <Paragraph>
        Add frequently asked questions (FAQs) to your event. You can add up to
        10 FAQs.
      </Paragraph>
      <Divider />
      <FaqList
        faqs={faqs}
        setFaq={setFaq}
        getFaqs={getFaqs}
        setLoading={setLoading}
        loading={loading}
      />
      <Divider />
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={5}>Add a FAQ</Title>
        </Col>
        <Col span={18}>
          <FaqForm
            loading={loading}
            faq={faq}
            setFaq={setFaq}
            getFaqs={getFaqs}
            setLoading={setLoading}
          />
        </Col>
      </Row>
    </Card>
  );
};

FAQs.getLayout = (page: any) => (
  <EventLayoutWithContext>{page}</EventLayoutWithContext>
);

export default FAQs;
