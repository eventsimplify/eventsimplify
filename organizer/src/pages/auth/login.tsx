import React, { ReactElement, useState } from "react";
import { Button, Form } from "antd";
import Link from "next/link";

import { AuthService } from "@/services";
import AuthPageLayout from "@/layouts/auth-page";
import Field from "@/form-controls/Field";

import { NextPageWithLayout } from "../_app";

const Login: NextPageWithLayout = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState("");

  const onFinish = async (values: any) => {
    setLoading("login");
    await AuthService.login({
      email: values.email,
      password: values.password,
    });

    setLoading("");
  };

  return (
    <Form
      form={form}
      name="loginForm"
      onFinish={onFinish}
      layout="vertical"
      size="large"
      validateTrigger="onBlur"
    >
      <Field
        name="email"
        label="Email"
        required
        type="email"
        placeholder="Enter your email"
      />

      <Field
        name="password"
        label="Password"
        required
        type="password"
        placeholder="Enter your password"
      />

      <Button
        type="primary"
        htmlType="submit"
        style={{
          width: "100%",
          marginBottom: "2rem",
        }}
        loading={loading === "login"}
      >
        Login
      </Button>
      <Link href="/auth/register">Don't have an account? Register here</Link>
    </Form>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default Login;
