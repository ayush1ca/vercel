import React from "react";
import CustomTitle from "../../../CustomTitle";
import { Button, Form, Input, InputNumber, Space, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ContactUsAPI } from "../../../../service/contact-us";
import "./ContactUsForm.scss";

const ContactUsForm = () => {
  const [form] = Form.useForm();

  const ContactUsAPICall = async (data) => {
    try {
      const ContactUsData = await ContactUsAPI(data);
      message.success(ContactUsData?.meta?.message);
    } catch (error) {
      message.error(error?.meta?.message);
    }
  };

  const onFinish = (values) => {
    const data = {
      name: values?.name,
      email: values?.email,
      phone: values?.phone,
      message: values?.message,
    };
    ContactUsAPICall(data);
    form.resetFields();
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    const cleanedValue = value.replace(/\D/g, "");
    console.log(cleanedValue);
  };

  return (
    <>
      <div className="custom_contact_us_height position-relative d-lg-grid d-flex justify-content-evenly align-items-center bg-primary-lighter pt-lg-5 pt-20 pb-10 contact_us_image">
        <div className="align-self-center w-md-auto mx-md-auto mt-md-5 z-1">
          <CustomTitle
            title="Let's Connect! And make your Brand and Business stand out!"
            css="text-primary-dark text-lg-center text-start text-md-center w-65 w-md-auto mx-sm-3 mx-md-5 mx-lg-auto fs-8 fs-lg-7 fs-md-6 fs-sm-5"
          />
          <div className="text-secondary-light text-lg-center text-start w-60 w-md-auto mx-sm-5 mx-lg-auto py-4 lh-3 fs-xxl-2 fs-xl-1">
            <p>
              Please use this form to Contact Us and we will get back to you
              soon as possible!
            </p>
          </div>
        </div>

        <div className="z-0">
          <Form
            form={form}
            wrapperCol={{ span: 24 }}
            layout="horizontal"
            autoComplete="off"
            className="mx-lg-auto bg-white h-fit p-8 br-3 w-md-56 w-lg-58 w-64 z-1"
            onFinish={onFinish}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="name"
              rules={[{ required: true }]}
              className="custom_input"
            >
              <Input
                prefix={<i className="icon-brand text-link fs-3" />}
                placeholder="Brand/ Advertisers/ Merchant name"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please enter phone number" },
                {
                  pattern: /^[0-9]{10}$/,
                  message: `Please enter valid phone number`,
                },
              ]}
              className="custom_input"
            >
              <Space.Compact className="w-full">
                <Input
                  prefix={<i className="icon-phone text-link fs-3" />}
                  value="+1"
                  className="w-24"
                  style={{pointerEvents: "none"}}
                />
                <Input
                  placeholder="Phone number"
                  onChange={handleInputChange}
                  maxLength={10}
                  className="pl-0 w-full"
                />
              </Space.Compact>
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please enter valid email",
                },
              ]}
              className="custom_input"
            >
              <Input
                prefix={<i className="icon-email text-link fs-3" />}
                placeholder="Email address"
              />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[{ required: true, whitespace: true, message: "Please enter message"}]}
              className="custom_input"
            >
              <TextArea
                placeholder="Write your message here"
                rows={4}
                className="py-3"
              />
            </Form.Item>

            <Form.Item className="mb-0">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="float-right"
              >
                <span className="fs-small px-2 fw-bold">Send Message</span>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
