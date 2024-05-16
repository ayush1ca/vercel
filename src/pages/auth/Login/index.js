import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../../../service/auth";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../reducer/userInfo";
import Template from "../Template";
import AuthLogin from "../../../components/authLogin/index";
import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const loginAPICall = async (data) => {
    try {
      const response = await loginAPI(data);
      Cookies.set("user", JSON.stringify(response?.data.user),{ expires: 7 });
      dispatch(setUserData(response?.data));
      Cookies.set("token", response?.data?.token, { expires: 7 });
      message.success(response?.meta?.message);
      window.location.replace("/gift-card-library");
    } catch (error) {
      message.error(error?.meta?.message);
    }
  };

  const onFinish = (values) => {
    const data = {
      email: values?.email,
      password: values?.password,
    };
    loginAPICall(data);
  };
  return (
    <Template>
      <Form
        name="normal_login"
        className="login-form p-10 bg-white p-md-auto br-3 br-md-0 max-w-md-full"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className="text-primary-dark">
          <p className="custom-fonts fs-4 fw-bold h-8 mt-0">
            Sign in to Pifit!
          </p>
          <p className="fs-small">
            The technology revolution is moving to the next level.
          </p>
        </div>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter email or username" },
          ]}
          className="mb-5"
        >
          <Input
            prefix={<i className="icon-email text-link fs-4" />}
            placeholder="Username / Email Id"
            size="medium"
            autoComplete="off"
            className="py-2"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" },
            // {
            //   pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            //   message: `Please enter numbers, alphabets & patterns`,
            // },
          ]}
          className="mb-1"
          hasFeedback
        >
          <Input.Password
            prefix={<i className="icon-password text-link fs-4" />}
            type="password"
            placeholder="Password"
            size="medium"
            className="py-2"
          />
        </Form.Item>

        <Form.Item className="d-flex justify-content-end mb-4 h-min">
          <Link className="text-decoration-underline" to="/forgot-password">
            Forgot password?
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button fw-bold w-full h-14"
          >
            Sign In
          </Button>

          <div className="text-center mt-7 fs-small h-0 text-primary-dark">
            Or login with
          </div>
          <AuthLogin  facebook={false} google={true} apple={false} />
        </Form.Item>
      </Form>
    </Template>
  );
};

export default Login;
