import React from "react";
import { SparklesCore } from "../ui/sparkles";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

const socialLinks = [
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/surso_uoa/" },
  { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100092672904737" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://gr.linkedin.com/in/surgical-society-nkua-b815322a6" },
  { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@surgicalsocietynkua" },
  { icon: FaTiktok, label: "TikTok", href: "https://www.tiktok.com/@surso_nkua" },
];

export default function SparklesLogo() {
  return (
    <div className="w-full overflow-hidden bg-background pt-32 pb-16">
      <div className="relative z-20 mx-auto w-full max-w-4xl px-4">
        <div className="text-center text-4xl md:text-5xl font-bold text-foreground">
          <span className="text-rose-600">Follow @surso_uoa.</span>
          <br className="md:hidden" />
          <span className="md:ml-3">Join the community.</span>
          <br />
          <br />
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-border/50 text-foreground/70 transition-all hover:-rotate-12 hover:scale-110 hover:border-primary hover:text-primary"
            >
              {React.createElement(icon, { className: "h-6 w-6" })}
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10 -mt-40 h-[32rem] md:h-[40rem] w-full overflow-hidden [mask-image:radial-gradient(circle,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom,#e60a64,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-background">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={300}
          particleColor="hsl(var(--foreground))"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(circle,white,transparent_85%)]"
        />
      </div>
    </div>
  );
}
