import React from "react";
import SEO from '../components/SEO';
import ContactUs1 from "../components/mvpblocks/contact-us-1";

const Support = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Support"
        description="Need help or have a question for SURSO? Reach out and we'll get back to you."
        url="/support"
      />
      <ContactUs1 />
    </div>
  );
};

export default Support;
