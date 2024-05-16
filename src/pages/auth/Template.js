import React from "react";
import Logo from "../../assets/images/Pifit-white.svg";
import WhiteLines from "../../assets/images/while-lines.png";
import BlueLines from "../../assets/images/blue-lines-bg.jpg";
import { useNavigate } from "react-router-dom";
import {Row,Col} from 'antd'

const Template = (props) => {
  const { children } = props;

  const navigate = useNavigate();
  return (
    <div
      className="h-lg-full p-md-0 p-8"
      style={{ height: "calc(100vh - 4em)" }}
    >
      <div className="d-flex d-lg-block h-lg-screen h-full border-md-0 border-2-transparent br-5">
        {/** First Block */}
        <div className="position-relative bg-primary-dark text-white w-lg-full h-lg-68 h-md-max w-half border-left-2 br-tl-lg-0 br-bl-lg-0 br-tl-3 br-bl-3">
          <img
            src={WhiteLines}
            className="position-absolute w-full img-md-cover h-60 h-lg-full"
            alt=""
          />
          <div className="d-flex flex-column h-md-half h-full pl-md-0"  >
            <img
              src={Logo}
              alt="img"
              onClick={()=>navigate('/')}
              className="w-36  w-md-32 mb-auto mb-md-5 pt-8 mx-md-auto pl-md-0 pl-8 cursor-pointer z-10"
            />
            <div className="custom-fonts w-68 w-lg-60 w-md-auto fs-8 fs-xl-5 fs-lg-4 fs-md-3 fw-bold text-md-center lh-3 pl-3 pb-3 px-md-2 my-md-8">
              "We exist to empower to Create{" "}
              <span className="text-yellow-dark">Universal Loyalty Platform!</span>"
            </div>
          </div>
        </div>

        {/** Second Block */}
        <div className="position-relative d-flex justify-content-center align-items-center overflow-lg-auto w-half w-lg-full">
          <img
            src={BlueLines}
            className="d-flex justify-content-center position-absolute d-md-none h-full w-full m-0"
            alt=""
          />
          <Row className='z-1' justify="center">
            <Col span={24}>
              <div className="py-md-0 py-8">{children}</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Template;