import React, { ReactElement, useState } from "react";
import { Button, Form } from "antd";
import { useRouter } from "next/router";

import { AuthService } from "@/services";
import AuthPageLayout from "@/layouts/auth-page";
import Field from "@/form-controls/Field";

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState("");
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading("login");
    const response = await AuthService.login({
      email: values.email,
      password: values.password,
    });

    setLoading("");

    if (response) {
      if (router.query.redirect) {
        window.location.href = router.query.redirect as string;

        return;
      }

      window.location.href = "/admin/dashboard";
    }
  };

  const onRegiser = () => {
    router.push({
      pathname: "/auth/register",
      query: router.query,
    });

    return;
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
      <Button onClick={onRegiser} type="link">
        Dont have an account? Register here
      </Button>
    </Form>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default Login;
