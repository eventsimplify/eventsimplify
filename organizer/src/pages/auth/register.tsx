import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";

import styles from "./Login.module.css";

import { AuthService } from "@/services";
import { IUser } from "@/interfaces";

const Register = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState("");

  const onFinish = async (values: IUser) => {
    setLoading("register");

    await AuthService.register({
      email: values.email,
      name: values.name,
      password: values.password,
      type: "organizer",
    });

    setLoading("");
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
          validateTrigger="onSubmit"
        >
          <Form.Item
            label="Full name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input placeholder="Full name" />
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
              loading={loading === "register"}
            >
              Register
            </Button>
          </Form.Item>
          <Link href="/auth/login">Already have a account? Login</Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
