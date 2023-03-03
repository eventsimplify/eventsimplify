import React, { useEffect } from "react";
import { Button, Col, Form, Row, Space } from "antd";

import { useEventContext } from "@/contexts/EventProvider";

import Field from "@/form-controls/Field";

const SpeakerForm = () => {
  const { createSpeaker, setSpeaker, updateSpeaker, speaker, loading } =
    useEventContext();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    if (speaker) {
      const data = await updateSpeaker(values);
      if (data) {
        await form.resetFields();
      }
      return;
    }

    const data = await createSpeaker(values);
    if (data) {
      await form.resetFields();
    }
  };

  useEffect(() => {
    if (speaker) {
      form.setFieldsValue({
        name: speaker.name,
        company: speaker.company,
        jobTitle: speaker.jobTitle,
        description: speaker.description,
      });
    }
  }, [speaker]);

  const onCancel = () => {
    setSpeaker(null);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Field
        name="name"
        label="Speaker name"
        type="text"
        required
        placeholder="e.g. John Doe"
      />
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Field
            name="company"
            label="Company name"
            type="text"
            required
            placeholder="e.g. Google"
          />
        </Col>
        <Col span={12}>
          <Field
            name="jobTitle"
            label="Job title"
            type="text"
            required
            placeholder="e.g. Software Engineer"
          />
        </Col>
        <Col span={24}>
          <Field
            name="description"
            label="Description"
            type="textarea"
            placeholder="Provide a short description of the speaker"
            required
          />
        </Col>
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
              loading={
                loading === "create-speaker" || loading === "update-speaker"
              }
            >
              {speaker ? "Update" : "Create"}
            </Button>
          </Space>
        </Col>
      </Row>
    </Form>
  );
};

export default SpeakerForm;
