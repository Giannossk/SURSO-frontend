"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Spotlight } from "../../components/ui/spotlight";
import { BorderBeam } from "../../components/ui/border-beam";
import { CardHoverEffect } from "../ui/pulse-card";
import {
  Users,
  Heart,
  Microscope,
  Stethoscope,
  Rocket,
  Target,
} from "lucide-react";

const iconComponents = {
  Users: Users,
  Heart: Heart,
  Microscope: Microscope,
  Stethoscope: Stethoscope,
};

const defaultValues = [
  {
    title: "Curiosity",
    description:
      "We dig into real surgical research together in Journal Club, asking questions before we have all the answers.",
    icon: "Microscope",
  },
  {
    title: "Hands-On Learning",
    description:
      "From Ready, Set, Scrub In to our regular workshops, we believe surgical skill starts with doing, not just reading.",
    icon: "Stethoscope",
  },
  {
    title: "Mentorship",
    description:
      "Meet the Experts connects us directly with surgical professionals who've walked the path we're on.",
    icon: "Users",
  },
  {
    title: "Community",
    description:
      "SURSO is a space for NKUA students who share one thing: a passion for surgery.",
    icon: "Heart",
  },
];

export default function AboutUs1() {
  const aboutData = {
    title: "About SURSO",
    subtitle:
      "The first student surgical team at NKUA — exploring the art of surgery, together.",
    mission:
      "SURSO NKUA brings together National and Kapodistrian University of Athens medical students who share a passion for the surgical specialties. Our mission is to help students explore the art of surgery through group activities, hands-on workshops, and direct interaction with professionals in the field — from Journal Club discussions to our Meet the Experts interview series.",
    vision:
      "Inspiring future surgeons. We want every student with a curiosity about surgery to find a community, mentors, and real hands-on experience — long before they have to choose a specialty.",
    values: defaultValues,
    className: "relative overflow-hidden py-20",
  };

  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative w-full overflow-hidden pt-20">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.08) 0, hsla(341, 100%, 55%, 0.04) 50%, hsla(336, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.06) 0, hsla(327, 100%, 85%, 0.06) 80%, transparent 100%)"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {aboutData.title}
          </h1>
          <p className="text-muted-foreground mt-6 text-xl">
            {aboutData.subtitle}
          </p>
        </motion.div>

        <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 grid gap-12 md:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group border-border/50 relative block overflow-hidden rounded-2xl border bg-card/80 p-10 backdrop-blur-xl dark:bg-card/50"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="via-primary/40 from-transparent to-transparent"
              />
              <div className="from-primary/20 to-primary/5 mb-6 inline-flex aspect-square h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br backdrop-blur-sm">
                <Rocket className="text-primary h-8 w-8" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {aboutData.mission}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group border-border/50 relative block overflow-hidden rounded-2xl border bg-card/80 p-10 backdrop-blur-xl dark:bg-card/50"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-blue-500/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Target className="h-8 w-8 text-blue-500" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <h2 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            variants={cardContainerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            {aboutData.values.map((value, index) => {
              const IconComponent = iconComponents[value.icon];
              return (
                <motion.div
                  key={value.title}
                  variants={cardItemVariants}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={
                      index === 0
                        ? "purple"
                        : index === 1
                          ? "blue"
                          : index === 2
                            ? "amber"
                            : "rose"
                    }
                    glowEffect
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
