import React, { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate, useLocation ,useHistory} from "react-router-dom";
import Template from "../Template";
import { resendOtpAPI, verifyOtpAPI } from "../../../service/auth";
import { useSelector } from "react-redux";
import "./VerifyCode.scss";

const VerifyCode = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [inputValues, setInputValues] = useState(["", "", "", ""]);
  const userId = useSelector((state) => state?.counter?.userData?.user?.id);

  const verifyOtpCall = async (data) => {
    try {
      const response = await verifyOtpAPI(data);
      message.success(response?.meta?.message);
      navigate("/reset-password");
    } catch (error) {
      message.error(error?.meta?.message);
    }
  };

  const handleInputChange = (index, value) => {
    const cleanedValue = value.replace(/\D/g, "");

    const updatedValues = [...inputValues];
    updatedValues[index] = cleanedValue.slice(0, 1);
    setInputValues(updatedValues);

    if (cleanedValue.length > 0 && index < inputValues.length - 1) {
      const nextInput = document.querySelector(
        `input[data-index="${index + 1}"]`
      );
      nextInput?.focus();
    } else if (index > 0 && value === "") {
      const previousInput = document.querySelector(
        `input[data-index="${index - 1}"]`
      );
      previousInput?.focus();
    }
  };

  const onFinish = () => {
    const isValid = inputValues.every((value) => /^\d$/.test(value));
    const otp = inputValues.join().replaceAll(",", "");

    const data = {
      user_id: userId,
      otp: otp,
      type: "forgot_pass",
    };

    if (isValid) {
      verifyOtpCall(data);
    } else {
      message.error(
        "Invalid input. Please enter a single digit in each field."
      );
    }
  };

  const resendOtp = async (data) => {
    try {
      const response = await resendOtpAPI(data);
      message.success(response?.meta?.message);
    } catch (error) {
      message.error(error?.meta?.message);
    }
  };
  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, []);
  return (
    <Template>
      <Form
        name="normal_login"
        className="login-form bg-white p-10 br-3 br-md-0 w-60 w-md-full"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Link to="/forgot-password" className="text-primary-dark">
          <i className="icon-back fs-3" />
        </Link>
        <div className="text-primary-dark">
          <p className="custom-fonts fs-4 mb-0 fw-bold mt-0">
            Check your email!
          </p>
          <p className="fs-small lh-1 mb-0">
            We have sent a verification code to
          </p>
          <p className="fs-small fw-bold mt-3 lh-1">{location?.state?.email}</p>
        </div>
        <Form.Item name="username" className="mt-6">
          <div className="d-grid grid-columns-4 column-gap">
            <Input
              className="h-14 bg-placeholder border-none fs-4 text-center custom-fonts"
              value={inputValues[0]}
              onChange={(e) => handleInputChange(0, e.target.value)}
              data-index={0}
              rules={{ required: true }}
            />
            <Input
              className="h-14 bg-placeholder border-none fs-4 text-center custom-fonts"
              value={inputValues[1]}
              onChange={(e) => handleInputChange(1, e.target.value)}
              data-index={1}
              rules={{ required: true }}
            />
            <Input
              className="h-14 bg-placeholder border-none fs-4 text-center custom-fonts"
              value={inputValues[2]}
              onChange={(e) => handleInputChange(2, e.target.value)}
              data-index={2}
              rules={{ required: true }}
            />
            <Input
              className="h-14 bg-placeholder border-none fs-4 text-center custom-fonts"
              value={inputValues[3]}
              onChange={(e) => handleInputChange(3, e.target.value)}
              data-index={3}
              rules={{ required: true }}
            />
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button w-full h-14 fw-bold"
          >
            Verify Code
          </Button>
        </Form.Item>

        <Form.Item className="text-center mb-0 text-primary-dark">
          Didn't receive the email?{" "}
          <Link
            to="#"
            className="text-decoration-underline fw-bold"
            onClick={() => resendOtp({ user_id: userId })}
          >
            Resend Code
          </Link>
        </Form.Item>
      </Form>
    </Template>
  );
};

export default VerifyCode;
