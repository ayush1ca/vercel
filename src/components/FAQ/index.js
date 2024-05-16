import React, { useEffect, useState } from "react";
import CustomTitle from "../CustomTitle";
import { Collapse, message } from "antd";
import "./FAQ.scss";
import { faqAPI } from "../../service/contact-us";

const { Panel } = Collapse;
const FAQ = () => {
  const [faqData, setFaqData] = useState([]);

  const faqAPICall = async () => {
    try {
      const data = await faqAPI();

      setFaqData(data.data.faq);
    } catch (error) {
      message.error(error?.meta?.message);
    }
  };

  useEffect(() => {
    faqAPICall();
  }, []);

  return (
    <div className="mt-8 mb-12">
      <div className="d-md-block d-flex justify-content-evenly my-8">
        <div className="w-fit text-center mx-sm-3 mx-lg-5 mb-lg-5">
          <CustomTitle
            title="Frequently Asked Questions"
            css="text-primary-dark fs-9 fs-lg-6 fs-md-5 w-md-auto"
          />
          <p className="py-4 lh-3 mb-md-0 w-64 w-md-auto mx-auto text-secondary-light">
            We understand that when you have questions, you want answers quickly
            and easily. So get the information you need with our FAQ section.
          </p>
        </div>
      </div>
      <Collapse
        size="middle"
        accordion
        defaultActiveKey={["0"]}
        className="w-half w-lg-auto mx-lg-5 mx-auto"
      >
        {faqData.map((item, index) => (
          <Panel
            header={item.question}
            className="fw-bold text-primary-dark"
            key={index}
          >
            <p className="fw-lighter text-secondary-light">{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;
