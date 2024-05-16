import { wrapperAPI } from "./wrapper";

export const PrivacyPolicyAPI = async (data) => {
  try {
    const privacyPolicy = await wrapperAPI({
      method: "POST",
      path: `privacy-policy`,
      data: data,
    });
    return privacyPolicy;
  } catch (error) {
    throw error;
  }
};
