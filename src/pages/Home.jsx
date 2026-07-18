import React from 'react';
import SEO from '../components/SEO';
import Hero from "../components/mvpblocks/gradient-hero";
import Features from "../components/mvpblocks/feature-2";
import FAQ from "../components/mvpblocks/faq-3";
import Sparkles from "../components/mvpblocks/sparkles-logo";

const Home = () => {
    return (
        <>
            <SEO
                title="SURSO NKUA — Surgical Society of Medical Students"
                description="SURSO is the Surgical Society of Medical Students at the National and Kapodistrian University of Athens — inspiring future surgeons through Journal Club, Meet the Experts, workshops, and hands-on experience with the surgical specialties."
                url="/"
            />
            <Hero />
            <Features />
            <FAQ />
            <Sparkles />
        </>
    );
};

export default Home;
