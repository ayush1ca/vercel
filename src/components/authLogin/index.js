import React, { useCallback } from "react";
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
  LoginSocialApple,
} from "reactjs-social-login";

import GoogleLogo from "../../assets/images/LoginPage/google.svg";
import FacebookLogo from "../../assets/images/LoginPage/facebook.svg";
import AppleLogo from "../../assets/images/LoginPage/apple.svg";
import { googleLoginAPI } from "../../service/auth";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const LoginAuth = (props) => {
  const navigate = useNavigate();
  // Handle the Google login response
  const handleGoogleLogin = async (access_token) => {
    const data = { token: access_token, device: "web" };
    try {
      const loginData = await googleLoginAPI(data);
      message.success(loginData?.meta?.message);
      Cookies.set("token", loginData?.data?.token, { expires: 7 });
      Cookies.set("user", JSON.stringify(loginData?.data?.user,{ expires: 7 }));
      window.location.replace("/gift-card-library");
      return loginData;
    } catch (error) {
      message.error(error?.meta?.message);
    }
    // Redirect the user to the desired page after successful login
  };

  const handleFacebookLogin = (user) => {
    // Handle the Facebook login response
    // Redirect the user to the desired page after successful login
  };

  const handleAppleLogin = (user) => {
    // Handle the Apple login response
    // Redirect the user to the desired page after successful login
  };

  const onLoginStart = useCallback((user) => {
    // alert("login start");
    // handleGoogleLogin(user);
    // console.log(user);
  }, []);

  const REDIRECT_URI = "https://localhost:3000/gift-card-library";

  return (
    <div className="d-flex justify-content-center mt-5 fs-5 h-0 mb-1">
      {!props.facebook ? (
        <img src={FacebookLogo} />
        // <FacebookLogo className="mx-1 bg-placeholder text-link p-1 br-4" />
      ) : (
        <></>
        // <LoginSocialFacebook
        // appId={process.env.REACT_APP_FB_APP_ID || ''}
        // fieldsProfile={
        //   'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
        // }
        // onLoginStart={onLoginStart}
        // onLogoutSuccess={onLogoutSuccess}
        // redirect_uri={REDIRECT_URI}
        // onResolve={({ provider, data }) => {

        // }}
        // onReject={err => {
        //   console.log(err);
        // }}
        // >
        //   <FaFacebook className="mx-1 bg-placeholder text-link p-1 br-4 cursor-pointer" />
        // </LoginSocialFacebook>
      )}
      {!props.google ? (
        <img src={GoogleLogo} />
        // <GoogleLogo className="mx-1 bg-placeholder p-1 br-4" />
      ) : (
        <LoginSocialGoogle
          isOnlyGetToken
          client_id={process.env.REACT_APP_GG_APP_ID}
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          typeResponse="accessToken"
          onResolve={({ provider, data }) => {
            handleGoogleLogin(data?.access_token);
          }}
          onReject={(err) => {
            console.log("err",err);
          }}
        >
          <img src={GoogleLogo} className="cursor-pointer"/>
          {/* <GoogleLogo className="mx-1 bg-placeholder p-1 br-4 cursor-pointer" /> */}
        </LoginSocialGoogle>
      )}
      {!props.apple ? (
        <img src={AppleLogo} />
        // <AppleLogo className="mx-1 bg-placeholder p-1 br-4 text-secondary-light" />
      ) : (
        <></>
        // <LoginSocialApple
        //   client_id={process.env.REACT_APP_APPLE_ID || ''}
        //   scope={'name email'}
        //   redirect_uri={REDIRECT_URI}
        //   onLoginStart={onLoginStart}
        //   onResolve={({ provider, data }) => {

        //   }}
        //   onReject={err => {
        //     console.log(err);
        //   }}
        // >
        //   <FaApple className="mx-1 bg-placeholder p-1 br-4 text-secondary-light cursor-pointer" />
        // </LoginSocialApple>
      )}
    </div>
  );
};
export default LoginAuth;
