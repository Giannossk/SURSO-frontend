import React from 'react';
import SEO from '../components/SEO';
import ContactBlock from "../components/mvpblocks/contact-us-1";

const Contact = () => {
    return (
        <div className="pt-20">
            <SEO
                title="Contact Us"
                description="Get in touch with SURSO — the Surgical Society of Medical Students at the National and Kapodistrian University of Athens."
                url="/contact"
            />
            <ContactBlock />
        </div>
    );
};

export default Contact;
