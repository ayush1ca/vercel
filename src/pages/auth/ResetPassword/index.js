import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Template from "../Template";
import { resetPasswordAPI } from "../../../service/auth";
import { useSelector } from "react-redux";

const ResetPassword = () => {
  const navigate = useNavigate();

  const resetPasswordCall = async (data) => {
    try {
      const response = await resetPasswordAPI(data);
      navigate("/login");
      message.success(response?.meta?.message)
    } catch (error) {
      message.error(error?.meta?.message);
    }
  };

  const userId = useSelector((state) => state?.counter?.userData?.user?.id);
  const onFinish = (values) => {
    const data = {
      user_id: userId,
      password: values?.password,
      confirm_password: values?.retypePassword,
    };
    resetPasswordCall(data);
  };
useEffect(() => {
if (!userId){
  navigate("/login");
}
}, [])

  return (
    <Template>
      <Form
        name="normal_login"
        className="login-form bg-white p-10 br-3 br-md-0 w-60 mb-0 w-md-screen"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Link to="/verify-code" className="text-primary-dark">
          <i className="icon-back fs-3" />
        </Link>
        <div className="text-primary-dark">
          <p className="custom-fonts fs-4 fw-bold mt-0 mb-0">Reset New Password</p>
          <p className="lh-1 mt-1">Set a new password.</p>
        </div>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please enter password!" },
            {
              // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              pattern: /^(?!.*[\s])(?=.*\d)(?=.*[!@#$%^&_*+])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message: `Password must contain at least eight characters, one number, both lower and uppercase letters and special characters`,
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<i className="icon-password text-link fs-4" />}
            placeholder="New Password"
            type="password"
            size="medium"
            autoComplete="off"
            className="py-2"
          />
        </Form.Item>

        <Form.Item
          name="retypePassword"
          hasFeedback
          rules={[
            { required: true, message: "Please confirm password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Password does not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<i className="icon-password text-link fs-4" />}
            placeholder="Confirm Password"
            type="password"
            size="medium"
            autoComplete="off"
            className="py-2"
          />
        </Form.Item>

        <Form.Item className="mb-0 mt-3">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button w-full h-14"
          >
            Continue
          </Button>
        </Form.Item>
      </Form>
    </Template>
  );
};

export default ResetPassword;
