"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Store,
  ChartNoAxesColumnIncreasing,
  Hospital,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    id: 1,
    icon: Store,
    badge: "SIMPLE",
    title: "Independent Pharmacy",
    description:
      "Cut down manual work and get a clear, real-time view of your entire shop. Built for single-location pharmacies that want accurate billing and stock control without complex setup.",
    iconBg: "bg-[#eaf2ff]",
    iconColor: "text-[#2563d9]",
    badgeBg: "bg-[#eaf2ff]",
    badgeColor: "text-[#2563d9]",
  },
  {
    id: 2,
    icon: ChartNoAxesColumnIncreasing,
    badge: "SCALE",
    title: "Growing Pharmacy Chain",
    description:
      "Retain branch-level independence while centralizing stock, performance, and controls. Ideal for chains scaling to 2, 5, or 20+ outlets that still want one unified, owner-level view.",
    iconBg: "bg-[#e3f8f7]",
    iconColor: "text-[#0da8ae]",
    badgeBg: "bg-[#e0f8f8]",
    badgeColor: "text-[#0ba8ae]",
  },
  {
    id: 3,
    icon: Hospital,
    badge: "COMPLEX",
    title: "Clinic & Hospital Care",
    description:
      "Link dispensing, procurement, and reporting across your full care team. Built to handle high transaction volumes, strict prescription compliance, and smooth coordination between pharmacy and clinical staff.",
    iconBg: "bg-[#eaf2ff]",
    iconColor: "text-[#2563d9]",
    badgeBg: "bg-[#eaf2ff]",
    badgeColor: "text-[#2563d9]",
  },
];

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.18,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PharmacyScaleSection() {
  return (
    <section
      className="relative w-full overflow-hidden border border-[#edf2f8] bg-[#f8fbff]
     bg-cover bg-center bg-no-repeat
     "
      style={{
        backgroundImage: "url('/images/Meditix3.jpg')",
      }}
    >
      {/* <section className=" w-full bg-[#F3F8FC] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Meditix2.jpg')",
          }}
        > */}
      {/* ==================== BACKGROUND DECORATION ==================== */}

      {/* Top right soft blue circle */}
      {/* <div className=" pointer-events-none absolute -right-[170px] sm:-right-[130px] lg:-right-[60px] -top-[235px] lg:-top-[265px] h-[570px] w-[570px] rounded-full bg-[#edf4ff] " /> */}

      {/* Bottom left large curved shape */}
      {/* <div className=" pointer-events-none absolute -bottom-[240px] -left-[240px] h-[450px] w-[450px] rounded-full bg-[#edf4ff] " /> */}

      {/* Right dots */}
      {/* <div className="pointer-events-none absolute bottom-[60px] right-[20px] hidden sm:block lg:right-[28px]">
        <div className="grid grid-cols-7 gap-[16px]">
          {Array.from({ length: 35 }).map((_, i) => (
            <span
              key={i}
              className="h-[4px] w-[4px] rounded-full bg-[#d8e7ff]"
            />
          ))}
        </div>
      </div> */}

      {/* ==================== CONTENT ==================== */}

      <div className="container mx-auto relative z-10 flex items-center w-full px-4 sm:px-6 lg:px-10 py-25">
        <div className=" grid grid-cols-1  xl:grid-cols-[0.75fr_1.65fr] items-center gap-4 xl:gap-14 w-full">
          {/* ==================== LEFT CONTENT ==================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative xl:max-w-[510px] flex flex-col  w-full  gap-4"
          >
            <div className="flex flex-col gap-2 ">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.45 }}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <span className="h-px w-6 bg-[#0198ae]" />

                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0198ae]">
                  ONE SOFTWARE, EVERY SCALE
                </span>
              </motion.div>

              <h3 className=" font-fraunces text-[36px] lg:text-[40px] xl:text-[42px] text-center lg:text-left font-medium leading-[1.12] tracking-[-0.035em] text-[#101828]">
                Built to Fit Your
                <span className="text-[#0198ae] font-semibold"> Pharmacy </span>
                Whatever Its Size
              </h3>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-3">
              {/* Description */}
              <p className="font-nunito text-[16px] leading-[1.6]  text-center lg:text-justify xl:max-w-[510px]">
                A single-counter chemist shop, a fast-growing pharmacy chain,
                and a hospital pharmacy unit don't run the same way, so they
                shouldn't need the same software setup either.
              </p>

              {/* Link */}
              <motion.a
                href="/contact"
                whileHover="hover"
                className="inline-flex items-center gap-3 text-[17px] font-semibold text-white bg-[#0198ae] px-5 py-2.5 rounded-full "
              >
                Find your fit
                <motion.span
                  variants={{
                    hover: {
                      x: 5,
                    },
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <ArrowRight strokeWidth={2} size={21} />
                </motion.span>
              </motion.a>
            </div>
          </motion.div>

          {/* ==================== CARDS ==================== */}

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.id}
                  variants={cardAnimation}
                  whileHover={{
                    y: -7,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  className=" group relative flex flex-col gap-2 rounded-2xl overflow-hidden border border-[#dae6f5] bg-white/90 p-5 transition-shadow duration-300 shadow-[0_14px_40px_rgba(33,83,145,0.06)] hover:shadow-[0_22px_55px_rgba(33,83,145,0.12)]"
                >
                  {/* Soft decorative glow */}
                  <div className=" pointer-events-none absolute -right-[55px] -top-[65px] h-[150px] w-[150px] rounded-full bg-[#f3f8ff] opacity-70 " />

                  {/* Icon */}
                  <div className="relative z-10 flex items-start justify-between">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: -4, scale: 1.05 }}
                      transition={{ duration: 0.25 }}
                      className={` flex items-center justify-center rounded-xl p-1.5 ${card.iconBg} ${card.iconColor} `}
                    >
                      <Icon size={31} strokeWidth={1.8} className=" h-7 w-7" />
                    </motion.div>

                    {/* Badge */}
                    <span
                      className={` rounded-full text-[11px] px-3 py-1.5 font-bold tracking-[0.02em] ${card.badgeBg} ${card.badgeColor} `}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className=" font-fraunces relative z-10  text-[20px] xl:text-[22px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#173653] ">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className=" font-nunito  relative z-10  text-[15px] font-normal text-[#627b99] text-justify ">
                    {card.description}
                  </p>

                  {/* Bottom button */}
                  <div className="relative z-10 mt-auto  ">
                    <div className="mb-1.5 h-px w-full bg-[#e4edf8]" />

                    <motion.a
                      href="#"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className=" inline-flex items-center gap-3 text-[15px] font-semibold text-[#0198ae] "
                    >
                      Learn more
                      <motion.span
                        variants={{
                          rest: { x: 0 },
                          hover: { x: 5 },
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        <ArrowRight size={18} strokeWidth={2} />
                      </motion.span>
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
