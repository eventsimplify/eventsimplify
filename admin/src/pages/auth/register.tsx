import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";

import styles from "./Login.module.css";

import { AuthService } from "@/services";
import { useRouter } from "next/router";

const Register = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState("");

  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading("login");

    try {
      await AuthService.login({
        email: values.email,
        password: values.password,
      });

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading("");
    }
  };

  return (
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
            label="First name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
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
            rules={[{ required: true, message: "Please input your password!" }]}
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
          <Link href="/auth/login">Already have a account? Login</Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
