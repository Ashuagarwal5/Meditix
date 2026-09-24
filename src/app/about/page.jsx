"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// icons
import {
  BriefcaseMedical,
  Building2,
  Cloud,
  Zap,
  Stethoscope,
  IndianRupee,
  Hospital,
  Gauge,
  Archive,
} from "lucide-react";
import { CiMedicalCross } from "react-icons/ci";
import { FaHandHoldingMedical } from "react-icons/fa";

// assets
// import aboutWhoWeAre from "@/assets/aboutWhoWeAre.webp";
// import aboutWhoWeAre2 from "@/assets/aboutWhoWeAre2.webp";
import aboutWhoWeAre3 from "../../assets/aboutWhoWeAre3.png";
import aboutOurValues from "../../assets/aboutOurValues.png";
// import aboutHero from "../../assets/aboutHero.webp";
import aboutHero2 from "../../assets/aboutHero2.png";
import aboutSetion from "../../assets/aboutSetion.jpg";
import homeFAQs from "../../assets/homeFAQs.webp";
import aboutCR01 from "../../assets/aboutCR01.jpg";
import aboutCR02 from "../../assets/aboutCR02.jpg";
import aboutCR03 from "../../assets/aboutCR03.jpg";
import aboutCR04 from "../../assets/aboutCR04.jpg";

// Component
import Cta from "../home/components/Cta";
import FAQSection from "../components/common/FAQSection";
import { FiArrowUpRight } from "react-icons/fi";

const missionItems = [
  {
    number: "1",
    title: "Empower Pharmacy Owners",
    description:
      "Equip independent pharmacies, chains, and hospital pharmacy units with advanced tools to manage billing, inventory, and staff efficiently and without complexity.",
  },
  {
    number: "2",
    title: "Improve Operational Accuracy",
    description:
      "Reduce billing errors, stock mismatches, and expiry losses by replacing manual processes with automated, real-time systems.",
  },
  {
    number: "3",
    title: "Ensure Data Security and Compliance",
    description:
      "Maintain the highest standards of data protection and regulatory compliance, keeping pharmacy and patient information safe at all times.",
  },
  {
    number: "4",
    title: "Drive Efficiency Across Operations",
    description:
      "Streamline day-to-day pharmacy workflows from procurement to billing to reduce costs and save valuable staff time.",
  },
  {
    number: "5",
    title: "Foster Continuous Innovation",
    description:
      "Keep evolving our pharmacy software with new features shaped directly by pharmacist and pharmacy-owner feedback.",
  },
];

function Connector({ direction }) {
  const isLeftToRight = direction === "right";

  return (
    <div className="relative hidden h-[72px] w-full md:block">
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 1000 72"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id={`clip-${direction}`}>
            <motion.rect
              initial={
                isLeftToRight ? { width: 0, x: 0 } : { width: 0, x: 1000 }
              }
              whileInView={
                isLeftToRight ? { width: 1000, x: 0 } : { width: 1000, x: 0 }
              }
              viewport={{ once: true, amount: 0.65 }}
              transition={{
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25,
              }}
              y="0"
              height="72"
            />
          </clipPath>
        </defs>

        {isLeftToRight ? (
          <path
            d="M 40 0 V 12 Q 40 24 52 24 H 948 Q 960 24 960 36 V 72"
            fill="none"
            stroke="#0198ae"
            strokeWidth="4"
            strokeDasharray="10 9"
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath={`url(#clip-${direction})`}
          />
        ) : (
          <path
            d="M 960 0 V 12 Q 960 24 948 24 H 52 Q 40 24 40 36 V 72"
            fill="none"
            stroke="#0198ae"
            strokeWidth="4"
            strokeDasharray="10 9"
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath={`url(#clip-${direction})`}
          />
        )}
      </svg>
    </div>
  );
}

// circular reveal animation for sections

const cards = [
  {
    id: 1,
    title: "Independent Pharmacy",
    description:
      "Simple, reliable billing and inventory tools designed to keep single-counter pharmacies running smoothly without added complexity.",
    linkText: "Learn more about our Independent Pharmacy Solution",
    url: "/contact",
    // image: aboutSetion,
    image: aboutCR01,
    position: "top-left",
  },
  {
    id: 2,
    title: "Pharmacy Chains",
    description:
      "Centralized control across multiple branches — track stock, compare performance, and manage staff access, all from one dashboard.",
    linkText: "Learn more about our Multi-Branch Pharmacy Solution",
    url: "/contact",
    image: aboutCR02,
    position: "top-right",
  },
  {
    id: 3,
    title: "Hospital & Clinic Pharmacies",
    description:
      "Advanced tools to manage high transaction volumes, prescription compliance, and coordination between pharmacy and clinical teams.",
    linkText: "Learn more about our Hospital Pharmacy Solution",
    url: "/contact",
    image: aboutCR03,
    position: "bottom-left",
  },
  {
    id: 4,
    title: "Diagnostic-Linked Pharmacies",
    description:
      "Seamless integration between pharmacy billing, patient records, and diagnostic workflows for connected, end-to-end care.",
    linkText: "Learn more about our Integrated Pharmacy Solution",
    url: "/contact",
    image: aboutCR04,
    position: "bottom-right",
  },
];

const imagePosition = {
  "top-left": "right-0 bottom-0 rounded-tl-full",
  "top-right": "left-0 bottom-0 rounded-tr-full",
  "bottom-left": "right-0 top-0 rounded-bl-full",
  "bottom-right": "left-0 top-0 rounded-br-full",
};

const mobileCutoutPosition = {
  "top-left": "-right-14 -bottom-14",
  "top-right": "-left-14 -bottom-14",
  "bottom-left": "-right-14 -top-14",
  "bottom-right": "-left-14 -top-14",
};

const hoverFillPosition = {
  "top-left": "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
  "bottom-left": "right-0 top-0 translate-x-1/2 -translate-y-1/2",
  "top-right": "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
  "bottom-right": "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
};

function HealthcareCard({ card }) {
  const isRightCard =
    card.position === "top-right" || card.position === "bottom-right";

  return (
    // bg-[#fdf1e7]
    <div className="group relative min-h-[270px] overflow-hidden bg-white shadow-lg border rounded-[11px] sm:min-h-[290px] md:min-h-[300px]">
      {/* Animated teal hover fill */}
      <div
        className={`pointer-events-none absolute z-0 h-[1800px] w-[1800px] scale-0 rounded-full bg-[#0198ae] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-100 ${hoverFillPosition[card.position]}`}
      ></div>

      {/* Desktop image cutout */}
      <div
        className={`absolute z-[1] hidden h-[240px] w-[240px] overflow-hidden md:block lg:h-[245px] lg:w-[245px] xl:h-[250px] xl:w-[250px] ${imagePosition[card.position]}`}
      >
        {/* <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        /> */}
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 1024px) 245px, 250px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Mobile teal cutout */}
      <div
        className={`pointer-events-none absolute z-[1] block h-[125px] w-[125px] rounded-full bg-[#0198ae] transition-colors duration-500 group-hover:bg-[#0198ae] md:hidden ${mobileCutoutPosition[card.position]}`}
      ></div>

      {/* Content */}
      <div
        className={`relative z-10 flex min-h-[270px] flex-col items-center justify-center px-6 py-10 text-center sm:min-h-[290px] md:min-h-[300px] md:w-[66%] lg:px-10 ${isRightCard ? "md:ml-auto" : ""}`}
      >
        <h3 className="font-fraunces mb-3 text-[18px] font-semibold leading-tight text-black transition-colors duration-500 group-hover:text-white sm:text-[20px] lg:text-[23px]">
          {card.title}
        </h3>

        <p className="font-nunito mb-5 max-w-[390px] text-[14px] leading-[1.65] text-[#555555] transition-colors duration-500 group-hover:text-white sm:text-[15px] lg:text-[17px]">
          {card.description}
        </p>

        <a
          href={card.url}
          className="font-nunito max-w-[340px] text-[13px] sm:text-[14px] lg:text-[16px] font-medium leading-[1.4] text-black transition-colors duration-500 group-hover:text-white "
        >
          {card.linkText}
          <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
            <FiArrowUpRight size={16} />
          </span>
        </a>
      </div>
    </div>
  );
}

const reveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
  },
};

const stats = [
  {
    icon: Building2,
    label: "Trusted by Pharmacies",
  },
  {
    icon: Cloud,
    label: "99.9% Uptime, Always On",
  },
  {
    icon: Zap,
    label: "Zero-Downtime Data Migration",
  },
];

const insights = [
  {
    value: "₹450Cr+",
    label: "Prescription Volume",
    description:
      "Annual drug orders and patient prescriptions accurately verified and delivered.",
    icon: IndianRupee,
  },
  {
    value: "1,200+",
    label: "Pharmacies Empowered",
    description:
      "Independent community retail stores, clinic dispensaries, and regional chains.",
    icon: Hospital,
  },
  {
    value: "< 3.2s",
    label: "Counter Billing Speed",
    description:
      "Sub-4 second barcode checkout, instant batch validation, and unified digital payment.",
    icon: Gauge,
  },
  {
    value: "98.8%",
    label: "Stock Loss Reduction",
    description:
      "Prevented inventory write-offs via intelligent automated batch & expiry tracking.",
    icon: Archive,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const OurValues = [
  {
    title: "Compassion",
    description:
      " We understand that behind every prescription is a patient who needs care, not delays. Our software is built to help pharmacy teams serve people faster and more accurately.",
  },
  {
    title: "Integrity",
    description:
      "We hold ourselves to the highest standards of data privacy, billing accuracy, and ethical business practices — because pharmacies handle sensitive health and financial information every day.",
  },
  {
    title: "Innovation",
    description:
      "We continuously adopt smarter technology to make pharmacy operations faster, more predictable, and less dependent on manual effort.",
  },
  {
    title: "Accessibility",
    description:
      "Good pharmacy management shouldn't be limited to large chains. Our platform is built to be accessible and affordable for pharmacies of every size and scale.",
  },
];

const faqData = [
  {
    id: 1,
    question:
      "What makes your pharmacy management software different from others?",
    answer:
      "Our pharmacy management software is built directly around real counter-side problems billing delays, stock mismatches, and expiry losses rather than generic features borrowed from unrelated industries.",
  },
  {
    id: 2,
    question: "Who is behind this pharmacy management software?",
    answer:
      "Our team includes former pharmacy staff, software engineers, and support specialists who have worked closely with pharmacists to design a platform that fits how pharmacies actually operate.",
  },
  {
    id: 3,
    question:
      "Is your pharmacy software suitable for small, independent pharmacies?",
    answer:
      "Yes. Our pharmacy management software is built to work for single-counter independent pharmacies as well as large multi-branch chains, without requiring complex setup or technical expertise.",
  },
  {
    id: 4,
    question: "Can your software also support hospital and clinic pharmacies?",
    answer:
      "Yes. Our platform includes dedicated tools for hospital and clinic pharmacies, handling higher transaction volumes, prescription compliance, and coordination with clinical teams.",
  },
  {
    id: 5,
    question: "How do you ensure the security of pharmacy and patient data?",
    answer:
      "Data protection is a core part of our pharmacy management platform, with built-in security measures, role-based access, and regular backups to keep sensitive information safe.",
  },
  {
    id: 6,
    question: "How often do you update your pharmacy management software?",
    answer:
      "We continuously improve our software based on direct feedback from pharmacists and pharmacy owners using it daily, ensuring updates address real operational needs.",
  },
  {
    id: 7,
    question: "Do you help pharmacies migrate from their existing systems?",
    answer:
      "Yes. Our onboarding team assists with complete data migration from your current registers or software, so you can switch to our pharmacy management software without losing existing records.",
  },
];

const page = () => {
  return (
    <div>
      {/* hero */}
      <section className=" relative w-full overflow-hidden bg-[linear-gradient(180deg,#F8FAFF_0%,#F1F6FF_100%)] ">
        {/* subtle background glow */}
        <div
          aria-hidden="true"
          className=" ointer-events-none absolute left-1/2 **:top-[-260px] h-[600px]
          w-[900px] -translate-x-1/2 rounded-full
          bg-[#0198ae]/10
          blur-[120px]
        "
        />

        <div className=" relative container mx-auto z-10 px-4 sm:px-6 lg:px-10 pt-10 lg:pt-12 pb-12 lg:pb-16 ">
          {/* TOP CONTENT */}
          <motion.div
            {...reveal}
            className=" mx-auto max-w-[930px] flex flex-col items-center text-center "
          >
            {/* badge */}
            <div
              className=" inline-flex items-center
              gap-2
              rounded-full
              bg-[#cdf5fa]
              px-3
              py-1.5
            "
            >
              <BriefcaseMedical
                size={22}
                strokeWidth={2.2}
                className="text-[#0198ae]"
              />

              <span
                className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#0198ae]
                sm:text-[12px]
              "
              >
                ABOUT US • OUR MISSION
              </span>
            </div>

            {/* heading */}
            <h1
              className="
              font-fraunces
              mt-5
              text-[36px] sm:text-[46px] lg:text-[52px]
              text-[#071426]
              font-semibold
              leading-[1.05]
            "
            >
              Built by Pharmacy Experts.
              <br />
              <span className="text-[#0198ae]">
                Engineered for the Future of Pharmacy Management.
              </span>
            </h1>

            {/* description */}
            <p
              className="
              font-nunito
              mt-3
              max-w-[760px]
              text-[14px] sm:text-[15px] lg:text-[18px]
              leading-[1.65]
              text-[#53677A]

            "
            >
              We built our pharmacy management software to replace slow,
              outdated systems with fast billing, smart inventory control, and
              real-time visibility for pharmacies of every size, from
              single-counter shops to multi-branch chains.
            </p>

            {/* stats */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="
              mt-4
              flex
              flex-wrap
              items-center
              justify-center
              gap-2.5
            "
            >
              {stats.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                      },
                    },
                  }}
                  className=" inline-flex items-center gap-2 rounded-full border border-[#E5EBF2] bg-white px-3.5 py-2 shadow-[0_2px_7px_rgba(38,70,100,0.05)]"
                >
                  <Icon size={18} strokeWidth={2} className="text-[#0198ae]" />

                  <span
                    className="
                    font-fraunces
                    text-[15px]
                    font-semibold
                    text-[#0198ae]
                  "
                  >
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
            relative
            mt-8
            overflow-hidden
            rounded-[14px]
            shadow-[0_20px_55px_rgba(18,53,85,0.13)]
            sm:mt-10
          "
          >
            {/* IMAGE */}
            <div
              className="
              relative
              aspect-[1.45/1]
              w-full
              sm:aspect-[1.8/1]
              lg:aspect-[2.32/1]
            "
            >
              <Image
                src={aboutHero2}
                alt="Meditix pharmacy team working together"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />

              {/* image overlay */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#08243B]/70
                via-transparent
                to-transparent
              "
              />
            </div>

            {/* =====================================================
              FLOATING QUOTE CARD
          ===================================================== */}
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
                duration: 0.5,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
              relative
              m-4
              rounded-[10px]
              bg-white
              p-5
              shadow-[0_12px_30px_rgba(8,38,61,0.17)]

              sm:absolute
              sm:bottom-6
              sm:left-6
              sm:m-0
              sm:w-[390px]

              lg:bottom-7
              lg:left-10
              lg:w-[440px]
              lg:px-6
              lg:py-5
            "
            >
              {/* quote label */}
              <div className="flex items-center gap-2">
                <Stethoscope
                  size={13}
                  strokeWidth={2}
                  className="text-[#1883D8]"
                />

                <span
                  className="
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.09em]
                  text-[#1670B7]
                "
                >
                  Practitioner Founded
                </span>
              </div>

              {/* quote */}
              <p
                className="
                mt-2
                text-[13px]
                font-semibold
                leading-[1.5]
                tracking-[-0.15px]
                text-[#22384A]
                sm:text-[16px]
              "
              >
                "We built the pharmacy software we wished existed — one that
                keeps up with the counter, not the other way around."
              </p>

              {/* founder */}
              <div className="mt-2 flex items-center gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-[#1788DC]" />

                <span className="text-[12px] text-[#647789] sm:text-[14px]">
                  — Founding Team
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto container w-full bg-white px-4 sm:px-6 lg:px-10 py-12 ">
        <div className="grid items-center lg:grid-cols-2  gap-10  ">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="flex flex-col justify-center gap-4  h-full"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="font-fraunces text-[32px] lg:text-[42px] text-center lg:text-start font-medium leading-[1.1] tracking-[-0.03em] text-[#0198ae]"
            >
              Who We Are
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="font-nunito flex flex-col  text-center lg:text-start  gap-2 text-[16px] lg:text-[18px] text-gray-500"
            >
              <p>
                We are a dedicated team of pharmacists, technologists, and
                support specialists working together to make pharmacy management
                simpler, faster, and more reliable. Our mission is to connect
                pharmacy owners with the tools they need to run their business
                confidently through a secure, easy-to-use platform built
                specifically for pharmacy operations.
              </p>

              <p>
                Every feature we build starts with a real problem faced at the
                pharmacy counter, from billing delays to expiry losses, and ends
                with a solution that pharmacy teams can actually use, every
                single day.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative flex justify-end w-full xl:w-[550px] h-[300px] sm:h-[350px] ms-auto overflow-hidden rounded-[10px]"
          >
            <Image
              src={aboutWhoWeAre3}
              alt="Healthcare professionals"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 418px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* insights */}
      <section className="mx-auto container px-4 sm:px-6 lg:px-10 py-6 lg:py-12  ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {insights.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                }}
                className=" group min-h-[220px] rounded-[10px] border border-[#E4EAF1]
                  bg-white
                  p-5
                  shadow-[0_2px_8px_rgba(22,56,87,0.03)]
                  transition-shadow
                  duration-300
                  hover:shadow-[0_14px_32px_rgba(22,56,87,0.08)] 
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[6px]
                    bg-[#dbf9fd]
                    text-[#0198ae]
                    transition-all
                    duration-300
                    group-hover:bg-[#0198ae]
                    group-hover:text-white
                  "
                >
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                {/* VALUE */}
                <h3 className="font-fraunces mt-5 text-[31px] font-medium leading-none tracking-[-1.5px] text-[#071426] lg:text-[34px] " >
                  {stat.value}
                </h3>

                {/* LABEL */}
                <p className="font-nunito mt-2 text-[16px] font-semibold text-[#0198ae] " >
                  {stat.label}
                </p>

                {/* DESCRIPTION */}
                <p className="font-nunito mt-1 text-[10px] leading-[1.55] text-[#53687B] sm:text-[15px] " >
                  {stat.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="mx-auto container w-full bg-white px-4 sm:px-6 lg:px-10 py-12 lg:py-12">
        <div className="grid items-center lg:grid-cols-2 gap-10">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative w-full xl:w-[550px] h-[300px] sm:h-[420px] overflow-hidden rounded-[10px]"
          >
            <Image
              src={aboutOurValues}
              alt="Medical professionals in an operating room"
              fill
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-cover"
            />
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="flex h-full flex-col justify-center gap-4 "
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="font-fraunces text-[32px] lg:text-[42px] text-center lg:text-start font-medium  leading-[1.1] tracking-[-0.03em] text-[#0198ae] lg:text-start"
            >
              Our Values
            </motion.h2>

            <div className="flex flex-col gap-4">
              {OurValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                  }}
                  className="flex items-start gap-4"
                >
                  {/* Blue Dot */}
                  <span className="mt-[4px] h-3.5 w-3.5 shrink-0 rounded-full bg-[#0198ae]" />

                  <div>
                    <h3 className="font-fraunces text-[18px] font-semibold leading-tight text-black">
                      {value.title}
                    </h3>

                    <p className="font-nunito mt-1 text-[16px] leading-[1.4] text-[#353535]">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      {/* <section className="w-full overflow-hidden bg-[#fdf1e7] px-4 py-16 sm:px-6 md:px-8 lg:py-20"> */}
      <section className="relative w-full overflow-hidden bg-[#e7f6fa] px-4 py-16 sm:px-6 md:px-8 lg:py-20">
        {/* ================= BACKGROUND DECORATIONS ================= */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Top Left Soft Blob */}
          <div className=" absolute -left-[120px] top-[40px] h-[330px] w-[330px] rounded-[45%_55%_65%_35%/55%_40%_60%_45%] bg-[#0198ae]/[0.07] blur-[2px] " />

          {/* Right Side Large Blob */}
          <div className=" absolute -right-[160px] top-[30%] h-[430px] w-[430px] rounded-[60%_40%_35%_65%/50%_55%_45%_50%] bg-[#0198ae]/[0.06] " />

          {/* Bottom Center Soft Glow */}
          <div className=" absolute bottom-[-200px] left-[35%] h-[500px] w-[500px] rounded-full bg-[#0198ae]/[0.07] blur-[90px] " />

          {/* Left Outline Circle */}
          <div className=" absolute left-[5%] top-[40%] h-[150px] w-[150px] rounded-full border border-[#0198ae]/10 " />

          {/* Small Circle Inside */}
          <div className=" absolute left-[8%] top-[43%] h-[45px] w-[45px] rounded-full bg-white/40 " />

          {/* Right Bottom Decorative Ring */}
          <div className=" absolute bottom-[10%] right-[8%] h-[180px] w-[180px] rounded-full border-[25px] border-white/30 " />

          {/* Small Teal Dot */}
          <div className=" absolute bottom-[24%] right-[15%] h-[12px] w-[12px] rounded-full bg-[#0198ae]/20 " />

          {/* Small Top Dot */}
          <div className=" absolute left-[27%] top-[13%] h-[9px] w-[9px] rounded-full bg-[#0198ae]/25 " />

          {/* Subtle Dot Pattern */}
          <div className=" absolute inset-0 opacity-[0.28] [background-image:radial-gradient(circle,rgba(1,152,174,0.18)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:linear-gradient(to_bottom,transparent_5%,black_30%,black_70%,transparent_95%)] " />
        </div>

        <div className="absolute right-7 sm:right-25 top-15 sm:top-20 md:top-25">
          <CiMedicalCross className="text-7xl rotate-12 text-[#0198ae]" />
        </div>
        <div className="absolute left-7 md:left-35 xl:left-30 md:bottom-90 xl:bottom-120">
          {/* <CiMedicalCross className="text-7xl -rotate-12 text-[#0198ae]" /> */}
          <FaHandHoldingMedical className="text-6xl opacity-80 -rotate-12 text-[#0198ae]" />
        </div>

        <div className="mx-auto max-w-[1050px] ">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10 max-w-[850px] text-center md:mb-12"
          >
            <p className="mb-2 text-[14px] font-semibold text-[#0198ae]">
              Driving Excellence
            </p>

            <h2 className="font-fraunces mb-2 text-3xl font-bold leading-tight text-[#111] sm:text-4xl lg:text-[42px]">
              Our Mission
            </h2>

            <p className="font-nunito mx-auto max-w-[850px] text-[14px] leading-7 text-[#333] sm:text-[16px]">
              Our mission is to continuously innovate and improve our pharmacy
              management software to meet the evolving needs of pharmacies
              everywhere. We aim to.
            </p>
          </motion.div>

          {/* Desktop */}
          <div className="hidden md:block">
            {missionItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={item.number}>
                  {/* Item */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.55 }}
                    transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex min-h-[150px] items-center"
                  >
                    {/* LEFT ITEM */}
                    {isLeft && (
                      <>
                        <motion.div
                          initial={{ scale: 0.7 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.15,
                          }}
                          className="font-fraunces absolute left-[10px] top-1/2 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-[#0198ae] text-[26px] font-semibold text-white"
                        >
                          {item.number}
                        </motion.div>

                        <div className="ml-[120px] w-[390px]">
                          <h3 className="font-fraunces mb-2 text-[19px] font-medium leading-tight text-[#111] lg:text-[20px]">
                            {item.title}
                          </h3>

                          <p className="font-nunito text-[14px] leading-[1.65] text-gray-500 lg:text-[15px]">
                            {item.description}
                          </p>
                        </div>
                      </>
                    )}

                    {/* RIGHT ITEM */}
                    {!isLeft && (
                      <>
                        <div className="ml-auto mr-[120px] w-[390px]">
                          <h3 className="font-fraunces mb-2 text-[19px] font-medium leading-tight text-[#111] lg:text-[20px]">
                            {item.title}
                          </h3>

                          <p className="font-nunito text-[14px] leading-[1.65] text-gray-500 lg:text-[15px]">
                            {item.description}
                          </p>
                        </div>

                        <motion.div
                          initial={{ scale: 0.7 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.15,
                          }}
                          className="font-fraunces absolute right-[10px] top-1/2 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-[#0198ae] text-[26px] font-semibold text-white"
                        >
                          {item.number}
                        </motion.div>
                      </>
                    )}
                  </motion.div>

                  {/* Connector */}
                  {index !== missionItems.length - 1 && (
                    <Connector direction={isLeft ? "right" : "left"} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="relative md:hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "top" }}
              className="absolute bottom-8 left-[25px] top-8 border-l-[3px] border-dashed border-[#0198ae]"
            />

            <div className="space-y-10">
              {missionItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex min-h-[145px] items-center pl-[70px]"
                >
                  <motion.div
                    initial={{ scale: 0.6 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-0 top-1/2 z-10 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full bg-[#0198ae] text-[21px] font-semibold text-white"
                  >
                    {item.number}
                  </motion.div>

                  <div>
                    <h3 className="mb-2 text-[17px] font-bold leading-tight text-[#111]">
                      {item.title}
                    </h3>

                    <p className="text-[13px] leading-[1.7] text-[#333]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-[10px] md:grid-cols-2">
          {cards.map((card) => (
            <HealthcareCard key={card.id} card={card} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <Cta />

      {/* Faqs */}
      <FAQSection
        badge="Help & Support"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our real estate ERP platform, inventory management, procurement, and project operations."
        image={homeFAQs}
        imageAlt="Real estate ERP support"
        faqs={faqData}
      />
    </div>
  );
};

export default page;
