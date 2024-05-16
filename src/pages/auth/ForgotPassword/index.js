import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Template from "../Template";
import { forgotPasswordAPI } from "../../../service/auth";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../reducer/userInfo";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const forgotPasswordCall = async (data) => {
    try {
      const userData = await forgotPasswordAPI(data);
      dispatch(setUserData(userData));
      message.success(userData?.meta?.message);
      navigate("/verify-code", { state: userData?.data?.user });
    } catch (error) {
      message.error(error?.meta?.message);
    }
  };

  const onFinish = (values) => {
    const data = {
      email: values?.email,
    };
    forgotPasswordCall(data);
  };

  return (
    <Template>
      <Form
        name="normal_login"
        className="login-form bg-white p-10 br-3 br-md-0 w-60 w-md-full mb-0"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Link to="/login" className="text-primary-dark">
          <i className="icon-back fs-3 ml-0" />
        </Link>
        <div className="text-primary-dark">
          <p className="custom-fonts fs-4 fw-bold mt-0 mb-2">
            Forgot Password?
          </p>
          <p className="fs-small lh-1 mb-0">
            Enter your registered Email Id to recover your password.
          </p>
          <p className="fs-small lh-1 mt-3">
            We will send instructions to your Email Id.
          </p>
        </div>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your Email Id!" },
            { type: "email", message: "Invalid Email address!" },
          ]}
        >
          <Input
            prefix={<i className="icon-email text-link fs-4" />}
            placeholder="Email address"
            size="medium"
            autoComplete="off"
            className="py-2"
          />
        </Form.Item>

        <Form.Item className="mb-0 mt-3">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button fw-bold w-full h-14"
          >
            Continue
          </Button>
        </Form.Item>
      </Form>
    </Template>
  );
};

export default ForgotPassword;
