import { wrapperAPI } from "./wrapper";

export const ContactUsAPI = async (data) => {
  try {
    const contactUs = await wrapperAPI({
      method: "POST",
      path: `contact-us`,
      data: data,
    });
    return contactUs;
  } catch (error) {
    throw error;
  }
};

export const faqAPI = async () => {
  try {
    const contactUs = await wrapperAPI({
      method: "POST",
      path: `faq-support`,
      isTokenRequired: false,
    });
    return contactUs;
  } catch (error) {
    throw error;
  }
};
