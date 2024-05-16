import { wrapperAPI } from "./wrapper";

export const TermsConditionsAPI = async (data) => {
  try {
    const TermsConditions = await wrapperAPI({
      method: "POST",
      path: `terms-conditions`,
      data: data,
    });
    return TermsConditions;
  } catch (error) {
    throw error;
  }
};
