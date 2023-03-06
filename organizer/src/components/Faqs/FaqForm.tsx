import React, { useEffect } from "react";
import { Button, Col, Form, Space } from "antd";

import Field from "@/form-controls/Field";
import { IFaq } from "@/interfaces";
import { FaqService } from "@/services";

const FaqForm = ({
  loading,
  faq,
  setFaq,
  getFaqs,
  setLoading,
}: {
  loading: string;
  faq: IFaq | null;
  setFaq: (faq: IFaq | null) => void;
  getFaqs: () => void;
  setLoading: (loading: string) => void;
}) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    if (faq) {
      return onUpdate(values);
    }
    setLoading("create-faq");
    const { question, answer } = values;
    const response = await FaqService.create({
      question,
      answer,
    });

    if (response) {
      getFaqs();
      form.resetFields();
    }
    setLoading("");
  };

  const onUpdate = async (values: any) => {
    setLoading("update-faq");
    if (!faq?.id) return;
    const { question, answer } = values;
    const response = await FaqService.update({
      id: faq?.id,
      formData: {
        question,
        answer,
      },
    });

    if (response) {
      getFaqs();
      form.resetFields();
      setFaq(null);
    }
    setLoading("");
  };

  useEffect(() => {
    if (faq) {
      form.setFieldsValue({
        question: faq.question,
        answer: faq.answer,
      });
    }
  }, [faq]);

  const onCancel = () => {
    setFaq(null);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      validateTrigger="onBlur"
    >
      <Field
        name="question"
        label="Question"
        type="text"
        required
        placeholder="e.g. What is the event about?"
      />
      <Field
        name="answer"
        label="Answer"
        type="rich-text"
        required
        placeholder="e.g. The event is about..."
        form={form}
      />
      <Col
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
        span={24}
      >
        <Space>
          <Button htmlType="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading === "create-faq"}
          >
            {faq ? "Update" : "Create"}
          </Button>
        </Space>
      </Col>
    </Form>
  );
};

export default FaqForm;
