import React from 'react';
import SEO from '../components/SEO';
import AboutBlock from "../components/mvpblocks/about-us-1";

const About = () => {
    return (
        <div className="pt-20">
            <SEO
                title="About Us"
                description="SURSO NKUA is the first student surgical team at the National and Kapodistrian University of Athens, bringing together medical students with a shared passion for the surgical specialties."
                url="/about-us"
            />
            <AboutBlock />
        </div>
    );
};

export default About;
