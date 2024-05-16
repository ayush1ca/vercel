import React from "react";
import LandingPageLayout from "../../components/LandingPageLayout";
import ContactUsForm from "../../components/ComponentPages/ContactUsComponent/ContactUsForm.js";
import FAQ from "../../components/FAQ";

const ContactUs = () => {
  return <LandingPageLayout>
    <ContactUsForm />
    <FAQ />
  </LandingPageLayout>;
};

export default ContactUs;
