import { wrapperAPI } from "./wrapper";

export const buyCouponAPI = async (data) => {
  try {
    const buyCoupon = await wrapperAPI({
      method: "POST",
      path: `coupons/buy`,
      data: data,
    });
    return buyCoupon;
  } catch (error) {
    throw error;
  }
};