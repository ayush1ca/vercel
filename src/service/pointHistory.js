import "./wrapper";
import { wrapperAPI } from "./wrapper";

export const PointHistoryAPI = async (data, page) => {
  try {
    const response = await wrapperAPI({
      method: "POST",
      path: `points/history${page ? `?page=${page}` : ""}`,
      data: data,
      isTokenRequired: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
