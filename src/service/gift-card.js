import "./wrapper";
import { wrapperAPI } from "./wrapper";

export const getGiftCardLibraryData = async (data,page) => {
  try {
    const response = await wrapperAPI({
      method: "POST",
      path: `coupons${page?`?page=${page}`:''}`,
      data: data,
      isTokenRequired: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCategories = async (data) => {
  try {
    const response = await wrapperAPI({
      method: "POST",
      path: `all-categories`,
      data: data,
      isTokenRequired: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
