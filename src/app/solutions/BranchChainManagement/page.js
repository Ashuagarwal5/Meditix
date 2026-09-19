"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AlertTriangle, Package, Zap, ReceiptText, Info } from "lucide-react";

import homeHero from "../../../assets/homeHero.webp";
import AlternatingSection from "../../components/common/AlternatingSection";
import aboutWhoWeAre from "../../../assets/aboutWhoWeAre.webp";
import Cta from "@/app/home/components/Cta";
import FAQSection from "@/app/components/common/FAQSection";

import homeFAQs from "../../../assets/homeFAQs.webp";

const features = [
  {
    id: 1,
    label: "Inventory Management",
    title: "Keep Complete Control of Your Inventory",
    description:
      "Manage materials, track stock levels, and maintain complete visibility across different sites from one centralized platform.",
    image: aboutWhoWeAre,
    imageAlt: "Inventory management dashboard",
    bullets: [
      "Track available and reserved inventory",
      "Manage stock across multiple project sites",
      "Transfer materials between different locations",
      "Maintain accurate inventory records",
    ],
    buttonText: "Explore Inventory",
    buttonLink: "/inventory",
  },

  {
    id: 2,
    label: "Procurement",
    title: "Simplify Your Entire Procurement Process",
    description:
      "Move from material requests to purchase orders without relying on spreadsheets, phone calls, or disconnected systems.",
    image: aboutWhoWeAre,
    imageAlt: "Procurement management system",
    bullets: [
      "Create and manage material requests",
      "Generate and compare vendor bids",
      "Create purchase orders quickly",
      "Monitor procurement status in real time",
    ],
  },

  {
    id: 3,
    label: "Project Management",
    title: "Manage Every Project From One Place",
    description:
      "Get a complete view of your projects, materials, teams, and activities while keeping every stakeholder connected.",
    image: aboutWhoWeAre,
    imageAlt: "Project management dashboard",
    bullets: [
      "Manage multiple construction sites",
      "Create and maintain project BOQs",
      "Assign users to specific projects",
      "Monitor project activities from one dashboard",
    ],
    buttonText: "View Projects",
    buttonLink: "/projects",
  },
];

const faqData = [
  {
    id: 1,
    question: "What is real estate ERP software?",
    answer:
      "Real estate ERP software brings project management, procurement, inventory, accounting, vendor management, and operational data into one centralized system.",
  },
  {
    id: 2,
    question: "Can I manage multiple construction sites?",
    answer:
      "Yes. You can manage multiple sites and maintain separate inventory, material requests, users, vendors, BOQs, purchase orders, and project information for each location.",
  },
  {
    id: 3,
    question: "Can site teams request materials?",
    answer:
      "Yes. Site teams can create material requests by selecting the required material, quantity, project site, description, and supporting images.",
  },
  {
    id: 4,
    question: "Can I manage vendors from the platform?",
    answer:
      "Yes. Vendors can be onboarded and managed centrally. You can maintain vendor details, track purchases, manage bids, and generate purchase orders.",
  },
  {
    id: 5,
    question: "Does the system support inventory transfers?",
    answer:
      "Yes. Materials can be transferred between different project sites while maintaining records of the source site, destination site, quantities, and transfer status.",
  },
  {
    id: 6,
    question: "Can I generate purchase orders?",
    answer:
      "Yes. Purchase orders can be generated after bid evaluation and negotiation, allowing your procurement workflow to stay organized and traceable.",
  },
];

const page = () => {
  const benefits = [
    "Real-time business insights",
    "Easy workflow management",
    "Simple and intuitive interface",
    "Built for growing businesses",
  ];

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-[180px] -top-[180px] h-[500px] w-[500px] rounded-full bg-[#0198ae]/10 blur-[110px]" />

        <div className="pointer-events-none absolute -bottom-[220px] -left-[180px] h-[480px] w-[480px] rounded-full bg-[#0198ae]/5 blur-[120px]" />

        <div className="relative z-10 container mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 sm:gap-14 lg:gap-14  xl:gap-20 px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 xl:py-24 ">
          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className=" relative order-2 mx-auto lg:mx-0 flex items-center justify-center max-w-[600px] w-full lg:order-1  "
          >
            {/* Background shape */}
            <div className=" absolute left-1/2 top-1/2 h-[90%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-[#0198ae]/10 sm:rounded-[38px] lg:h-[105%] lg:w-[105%] " />

            {/* Image card */}
            <div className="relative w-full">
              <div className=" relative overflow-hidden rounded-[20px] border border-[#D8E6E8] bg-white p-2 shadow-[0_25px_70px_rgba(22,65,77,0.12)] sm:rounded-[26px] sm:p-3 ">
                <Image
                  src={homeHero}
                  alt="Business dashboard"
                  width={900}
                  height={700}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 92vw, 600px"
                  className=" block h-auto w-full rounded-[15px] object-cover sm:rounded-[20px] "
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.65,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  -bottom-6
                  right-3
                  hidden
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  px-4
                  py-3
                  shadow-[0_16px_40px_rgba(20,67,77,0.14)]

                  sm:flex
                  lg:-right-5
                "
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0198ae]/10">
                  <CheckCircle2 className="h-5 w-5 text-[#0198ae]" />
                </div>

                <div>
                  <p className="text-[11px] font-medium text-slate-400">
                    Business Growth
                  </p>

                  <p className="mt-0.5 text-[13px] font-semibold text-slate-800">
                    Smarter. Faster. Better.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}

          <div
            className="
              order-1
              mx-auto
              flex
              w-full
              max-w-[650px]
              flex-col
              items-center
              text-center

              lg:order-2
              lg:mx-0
              lg:items-start
              lg:text-left
            "
          >
            {/* Tag */}
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0198ae]/20 bg-[#0198ae]/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#0198ae]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0198ae] sm:text-xs">
                  Smarter Business Management
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="
                mt-5
                max-w-[650px]
                text-[38px]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-slate-900

                sm:text-[48px]

                lg:text-[54px]
                lg:leading-[1.06]

                xl:text-[60px]
              "
            >
              Run your business with{" "}
              <span className="text-[#0198ae]">clarity and confidence.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="
                mt-5
                max-w-[590px]
                text-[15px]
                leading-7
                text-slate-600

                sm:mt-6
                sm:text-[17px]
                sm:leading-8
              "
            >
              Simplify everyday operations, monitor performance, and make better
              decisions with one powerful platform designed to keep your
              business moving forward.
            </motion.p>

            {/* Benefits */}
            <div
              className="
                mt-7
                grid
                w-full
                max-w-[590px]
                grid-cols-1
                gap-x-6
                gap-y-3

                sm:grid-cols-2
              "
            >
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: 12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-2.5 text-left"
                >
                  <div className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0198ae]/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0198ae]" />
                  </div>

                  <span className="text-[14px] font-medium leading-5 text-slate-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.65,
                ease: "easeOut",
              }}
              className="
                mt-8
                flex
                w-full
                flex-col
                gap-3

                sm:w-auto
                sm:flex-row
                sm:items-center

                lg:mt-9
              "
            >
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#0198ae]
                  px-6
                  py-3
                  text-[14px]
                  font-semibold
                  text-white
                  shadow-[0_10px_28px_rgba(1,152,174,0.22)]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#01889c]
                  hover:shadow-[0_15px_32px_rgba(1,152,174,0.28)]
                "
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#0198ae]/30
                  bg-white
                  px-6
                  py-3
                  text-[14px]
                  font-semibold
                  text-[#0198ae]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:border-[#0198ae]
                  hover:bg-[#0198ae]/5
                "
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Bottom text */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.85,
              }}
              className="mt-5 text-[11px] font-medium text-slate-400 sm:text-xs"
            >
              Simple setup <span className="mx-1 text-[#0198ae]/50">•</span>
              No complex onboarding{" "}
              <span className="mx-1 text-[#0198ae]/50">•</span>
              Built to scale
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F6FAFC] py-14 sm:py-16 lg:py-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[75%] -translate-x-1/2 rounded-full bg-[#0198ae]/5 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-10 text-center sm:mb-12"
          >
            <h2 className="text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-[#142536] sm:text-[38px] lg:text-[44px]">
              Why Pharmacy Owners In India Trust{" "}
              <span className="font-semibold text-[#0198ae]">Meditix</span>
            </h2>

            <p className="mt-3 text-[16px] sm:text-[18px] leading-6 text-[#7A8B99]">
              See how modern pharmacies overcome everyday operational
              challenges.
            </p>
          </motion.div>

          {/* ======================================================
        ASYMMETRIC CARD GRID

        ROW 1 : 7 columns + 5 columns
        ROW 2 : 5 columns + 7 columns
    ====================================================== */}

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
            {/* =====================================================
          CARD 1 - LONG
      ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className=" lg:col-span-7 rounded-[22px] border border-[#E5EEF2] bg-white p-5 shadow-[0_12px_40px_rgba(20,60,80,0.05)] sm:p-6 lg:p-7 "
            >
              <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-[1fr_0.95fr] sm:gap-0">
                {/* Left */}
                <div className="sm:pr-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0198ae] text-white shadow-[0_8px_20px_rgba(1,152,174,0.22)]">
                    <AlertTriangle size={20} strokeWidth={1.8} />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Info size={13} className="text-[#8FA0AD]" />

                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#82939F]">
                      The Challenge
                    </span>
                  </div>

                  <h3 className="mt-3 text-[19px] font-semibold leading-[1.3] text-[#172838] sm:text-[20px]">
                    Medicines expire on the shelf before they ever sell.
                  </h3>
                </div>

                {/* Right */}
                <div className="border-t border-[#E4ECEF] pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-1">
                  <h4 className="text-[32px] font-semibold leading-none text-[#0198ae]">
                    ₹0
                  </h4>

                  <p className="mt-1 text-[14px] font-medium text-[#8A9AA6]">
                    lost to expiry
                  </p>

                  <p className="mt-3 text-[16px] leading-[1.65] text-[#60727F]">
                    Batch-wise alerts warn you weeks ahead, return or{" "}
                    <span className="font-semibold text-[#263C4D]">
                      push that stock in time
                    </span>
                    , and keep the cash you used to write off.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
          CARD 2 - SHORT
      ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0.08,
                ease: "easeOut",
              }}
              className=" lg:col-span-5 rounded-[22px] border border-[#E5EEF2] bg-white p-5 shadow-[0_12px_40px_rgba(20,60,80,0.05)] sm:p-6 lg:p-7 "
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0198ae] text-white shadow-[0_8px_20px_rgba(1,152,174,0.22)]">
                <Package size={20} strokeWidth={1.8} />
              </div>

              <div className="flex items-center gap-1.5">
                <Info size={13} className="text-[#8FA0AD]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#82939F]">
                  The Challenge
                </span>
              </div>

              <h3 className="mt-3 text-[19px] font-semibold leading-[1.3] text-[#172838] sm:text-[20px]">
                A loyal customer leaves because a medicine is out of stock.
              </h3>

              <div className="mt-5">
                <h4 className="text-[32px] font-semibold leading-none text-[#0198ae]">
                  Zero
                </h4>

                <p className="mt-1 text-[14px] font-medium text-[#8A9AA6]">
                  stockouts on fast-movers
                </p>

                <p className="mt-3 text-[14px] leading-[1.65] text-[#60727F]">
                  Auto reorder alerts keep{" "}
                  <span className="font-semibold text-[#263C4D]">
                    every fast mover on your rack
                  </span>
                  , so no one walks to the shop next door.
                </p>
              </div>
            </motion.div>

            {/* =====================================================
          CARD 3 - SHORT
      ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="
          lg:col-span-5
          rounded-[22px]
          border border-[#E5EEF2]
          bg-white
          p-5
          shadow-[0_12px_40px_rgba(20,60,80,0.05)]
          sm:p-6
          lg:p-7
        "
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0198ae] text-white shadow-[0_8px_20px_rgba(1,152,174,0.22)]">
                <Zap size={20} strokeWidth={1.8} />
              </div>

              <div className="flex items-center gap-1.5">
                <Info size={13} className="text-[#8FA0AD]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#82939F]">
                  The Challenge
                </span>
              </div>

              <h3 className="mt-3 text-[19px] font-semibold leading-[1.3] text-[#172838] sm:text-[20px]">
                Billing crawls and the queue builds up every evening.
              </h3>

              <div className="mt-5">
                <h4 className="text-[32px] font-semibold leading-none text-[#0198ae]">
                  40% faster
                </h4>

                <p className="mt-1 text-[14px] font-medium text-[#8A9AA6]">
                  checkout at the counter
                </p>

                <p className="mt-3 text-[14px] leading-[1.65] text-[#60727F]">
                  Faster billing and barcode checkout help your team serve more
                  customers with fewer delays during busy hours.
                </p>
              </div>
            </motion.div>

            {/* =====================================================
          CARD 4 - LONG
      ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0.16,
                ease: "easeOut",
              }}
              className=" lg:col-span-7 rounded-[22px] border border-[#E5EEF2] bg-white p-5 sm:p-6 lg:p-7 shadow-[0_12px_40px_rgba(20,60,80,0.05)] "
            >
              <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-[1fr_0.95fr] sm:gap-0">
                {/* Left */}
                <div className="sm:pr-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0198ae] text-white shadow-[0_8px_20px_rgba(1,152,174,0.22)]">
                    <ReceiptText size={20} strokeWidth={1.8} />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Info size={13} className="text-[#8FA0AD]" />

                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#82939F]">
                      The Challenge
                    </span>
                  </div>

                  <h3 className="mt-3 text-[19px] font-semibold leading-[1.3] text-[#172838] sm:text-[20px]">
                    GST month-end never matches your books.
                  </h3>
                </div>

                {/* Right */}
                <div className="border-t border-[#E4ECEF] pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-1">
                  <h4 className="text-[30px] font-semibold leading-none text-[#0198ae]">
                    Minutes
                  </h4>

                  <p className="mt-1 text-[14px] font-medium text-[#8A9AA6]">
                    to file — not lost weekends
                  </p>

                  <p className="mt-3 text-[16px] leading-[1.65] text-[#60727F]">
                    Every bill posts straight to your{" "}
                    <span className="font-semibold text-[#263C4D]">
                      accounts, and returns build themselves
                    </span>
                    , reconciled, accurate, and ready to file.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AlternatingSection
        sectionTitle="Everything You Need to Manage Your Projects"
        sectionDescription="A centralized platform designed to simplify project operations, procurement, inventory, and collaboration."
        items={features}
      />

      {/* Cta */}
      <Cta />

      <FAQSection
        badge="Help & Support"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our real estate ERP platform, inventory management, procurement, and project operations."
        image={homeFAQs}
        imageAlt="Real estate ERP support"
        faqs={faqData}
      />
    </main>
  );
};

export default page;
