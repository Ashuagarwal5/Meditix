"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  PackageOpen,
  FileHeart,
  Truck,
  Store,
  ChartNoAxesColumnIncreasing,
  ArrowRight,
  MoreHorizontal,
} from "lucide-react";

const features = [
  {
    category: "OPERATIONS",
    title: "Workflow Management",
    description:
      "Streamline daily operations at the counter with barcode scanning, GST-compliant invoicing, multiple payment options, discounts, and fast, reliable POS - even during peak hours.",
    icon: ClipboardList,
    accent: "blue",
  },
  {
    category: "STOCK CONTROL",
    title: "Inventory Management",
    description:
      "Track stock levels in real time, monitor expiry dates, and get low-stock alerts. Manage purchases, returns and stock adjustments with ease, so your shelves are always ready.",
    icon: PackageOpen,
    accent: "cyan",
  },
  {
    category: "PATIENT CARE",
    title: "E-Prescription Management",
    description:
      "Digitize prescriptions, verify and record them, and maintain a complete history of what was prescribed, by whom, and when - especially important for repeat medications.",
    icon: FileHeart,
    accent: "blue",
  },
  {
    category: "PROCUREMENT",
    title: "Supply Chain Management",
    description:
      "Manage suppliers, track purchase history, and automate refill reminders. Build stronger supplier relationships and ensure a steady supply of medicines with smarter procurement.",
    icon: Truck,
    accent: "cyan",
  },
  {
    category: "MULTI-LOCATION",
    title: "Multi-Branch / Chain Management",
    description:
      "Get centralized control across multiple outlets. View real-time stock, transfer inventory between branches, monitor performance, and manage role-based access for your team.",
    icon: Store,
    accent: "blue",
  },
  {
    category: "REVENUE & INSIGHTS",
    title: "Billing & Payment Management",
    description:
      "Turn every transaction into actionable insights. Analyze sales trends, profit margins, best and slow-moving products, and staff performance - all without manual spreadsheets.",
    icon: ChartNoAxesColumnIncreasing,
    accent: "cyan",
  },
];

const accentStyles = {
  blue: {
    iconBox: "bg-gradient-to-br from-[#eef6ff] via-[#e4f1ff] to-[#cfe6ff]",
    icon: "text-[#075FE5]",
    pill: "bg-[#eff6ff] text-[#2876db]",
    button: "bg-[#e5f2ff] text-[#0868ef]",
    glow: "bg-[#cfe7ff]",
    decorative: "text-[#73adf5]",
    link: "text-[#0868ef]",
  },

  cyan: {
    iconBox: "bg-gradient-to-br from-[#eafffc] via-[#dcfbf8] to-[#c7f5f2]",
    icon: "text-[#009bb5]",
    pill: "bg-[#ebfbfa] text-[#009daf]",
    button: "bg-[#dffaf7] text-[#009eaf]",
    glow: "bg-[#c9f6f4]",
    decorative: "text-[#70d8db]",
    link: "text-[#00a0ae]",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PharmacyFeatureCards() {
  return (
    <section className="relative overflow-hidden py-12 ">
      {/* Section background decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-[400px] w-[400px] rounded-full bg-[#dff3ff]/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-10 h-[400px] w-[400px] rounded-full bg-[#dcefff]/50 blur-3xl" />

      <div className="container mx-auto w-full  px-4 sm:px-6 lg:px-10">
				 {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45 }}
            className="mb-4 flex items-center justify-center lg:justify-start gap-3"
          >
            <span className="h-px w-6 bg-[#0198ae]" />

            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0198ae]">
              UNDERSTANDING THE BASICS
            </span>
          </motion.div>

          {/* Heading */}
          <div className="mb-8 grid lg:grid-cols-2 gap-4 lg:gap-8 lg:items-center ">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[36px] sm:text-[44px] text-center lg:text-left font-medium leading-[1.08] tracking-[-0.045em] text-[#07101f] "
            >
              What is <span className="text-[#0198ae]">Pharmacy</span>
              <br />
              Management Software?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              // className="w-full h-full flex items-center text-[15px] text-center lg:text-left leading-[1.65] text-[#48546a]  "
              className=" text-[15px] sm:text-[18px] leading-normal	 text-[#687E90] text-center lg:text-justify "
            >
              Pharmacy management software is used by a wide range of businesses
              - from small independent chemist shops to multi-branch retail
              pharmacy chains, and even in-house pharmacies inside hospitals and
              clinics. While the scale of usage differs, the underlying need is
              the same: accurate billing, reliable stock control, and clear
              visibility into how the business is doing.
            </motion.p>
          </div>

					{/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 "
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            const colors = accentStyles[feature.accent];

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className=" group relative overflow-hidden flex flex-col gap-4 rounded-3xl border border-[#dcecf8] bg-white p-5 transition-alll duration-300 shadow-[0_12px_45px_rgba(60,138,195,0.10)] hover:shadow-[0_20px_55px_rgba(50,125,190,0.16)]"
              >
                {/* soft top-right glow */}
                {/* <div className={` pointer-events-none absolute -right-10 -top-20 h-[180px] w-[280px] rounded-full ${colors.glow} opacity-[0.18] blur-2xl `} /> */}

                {/* bottom decorative curve */}
                <div
                  className={` pointer-events-none absolute -bottom-[80px] -right-[100px] h-[210px] w-[310px] rotate-[-13deg] rounded-[48%] ${colors.glow} opacity-[0.25] `}
                />

                {/* faint white overlay */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/70 to-transparent" />

                {/* Decorative background icon */}
                <Icon
                  strokeWidth={1.5}
                  className={` pointer-events-none absolute -bottom-1 -right-1 h-16 w-16 xl:h-24 xl:w-24 ${colors.decorative} opacity-[0.18] transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:scale-110 `}
                />

                {/* top */}
                <div className="relative z-10 flex items-center justify-between">
                  {/* Icon box */}
                  <motion.div
                    whileHover={{
                      rotate: -4,
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.25 }}
                    className={` flex items-center justify-center p-2.25 shrink-0 rounded-[18px] ${colors.iconBox} shadow-[0_10px_24px_rgba(20,130,190,0.09)] `}
                  >
                    <Icon
                      strokeWidth={2}
                      className={`h-8 w-8 ${colors.icon}`}
                    />
                  </motion.div>

                  {/* Category */}
                  <span
                    className={` rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.15em] ${colors.pill} `}
                  >
                    {feature.category}
                  </span>
                </div>

                {/* content */}
                <div className="relative z-10 flex flex-col items-start gap-2 h-full ">
                  <h3 className=" text-[20px] xl:text-[22px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#07123d] ">
                    {feature.title}
                  </h3>

                  <p className="max-w-[95%] text-[16px] leading-[1.5] text-[#53648b]">
                    {feature.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="relative z-10">
                  <motion.a
                    href="#"
                    whileHover="hover"
                    initial="initial"
                    className={`inline-flex items-center gap-3 text-[14px] font-semibold ${colors.link}`}
                  >
                    Learn more
                    <motion.span
                      variants={{
                        initial: { x: 0 },
                        hover: { x: 4 },
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${colors.button} `}
                    >
                      <ArrowRight
                        strokeWidth={2.3}
                        className="h-[18px] w-[18px]"
                      />
                    </motion.span>
                  </motion.a>
                </div>

                {/* subtle internal border shine */}
                <div className="pointer-events-none absolute inset-[1px] rounded-[24px] border border-white/70" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
