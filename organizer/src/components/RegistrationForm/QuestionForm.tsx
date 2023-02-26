import React, { useEffect, useMemo, useState } from "react";
import { Drawer, Space, Button, Form } from "antd";

import Field from "@/form-controls/Field";
import { IQuestion, IQuestionOption } from "@/interfaces";

const QuestionFormDialog = ({
  open,
  onClose,
  questions,
  setQuestions,
  question = null,
}: {
  open: boolean;
  onClose: () => void;
  questions: IQuestion[];
  setQuestions: (questions: IQuestion[]) => void;
  question?: IQuestion | null;
}) => {
  const [form] = Form.useForm();
  const [questionType, setQuestionType] = useState("text");

  const [options, setOptions] = useState<IQuestionOption[]>([]);

  const showOptions = useMemo(() => {
    if (question) {
      return ["dropdown", "radio", "checkbox"].includes(question.type);
    }

    return ["dropdown", "radio", "checkbox"].includes(questionType);
  }, [questionType, question]);

  const onFinish = (values: any) => {
    const newQuestion: IQuestion = {
      name: values.name,
      label: values.name,
      type: values.type,
      options: options,
      included: true,
      required: true,
    };

    if (question) {
      const index = questions.findIndex((q) => q.name === question.name);
      questions[index] = newQuestion;
      setQuestions([...questions]);
    }

    if (!question) {
      setQuestions([...questions, newQuestion]);
    }

    form.resetFields();
    setOptions([]);

    setQuestionType("text");
    onClose();
  };

  useEffect(() => {
    if (!question) {
      setOptions([]);
      return;
    }

    setOptions(question?.options || []);

    form.setFieldValue("name", question.name);
    form.setFieldValue("type", question.type);
  }, [question]);

  return (
    <Drawer
      title={question ? "Edit question" : "Add question"}
      width={720}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
      onClose={onClose}
      extra={
        <Space>
          <Button>Cancel</Button>
          <Button type="primary" htmlType="submit" form="questionForm">
            {question ? "Update" : "Create"}
          </Button>
        </Space>
      }
      destroyOnClose
      maskClosable={false}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          type: "text",
        }}
        name="questionForm"
        onValuesChange={(changedValues) => {
          if (changedValues.type) {
            setQuestionType(changedValues.type);
          }
        }}
        validateTrigger="onSubmit"
        onFinish={onFinish}
      >
        <Field
          name="name"
          label="Question name"
          type="text"
          required
          placeholder="Enter question name"
        />

        <Field
          name="type"
          label="Question type"
          type="dropdown"
          required
          placeholder="Select question type"
          options={[
            { label: "Short answer", value: "text" },
            { label: "Paragraph", value: "textarea" },
            { label: "Multiple choice", value: "radio" },
            { label: "Checkboxes", value: "checkbox" },
            { label: "Dropdown", value: "dropdown" },
          ]}
        />

        {showOptions && (
          <Field
            name="options"
            label="Options"
            type="options"
            required
            placeholder="Enter options"
            extra="Add options separated by comma (,) and click on create options button."
            options={options}
            setOptions={setOptions}
          />
        )}
      </Form>
    </Drawer>
  );
};

export default QuestionFormDialog;
