"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope } from 'lucide-react';
import { Button } from '../ui/button.jsx';
import { Link } from 'react-router-dom';

const JOIN_FORM_URL = "https://forms.gle/zos4xc43eN3mbcSw6";

export default function GradientHero() {
  return (

    <div className="bg-background text-foreground relative w-full overflow-hidden transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="from-primary/20 via-background to-background absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"></div>
        <div className="bg-primary/5 absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"></div>

      </div>

      <div className="relative z-10 container mx-auto px-4 pt-36 pb-24 sm:px-6 lg:px-8 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-5xl">


          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-4xl tracking-tight sm:text-6xl lg:text-7xl"

          >
            <span className="text-foreground">Explore the Art of </span>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Surgery</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-muted-foreground mx-auto mt-8 max-w-3xl text-center text-lg sm:text-xl leading-relaxed"
          >
            SURSO NKUA is the first student surgical team at the National and Kapodistrian
            University of Athens — bringing together students with a shared passion for the
            surgical specialties. Through Journal Club, Meet the Experts, hands-on workshops,
            and talks with professionals in the field, we&apos;re inspiring future surgeons.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mx-auto mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              asChild
              className="h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg hover:shadow-indigo-500/25 px-8 font-medium transition-all hover:scale-105 active:scale-95"
            >
              <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer">
                Join SURSO
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full px-8 font-medium"
            >
              <Link to="/features">See Our Programs</Link>
            </Button>
          </motion.div>

          {/* Feature visual */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto mt-20 max-w-3xl"
          >
            <div className="group relative flex items-center justify-center rounded-2xl border border-border/50 bg-background/50 py-16 shadow-2xl backdrop-blur-sm transition-all hover:border-border/80">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/20 transition-transform duration-500 group-hover:scale-105">
                <Stethoscope className="h-14 w-14 text-white" />
              </div>
            </div>

            {/* Decorative glows around the visual */}
            <div className="absolute -left-10 -top-10 -z-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]"></div>
            <div className="absolute -right-10 -bottom-10 -z-10 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
