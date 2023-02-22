import React, { ReactElement, useState } from "react";
import { Button, Form } from "antd";
import { useRouter } from "next/router";

import { AuthService } from "@/services";
import { IUser } from "@/interfaces";
import Field from "@/form-controls/Field";
import AuthPageLayout from "@/layouts/auth-page";

const Register = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState("");
  const router = useRouter();

  const onFinish = async (values: IUser) => {
    setLoading("register");

    const response = await AuthService.register({
      email: values.email,
      name: values.name,
      password: values.password,
    });

    setLoading("");

    if (response) {
      if (router.query.redirect) {
        window.location.href = router.query.redirect as string;

        return;
      }

      router.push("/admin/dashboard");
    }
  };

  const onLogin = () => {
    router.push({
      pathname: "/auth/login",
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
      validateTrigger="onSubmit"
    >
      <Field
        name="name"
        label="Full name"
        required
        type="text"
        placeholder="Enter your full name"
      />
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
        loading={loading === "register"}
      >
        Register
      </Button>

      <Button onClick={onLogin} type="link">
        Already have an account? Login here
      </Button>
    </Form>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default Register;
