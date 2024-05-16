import { wrapperAPI } from "./wrapper";

export const loginAPI = async (data) => {
  try {
    const login = await wrapperAPI({
      method: "POST",
      path: `login`,
      data: data,
      isTokenRequired: false,
    });
    return login;
  } catch (error) {
    throw error;
  }
};

export const logOutAPI = async (data) => {
  try {
    const logout = await wrapperAPI({
      method: "POST",
      path: `logout`,
      data: data,
      isTokenRequired: true,
    });
    return logout;
  } catch (error) {
    throw error;
  }
};




export const forgotPasswordAPI = async (data) => {
  try {
    const forgotPassword = await wrapperAPI({
      method: "POST",
      path: `forgot-password`,
      data: data,
      isTokenRequired: false,
    });
    return forgotPassword;
  } catch (error) {
    throw error;
  }
};

export const verifyOtpAPI = async (data) => {
  try {
    const verifyOtp = await wrapperAPI({
      method: "POST",
      path: `verify-otp`,
      data: data,
      isTokenRequired: false,
    });
    return verifyOtp;
  } catch (error) {
    throw error;
  }
};

export const resetPasswordAPI = async (data) => {
  try {
    const resetPassword = await wrapperAPI({
      method: "POST",
      path: `reset-password`,
      data: data,
      isTokenRequired: false,
    });
    return resetPassword;
  } catch (error) {
    throw error;
  }
};

export const resendOtpAPI = async (data) => {
  try {
    const resendOtp = await wrapperAPI({
      method: "POST",
      path: `resend-otp`,
      data: data,
      isTokenRequired: false,
    });
    return resendOtp;
  } catch (error) {
    throw error;
  }
};

export const googleLoginAPI = async (data) => {
  try {
    const googleLogin = await wrapperAPI({
      method: "POST",
      path: `google-login`,
      data: data,
      // isTokenRequired: false,
    });
    return googleLogin;
  } catch (error) {
    throw error;
  }
};
