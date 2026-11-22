"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { GraduationCap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type TeamMember = {
  name: string;
  /** shown under the name, e.g. department */
  role: string;
  /** used by the filter tabs */
  group: string;
  image: string;
  /** optional leadership title shown as a sticker on the photo */
  title?: string;
};

type TeamProps = {
  members: TeamMember[];
  kicker?: string;
  heading?: string;
  /** filter tab order; defaults to the order groups appear in `members` */
  groups?: string[];
  className?: string;
  id?: string;
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const Team = ({
  members,
  kicker = "Our team",
  heading = "Meet the minds behind our college",
  groups,
  className,
  id,
}: TeamProps) => {
  const tabs = ["All", ...(groups ?? Array.from(new Set(members.map((m) => m.group))))];
  const [active, setActive] = useState("All");
  const visible = active === "All" ? members : members.filter((m) => m.group === active);

  return (
    <MotionConfig reducedMotion="user">
      <section id={id} className={className}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:gap-12">
          {/* heading */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
          >
            <Badge
              variant="outline"
              className="font-ui h-auto -rotate-2 rounded-md border-2 border-ink bg-white px-3 py-1 text-xs font-bold tracking-widest uppercase shadow-hard-sm"
            >
              {kicker}
            </Badge>
            <h2 className="font-display text-5xl leading-none tracking-tight text-foreground uppercase sm:text-7xl">
              {heading}
            </h2>
          </motion.div>

          {/* filter tabs */}
          <div role="tablist" aria-label="Filter by department" className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => {
              const count = tab === "All" ? members.length : members.filter((m) => m.group === tab).length;
              const isActive = tab === active;
              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab)}
                  className={cn(
                    "font-ui flex items-center gap-2 rounded-md border-2 border-ink px-3 py-1.5 text-xs font-bold uppercase transition hover:-translate-y-0.5 sm:text-sm",
                    isActive ? "bg-ink text-white shadow-hard-sm" : "bg-white text-ink hover:bg-secondary",
                  )}
                >
                  {tab}
                  <span
                    className={cn(
                      "rounded-full px-1.5 text-[10px] leading-4",
                      isActive ? "bg-accent text-ink" : "bg-secondary text-muted-foreground",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* grid */}
          <motion.div layout className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visible.map((member, index) => (
                <motion.figure
                  key={member.name}
                  layout
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: EASE }}
                  className={cn(
                    "group relative flex flex-col rounded-xl border-2 border-ink bg-white p-2 shadow-hard transition-[rotate,translate] duration-300 hover:-translate-y-1.5 hover:rotate-0",
                    index % 2 ? "rotate-1" : "-rotate-1",
                  )}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 260px, (min-width: 640px) 33vw, 50vw"
                      className="object-cover object-top grayscale-0 transition-all duration-500 group-hover:scale-105 group-hover:grayscale"
                    />
                    {member.title && (
                      <span className="font-ui absolute top-2 left-2 inline-flex items-center gap-1 rounded border-2 border-ink bg-destructive px-2 py-0.5 text-[10px] font-bold text-white uppercase shadow-hard-sm">
                        <GraduationCap size={12} aria-hidden="true" />
                        {member.title}
                      </span>
                    )}
                  </div>
                  <figcaption className="flex flex-1 flex-col items-center gap-2 px-1 pt-3 pb-1 text-center">
                    <h3 className="font-display text-lg leading-tight tracking-wide text-foreground uppercase sm:text-xl">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="font-ui border-ink/20 text-[10px] tracking-wide uppercase sm:text-[11px]">
                      {member.role}
                    </Badge>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default Team;
