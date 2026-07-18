import {
  Microscope,
  Mic2,
  Stethoscope,
  Presentation,
} from "lucide-react";
import { cn } from "../../lib/utils";
// Create feature data arrays for left and right columns
const leftFeatures = [
  {
    icon: Microscope,
    title: "Journal Club",
    description:
      "Our recurring discussion group where we dig into current surgical research together.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: Mic2,
    title: "Meet the Experts",
    description:
      "An ongoing interview and panel series with real surgical professionals — now in its 7th volume.",
    position: "left",
    cornerStyle: "sm:-translate-x-4 sm:rounded-tr-[2px]",
  },
];
const rightFeatures = [
  {
    icon: Stethoscope,
    title: "Ready, Set, Scrub In",
    description:
      "A hands-on workshop where you practice real surgical skills in a guided, beginner-friendly setting.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: Presentation,
    title: "Workshops & Talks",
    description:
      "Regular sessions and talks that bring you closer to the surgical specialties.",
    position: "right",
    cornerStyle: "sm:translate-x-4 sm:rounded-tl-[2px]",
  },
];
// Feature card component
const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div>
      <div
        className={cn(
          "relative rounded-2xl px-4 pt-4 pb-4 text-sm",
          "bg-secondary/50 ring-border ring",
          feature.cornerStyle,
        )}>
        <div className="text-primary mb-3 text-[2rem]">
          <Icon />
        </div>
        <h2 className="text-foreground mb-2.5 text-2xl">{feature.title}</h2>
        <p className="text-muted-foreground text-base text-pretty">
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};
export default function Feature3() {
  return (
    <section className="pt-20 pb-8" id="features">
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="bg-secondary text-foreground ring-border relative mx-auto mb-4.5 w-fit rounded-full rounded-bl-[2px] px-4 py-2 text-sm ring">
              <span className="relative z-1 flex items-center gap-2">
                Programs
              </span>
              <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r"></span>
              <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsl(var(--primary)/0.25)_0%,transparent_100%)]"></span>
            </div>
            <h2 className="text-foreground mb-2 text-center text-2xl sm:mb-2.5 md:text-[2rem]">
              Our Programs
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[18rem] text-center text-pretty">
              The recurring activities that bring SURSO&apos;s community
              together.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
