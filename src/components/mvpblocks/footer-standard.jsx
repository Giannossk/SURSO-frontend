"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LegalModal } from "../ui/legal-modal";
import { legalContent } from "../../data/legalContent";
import toast from "react-hot-toast";

import { Stethoscope } from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const data = () => ({
  navigation: {
    explore: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
    ],

    company: [
      { name: "About", href: "/about-us" },
      { name: "Contact", href: "/contact" },
      { name: "Support", href: "/support" },
    ],

    programs: [
      { name: "Journal Club", href: "/features" },
      { name: "Meet the Experts", href: "/features" },
      { name: "Ready, Set, Scrub In", href: "/features" },
      { name: "Workshops & Talks", href: "/features" },
    ],

    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },

  socialLinks: [
    { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/surso_uoa/" },
    { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100092672904737" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://gr.linkedin.com/in/surgical-society-nkua-b815322a6" },
    { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@surgicalsocietynkua" },
    { icon: FaTiktok, label: "TikTok", href: "https://www.tiktok.com/@surso_nkua" },
  ],

  bottomLinks: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
});

const sectionTitles = {
  explore: "Explore",
  company: "Company",
  programs: "Programs",
  legal: "Legal",
};

export default function FooterStandard() {
  const currentYear = new Date().getFullYear();

  const [activeModal, setActiveModal] = useState(null);

  const [email, setEmail] = useState("");

  const handleLegalClick = (e, href) => {
    e.preventDefault();

    const key = href.replace("/", "");

    if (legalContent[key]) {
      setActiveModal(key);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    toast.success("Successfully Subscribed!");

    setEmail("");
  };

  return (
    <footer className="mt-20 w-full">
      <div className="animate-energy-flow via-primary h-px w-full bg-gradient-to-r from-transparent to-transparent" />

      <div className="relative w-full px-5">
        {/* Top Section */}
        <div className="container m-auto grid grid-cols-1 gap-12 py-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-3">
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 shadow-lg">
                  <Stethoscope className="h-5 w-5 text-white" />
                </div>

                <div className="absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full bg-green-400"></div>
              </div>

              <span className="text-xl font-semibold">
                SURSO
              </span>
            </a>

            <p className="text-muted-foreground max-w-md">
              SURSO is the Surgical Society of Medical Students at the National and
              Kapodistrian University of Athens — inspiring future surgeons through
              workshops, talks, and hands-on experience with the surgical specialties.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                {data().socialLinks.map(({ icon, label, href }) => (
                    <Button
                      key={label}
                      size="icon"
                      variant="outline"
                      asChild
                      className="hover:bg-primary dark:hover:bg-primary !border-primary/30 cursor-pointer shadow-none transition-all duration-500 hover:scale-110 hover:-rotate-12 hover:text-white hover:shadow-md"
                    >
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                        {React.createElement(icon, { className: "h-4 w-4" })}
                      </a>
                    </Button>
                  ))}
              </div>
            </div>

            {/* Newsletter */}
            <form
              onSubmit={handleSubscribe}
              className="w-full max-w-md space-y-3"
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium"
              >
                Subscribe to our newsletter
              </label>

              <div className="relative w-full">
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="h-12 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <Button
                  type="submit"
                  className="absolute top-1.5 right-1.5 cursor-pointer transition-all duration-300 hover:px-10"
                >
                  Subscribe
                </Button>
              </div>

              <p className="text-muted-foreground text-xs">
                Get updates on Journal Club, Meet the Experts, workshops, and more.
              </p>
            </form>

            <h1 className="from-muted-foreground/15 bg-gradient-to-b bg-clip-text text-5xl font-extrabold text-transparent lg:text-7xl">
              SURSO
            </h1>
          </div>

          {/* Navigation */}
          <div className="grid w-full grid-cols-2 items-start justify-between gap-8 px-5 lg:col-span-3">
            {["explore", "company", "programs", "legal"].map((section) => (
              <div key={section} className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                  {sectionTitles[section]}
                </h4>

                <ul className="space-y-2">
                  {data().navigation[section].map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={(e) => {
                          if (section === "legal") {
                            handleLegalClick(e, item.href);
                          }
                        }}
                        className="text-xs text-slate-600 hover:text-rose-600 transition-colors cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

               {/* Bottom */}
        <div className="animate-rotate-3d via-primary h-px w-full bg-gradient-to-r from-transparent to-transparent" />

        <div className="text-muted-foreground container m-auto flex flex-col items-center justify-between gap-4 p-4 text-xs md:flex-row md:px-0 md:text-sm">
          <p>
            &copy; {currentYear} SURSO | All rights reserved
          </p>

          <div className="flex items-center gap-4">
            {data().bottomLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleLegalClick(e, href)}
                className="hover:text-rose-600 transition-colors cursor-pointer"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Legal Modal */}
      <LegalModal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={activeModal ? legalContent[activeModal].title : ""}
        content={activeModal ? legalContent[activeModal].content : ""}
      />

      {/* Animation Styles */}
      <style>{`
        .animate-rotate-3d {
          animation: rotate3d 8s linear infinite;
        }

        .animate-energy-flow {
          animation: energy-flow 4s linear infinite;
          background-size: 200% 100%;
        }

        @keyframes rotate3d {
          0% {
            transform: rotateY(0);
          }

          100% {
            transform: rotateY(360deg);
          }
        }

        @keyframes energy-flow {
          0% {
            background-position: -100% 0;
          }

          100% {
            background-position: 100% 0;
          }
        }
      `}</style>
    </footer>
  );
}
