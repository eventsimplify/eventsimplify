import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";

import styles from "./Login.module.css";

import { AuthService } from "@/services";
import AuthPageLayout from "@/layouts/auth-page";
import useAuth from "@/hooks/useAuth";

const Login = () => {
  const [form] = Form.useForm();
  const { getUser } = useAuth();
  const [loading, setLoading] = useState("");

  const onFinish = async (values: any) => {
    setLoading("login");
    await AuthService.login({
      email: values.email,
      password: values.password,
    });

    await getUser();
    setLoading("");
  };

  return (
    <AuthPageLayout>
      <div className={styles.login}>
        <div className={styles.loginCard}>
          <Form
            form={form}
            name="loginForm"
            onFinish={onFinish}
            layout="vertical"
            size="large"
            validateTrigger="onBlur"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please input a valid email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
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
            </Form.Item>
            <Link href="/auth/register">
              Don't have an account? Register here
            </Link>
          </Form>
        </div>
      </div>
    </AuthPageLayout>
  );
};

export default Login;
