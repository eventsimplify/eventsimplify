import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { Button, Card, Space, Form as AntDForm } from "antd";

import { EyeOutlined } from "@ant-design/icons";

import EventLayoutWithContext from "@/layouts/event";
import Form from "@/components/RegistrationForm";
import { IQuestion, IRegistrationForm } from "@/interfaces";
import { RegistrationFormService } from "@/services";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const Detail = () => {
  const router = useRouter();
  const [form] = AntDForm.useForm();
  const [loading, setLoading] = useState("");
  const [initalQuestions, setInitialQuestions] = useState<IQuestion[]>([]);

  const [initialAdditionalQuestions, setInitialAdditionalQuestions] = useState<
    IQuestion[]
  >([]);

  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [additionalQuestions, setAdditionalQuestions] = useState<IQuestion[]>(
    []
  );

  const [formDetail, setFormDetail] = useState<IRegistrationForm | null>(null);

  const getFormDetail = async () => {
    setLoading("detail");
    const response = await RegistrationFormService.detail(
      router.query.id as string
    );
    if (response) {
      setFormDetail(response);
      setInitialQuestions(response.questions);
      setQuestions(response.questions);

      setInitialAdditionalQuestions(response.additionalQuestions);
      setAdditionalQuestions(response.additionalQuestions);
    }
    setLoading("");
  };

  useEffect(() => {
    if (router.query.id) {
      getFormDetail();
    }
  }, [router.query.id]);

  const onFinish = async (values: any) => {
    setLoading("update");

    const formData = {
      name: values.name,
      questions,
      additional_questions: additionalQuestions,
      eventId: router.query.eventId as string,
    };

    await RegistrationFormService.update(router.query.id as string, formData);

    setInitialQuestions(questions);
    setInitialAdditionalQuestions(additionalQuestions);

    setLoading("");
  };

  const isFormChanged = useMemo(() => {
    if (form.isFieldTouched("name")) {
      return true;
    }

    if (initalQuestions !== questions) {
      return true;
    }

    if (initialAdditionalQuestions !== additionalQuestions) {
      return true;
    }

    return false;
  }, [
    form,
    initalQuestions,
    initialAdditionalQuestions,
    questions,
    additionalQuestions,
  ]);

  if (loading === "detail" || formDetail === null) {
    return <Loader />;
  }

  return (
    <AntDForm
      form={form}
      name="registrationForm"
      onFinish={onFinish}
      layout="vertical"
      validateTrigger="onSubmit"
      initialValues={{
        name: formDetail.name,
      }}
    >
      <Card
        title="Update registration form"
        extra={
          <Space>
            <Button icon={<EyeOutlined />}>Preview</Button>
            <Button
              type="primary"
              htmlType="submit"
              form="registrationForm"
              loading={loading === "update"}
              disabled={!isFormChanged}
            >
              Update
            </Button>
          </Space>
        }
      >
        <Form
          questions={questions}
          setQuestions={setQuestions}
          additionalQuestions={additionalQuestions}
          setAdditionalQuestions={setAdditionalQuestions}
        />
      </Card>
    </AntDForm>
  );
};

Detail.getLayout = (page: ReactElement) => {
  return <EventLayoutWithContext>{page}</EventLayoutWithContext>;
};

export default Detail;
