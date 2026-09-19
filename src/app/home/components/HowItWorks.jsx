"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiBarChart2, FiMonitor } from "react-icons/fi";
import { LuShoppingBasket } from "react-icons/lu";

import homeStep01 from "@/assets/homeStep01.png";
import homeStep02 from "@/assets/homeStep02.png";
import homeStep03 from "@/assets/homeStep03.png";

const steps = [
  {
    step: "STEP 01",
    title: "Bring Your Pharmacy In",
    description:
      "We help you configure products, stock, suppliers, taxes, and team access from day one. Our onboarding team assists with data migration from your existing registers or software, so you're not starting from a blank slate.",
    tags: [
      { label: "Data Migration" },
      { label: "Tax & Roles" },
      { label: "Fast Onboarding", type: "blue" },
    ],
    image: homeStep01,
    imageAlt: "Digital catalog onboarding",
    icon: LuShoppingBasket,
  },
  {
    step: "STEP 02",
    title: "Run the Work in One Flow",
    description:
      "Billing updates inventory. Purchases update costs. Every action stays connected across your pharmacy, automatically - meaning your team doesn't have to manually update multiple systems for a single transaction.",
    tags: [
      { label: "Real-time Sync", type: "blue" },
      { label: "Auto Stock Deduct" },
      { label: "Live Costing" },
    ],
    image: homeStep02,
    imageAlt: "Pharmacy workflow dashboard",
    icon: FiBarChart2,
  },
  {
    step: "STEP 03",
    title: "Make better decisions",
    description:
      "See sales, margins, expiry risks, and branch performance while they're still actionable - not after the month is over. Catch problems early, and make pricing and stocking decisions based on real data instead of guesswork.",
    tags: [
      { label: "Expiry Alerts", type: "red" },
      { label: "Branch Analytics" },
      { label: "Profit Margins", type: "blue" },
    ],
    image: homeStep03,
    imageAlt: "Pharmacy analytics dashboard",
    icon: FiMonitor,
  },
];

function ContentCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className=" relative flex flex-col min-h-[154px] justify-center rounded-[13px] border border-slate-200/80 bg-white px-6 py-5 shadow-[0_5px_18px_rgba(15,23,42,0.055)] "
    >
      {/* Icon */}
      <div className=" absolute right-5 top-5 flex items-center justify-center p-1.5 rounded-[9px] border border-sky-100 bg-[#dbf9fd] text-[#0198ae] "
      >
        <Icon size={18} />
      </div>

      {/* Step label */}
      <div className="mb-3">
        <span className=" rounded-full bg-[#dbf9fd] px-2.5 py-1 text-[11px] text-[#0198ae] font-semibold tracking-[0.05em] " >
          {item.step}
        </span>
      </div>

      {/* Title */}
      <h3 className=" pr-10 text-[20px] xl:text-[22px] font-semibold leading-tight tracking-[-0.015em] text-[#041a35] " >
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-2 max-w-[480px] text-[16px] text-justify leading-[1.55] text-slate-600">
        {item.description}
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag.label}
            className={`
              rounded-md border px-2.5 py-1
              text-[14px] font-medium 
              ${
                tag.type === "red"
                  ? "border-red-100 bg-red-50 text-red-500"
                  : tag.type === "blue"
                    ? "border-sky-100 bg-sky-50 text-[#0198ae]"
                    : "border-slate-100 bg-slate-50 text-slate-500"
              }
            `}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ImageCard({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.015,
      }}
      className=" group relative aspect-[1.78/1] overflow-hidden rounded-[13px] border-[5px] border-white bg-slate-100 shadow-[0_2px_12px_rgba(15,23,42,0.12)] "
    >
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className=" object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] "
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-white/[0.04]" />
    </motion.div>
  );
}

function TimelineDot({ index }) {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.7,
      }}
      transition={{
        delay: index * 0.12 + 0.15,
        type: "spring",
        stiffness: 240,
        damping: 18,
      }}
      className=" absolute left-1/2 top-1/2 z-20 hidden md:flex items-center justify-center h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f8fafc] "
    >
      <span className="h-[13px] w-[13px] rounded-full border-[3px] border-[#0198ae] bg-white" />
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="mx-auto container w-full bg-white px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
      {/* <div className="flex flex-col items-center gap-16 lg:gap-20 w-full border"> */}
      {/* Heading */}
      <div className="mx-auto text-center w-full mb-10  ">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-2 flex items-center justify-center gap-2"
        >
          <div className="flex items-center gap-[9px]">
            <span className="h-px w-6 bg-[#0198ae]" />

            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0198ae]">
              Simple from day one
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className=" text-[32px] sm:text-[39px] lg:text-[43px] font-medium leading-[1.02] tracking-[-0.045em] text-[#041a35] "
        >
          From setup to insight in
          <br className="hidden sm:block" />
          <span className="text-[#0198ae]">Three Clear Steps.</span>
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center vertical line */}
        <motion.div
          initial={{
            scaleY: 0,
          }}
          whileInView={{
            scaleY: 1,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className=" pointer-events-none absolute bottom-[70px] left-1/2 top-[70px] hidden md:block w-px origin-top -translate-x-1/2 bg-slate-200 "
        />

        <div className="space-y-10 md:space-y-16 ">
          {steps.map((item, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <div
                key={item.step}
                className=" relative grid md:grid-cols-[1fr_50px_1fr] items-center gap-7 md:gap-0 "
              >
                <TimelineDot index={index} />

                {/* Mobile */}
                <div className="md:hidden">
                  <ImageCard item={item} index={index} />
                </div>

                <div className="md:hidden">
                  <ContentCard item={item} index={index} />
                </div>

                {/* Desktop alternating layout */}
                {imageOnLeft ? (
                  <>
                    <div className="hidden md:block">
                      <ImageCard item={item} index={index} />
                    </div>

                    <div className="hidden md:block" />

                    <div className="hidden md:block">
                      <ContentCard item={item} index={index} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block">
                      <ContentCard item={item} index={index} />
                    </div>

                    <div className="hidden md:block" />

                    <div className="hidden md:block">
                      <ImageCard item={item} index={index} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
