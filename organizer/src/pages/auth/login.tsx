import React, { ReactElement, useState } from "react";
import { Button, Checkbox, Divider, Form, Space, Typography } from "antd";
import { useRouter } from "next/router";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { GoogleOutlined } from "@ant-design/icons";

const { Link } = Typography;

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

  const onGoogleSuccess = async (googleResponse: TokenResponse) => {
    setLoading("google");

    const { access_token } = googleResponse;

    console.log(googleResponse);

    const response = await AuthService.socialLogin({
      access_token,
      provider: "google",
    });

    if (response) {
      if (router.query.redirect) {
        window.location.href = router.query.redirect as string;
        return;
      }

      window.location.href = "/admin/dashboard";
    }

    setLoading("");
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (credentialResponse) => onGoogleSuccess(credentialResponse),
    onError: (response) => {
      console.log(response);
    },
    onNonOAuthError: (response) => {
      console.log(response);
    },
  });

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

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a
          href=""
          style={{
            float: "right",
          }}
        >
          Forgot password
        </a>
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        style={{
          width: "100%",
        }}
        loading={loading === "login"}
      >
        Login
      </Button>

      <Divider plain>OR</Divider>

      <Space direction="vertical" size="large">
        <Button
          type="primary"
          danger
          shape="round"
          icon={<GoogleOutlined />}
          onClick={() => googleLogin()}
          loading={loading === "google"}
        >
          Login with Google
        </Button>

        <Link onClick={onRegiser}>Dont have an account? Register here</Link>
      </Space>
    </Form>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default Login;
