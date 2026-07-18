"use client";
import { useState, useEffect, isValidElement, cloneElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { CalendarClock, Users, ClipboardCheck } from "lucide-react";
const features = [
  {
    step: "Step 1",
    title: "Plan & Organize",
    content:
      "Our team lines up dates, speakers, and venues for Journal Club, Meet the Experts, and workshops well ahead of time.",
    icon: <CalendarClock className="text-primary h-6 w-6" />,
  },
  {
    step: "Step 2",
    title: "Coordinate the Team",
    content:
      "Roles are assigned across our organizers so everyone knows what they own, from logistics to hosting.",
    icon: <Users className="text-primary h-6 w-6" />,
  },
  {
    step: "Step 3",
    title: "Run & Follow Up",
    content:
      "We check members in, run the activity, and follow up so nothing falls through the cracks.",
    icon: <ClipboardCheck className="text-primary h-6 w-6" />,
  },
];
export default function FeatureSteps() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (4000 / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [progress]);
  return (
    <div className={"p-8 md:p-12"}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h2 className="font-geist text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              How We Run Our Activities
            </h2>
            <p className="text-foreground font-geist text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              From planning to follow-up, here&apos;s how SURSO&apos;s team brings
              it all to life.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)",
            }}></div>
        </div>
        <hr className="bg-foreground/30 mx-auto mb-10 h-px w-1/2" />

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10">
          <div className="order-2 space-y-8 md:order-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3, x: -20 }}
                animate={{
                  opacity: index === currentFeature ? 1 : 0.3,
                  x: 0,
                  scale: index === currentFeature ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}>
                <motion.div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 md:h-14 md:w-14",
                    index === currentFeature
                      ? "border-primary bg-primary/10 text-primary scale-110 [box-shadow:0_0_15px_rgba(192,15,102,0.3)]"
                      : "border-muted-foreground bg-muted",
                  )}>
                  {feature.icon}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "border-primary/20 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent relative order-1 h-[200px] overflow-hidden rounded-xl border [box-shadow:0_5px_30px_-15px_rgba(192,15,102,0.3)] md:order-2 md:h-[300px] lg:h-[400px]",
            )}>
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}>
                      <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/20 md:h-32 md:w-32">
                        {isValidElement(feature.icon) &&
                          cloneElement(feature.icon, {
                            className: "h-10 w-10 text-white md:h-14 md:w-14",
                          })}
                      </div>

                      <div className="bg-background/80 absolute bottom-4 left-4 rounded-lg p-2 backdrop-blur-sm">
                        <span className="text-primary text-xs font-medium">
                          {feature.step}
                        </span>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
