import React from 'react';
import SEO from '../components/SEO';
import Feature2 from "../components/mvpblocks/feature-2";
import Feature3 from "../components/mvpblocks/feature-3";

const Features = () => {
    return (
        <div className="pt-20">
            <SEO
                title="Our Programs"
                description="Explore SURSO's recurring programs — Journal Club, Meet the Experts, Ready Set Scrub In, and regular workshops and talks for medical students passionate about surgery."
                url="/features"
            />
            <Feature2 />
            <Feature3 />
        </div>
    );
};

export default Features;
