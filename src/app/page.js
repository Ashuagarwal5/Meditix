// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// // Icons
// import { FiArrowRight, FiArrowUpRight, FiCheck } from "react-icons/fi";
// import { Check } from "lucide-react";
// import {
//   ReceiptText,
//   PackageCheck,
//   Users,
//   PanelsTopLeft,
//   FilePenLine,
//   ChartNoAxesCombined,
//   ArrowRight,
//   BriefcaseMedical,
//   ChartNoAxesColumnIncreasing,
//   MonitorCheck,
// } from "lucide-react";
// import { FaArrowRight } from "react-icons/fa6";

// // assets
// import homeHero from "../assets/homeHero.webp";
// import homeAbout from "../assets/homeAbout.webp";
// import homeInsights from "../assets/homeInsights.jpg";

// // Components
// import FAQs from "./components/FAQs";
// import HowItWorks from "./home/components/HowItWorks";

// const features = [
//   {
//     number: "01",
//     icon: ReceiptText,
//     title: "WorkFlow Management",
//     description:
//       "This is the software used directly at the counter. It handles barcode scanning, GST-compliant invoice generation, multiple payment modes (cash, card, UPI), discounts, and returns. A good POS system is fast enough to keep queues short during peak hours while still keeping every transaction accurate and traceable.",
//   },
//   {
//     number: "02",
//     icon: PackageCheck,
//     title: "Inventory Management",
//     description:
//       "This tracks how much stock you have, where it is, and when it will expire. It works at a batch level, meaning it can tell you exactly which batch of a medicine is nearing its expiry date, so you can push it for sale or return it to the supplier before it becomes a loss. It also sends reorder alerts when stock of a fast-moving item runs low.",
//   },
//   {
//     number: "03",
//     icon: Users,
//     title: "E-Prescription Management",
//     description:
//       "This digitizes the process of recording, verifying, and tracking patient prescriptions. It maintains a history of what was prescribed, by whom, and when-which is especially important for repeat medications, controlled substances, and insurance or scheme-based purchases.",
//   },
//   {
//     number: "04",
//     icon: PanelsTopLeft,
//     title: "Supply Chain Management",
//     description:
//       "This builds and maintains customer profiles based on their purchase history. It's what allows a pharmacy to send refill reminders, run loyalty programs, and offer personalized service - turning one-time buyers into regular, returning customers.",
//   },
//   {
//     number: "05",
//     icon: FilePenLine,
//     title: "Multi-Branch / Chain Management",
//     description:
//       "For pharmacies operating more than one outlet, this software gives centralized visibility and control. Owners can compare performance across branches, manage stock transfers between locations, and set role-based access so staff only see what's relevant to their branch.",
//   },
//   {
//     number: "06",
//     icon: ChartNoAxesCombined,
//     title: "Billing & Payment Management",
//     description:
//       "This layer turns all the daily transaction data into actionable insights - sales trends, profit margins, best and worst-performing products, and staff performance - without anyone having to manually build a report in Excel.",
//   },
// ];

// const points = [
//   "Trusted by independent pharmacies and growing chains across the country",
//   "97% customer satisfaction rate",
//   "Dedicated onboarding & support team for every new pharmacy",
//   "Continuous updates based on real user feedback",
//   "Data security and backup built into the platform",
// ];

// const audienceItems = [
//   {
//     title: "Independent Pharmacy",
//     description:
//       "Move faster with fewer manual steps and a clear view of every shelf. Ideal for single-location pharmacies that want to eliminate manual billing and stock errors without a complicated setup process.",
//   },
//   {
//     title: "Growing Pharmacy Chain",
//     description:
//       "Keep branch-level autonomy while centralizing performance, stock, and controls across outlets. Perfect for pharmacies expanding to 2, 5, or 20+ branches who need one owner-level view without losing local flexibility.",
//   },
//   {
//     title: "Clinic & Hospital Pharmacy",
//     description:
//       "Connect dispensing, purchasing, and reporting across your entire care team. Built to handle higher transaction volumes, prescription compliance, and coordination between pharmacy staff and clinical teams.",
//   },
// ];

// const workflowSteps = [
//   {
//     number: "01",
//     label: "STEP 01",
//     title: "Bring your pharmacy in",
//     description:
//       "We help configure products, stock, suppliers, taxes and team access lorem lorem lorem .",
//     tags: [
//       { label: "Data Migration" },
//       { label: "Tax & Roles" },
//       { label: "Fast Onboarding", blue: true },
//     ],
//     icon: BriefcaseMedical,
//   },
//   {
//     number: "02",
//     label: "STEP 02",
//     title: "Run the work in one flow",
//     description:
//       "Billing updates inventory; purchases update costs; every action stays connected.",
//     tags: [
//       { label: "Real-time Sync", blue: true },
//       { label: "Auto Stock Deduct" },
//       { label: "Live Costing" },
//     ],
//     icon: ChartNoAxesColumnIncreasing,
//   },
//   {
//     number: "03",
//     label: "STEP 03",
//     title: "Make better decisions",
//     description:
//       "See sales, margins, expiry risks and branch performance while they are actionable.",
//     tags: [
//       { label: "Expiry Alerts", danger: true },
//       { label: "Branch Analytics" },
//       { label: "Profit Margins", blue: true },
//     ],
//     icon: MonitorCheck,
//   },
// ];

// const benefits = [
//   "Daily sales and margin visibility, updated in real time",
//   "Fast, slow, non-moving stock, flagged automatically",
//   "Branch and staff performance, compared side by side",
//   "Expiry risk alerts before stock becomes a write-off",
//   "Purchase and reorder suggestions based on sales trends",
//   "Smarter purchasing and reorder decisions",
// ];

// export default function Home() {
//   return (
//     <>
//       <main>
//         {/* Hero */}
//         <section className="container mx-auto px-4 sm:px-6 lg:px-10  relative overflow-hidden py-12 lg:py-16 ">
//           <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-12 xl:gap-16    ">
//             {/* ================ LEFT CONTENT ====================*/}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 24,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.65,
//                 ease: "easeOut",
//               }}
//               className="relative z-10  flex flex-col items-center lg:items-start gap-4 sm:gap-4 "
//             >
//               {/* Eyebrow */}

//               <div className="flex items-center ">
//                 <span className="text-[13px] font-medium px-3 py-1 uppercase rounded-full tracking-[0.19em] text-white bg-[#0198ae] ">
//                   Built for modern pharmacies
//                 </span>
//               </div>

//               {/* Heading */}
//               <h1 className=" text-[43px] sm:text-[54px] lg:text-[55px] text-center lg:text-left font-medium leading-[1.03] tracking-[-0.045em] xl:tracking-tight ">
//                 Run Your Entire
//                 <br className="hidden lg:block" />
//                 <span className="text-[#0198ae]"> Pharmacy </span>
//                 From One
//                 <br className="hidden lg:block" /> Simple Dashboard
//               </h1>

//               {/* Description */}
//               <p className=" text-[16px] sm:text-[18px] leading-relaxed text-[#687E90] text-center lg:text-left ">
//                 Running a pharmacy means juggling billing counters, stock rooms,
//                 expiry dates, supplier orders, and hundreds of customer
//                 conversations-often all at the same time. Most pharmacies still
//                 manage this using registers, spreadsheets, and memory, which
//                 leads to missed reorders, expired stock, and billing errors that
//                 cost money every single day.
//               </p>
//               <p className=" text-[16px] sm:text-[18px] leading-relaxed text-[#687E90] text-center lg:text-left ">
//                 Built for independent pharmacies, growing chains, and hospital
//                 pharmacies that want less manual work, fewer errors, and more
//                 clarity every single day.
//               </p>

//               {/* ACTIONS */}

//               <div className=" flex flex-col sm:flex-row items-start sm:items-center gap-4">
//                 <a
//                   href="#contact"
//                   className=" group flex items-center justify-center gap-3 text-[14px] font-semibold  text-white py-3 px-5 rounded-lg border-1 border-[#0198ae] bg-[#0198ae] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-12px_rgba(12,121,207,0.8)] transition-all duration-300  "
//                 >
//                   Book a free demo
//                   <FiArrowUpRight
//                     size={16}
//                     className=" transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 "
//                   />
//                 </a>
//                 <a
//                   href="#contact"
//                   className=" group flex items-center justify-center gap-3 text-[14px] font-semibold text-[#0198ae] py-3 px-5 rounded-lg  border-1 border-[#0198ae] hover:bg-[#0198ae] hover:text-white hover:-translate-y-0.5  transition-all duration-300  "
//                 >
//                   See How It Works
//                   <FiArrowRight
//                     size={16}
//                     className=" transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 "
//                   />
//                 </a>
//               </div>
//             </motion.div>

//             {/*  RIGHT DASHBOARD  */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 35,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               transition={{
//                 duration: 0.75,
//                 delay: 0.12,
//                 ease: "easeOut",
//               }}
//               className="relative z-10 mx-auto w-full max-w-[590px]"
//             >
//               {/* LARGE BLUE BACKGROUND SHAPE */}
//               {/*
//               <div
//                 aria-hidden="true"
//                 className=" absolute -bottom-[70px] -right-[55px] -top-[70px]
//                       -z-10 w-[110%]
//                       rounded-l-[50%]

//                       bg-gradient-to-br
//                       from-[#EDF7FF]
//                       to-[#DCEEF9]

//                       max-lg:-bottom-10
//                       max-lg:-right-5
//                       max-lg:-top-10
//                       max-lg:w-[105%]
//                     "
//               /> */}

//               <div
//                 aria-hidden="true"
//                 className=" absolute -bottom-[70px] -right-[55px] -top-[70px]
//                       -z-10 w-[110%]
//                       rounded-l-[50%]

//                       bg-[#d1e7e7]

//                       max-lg:-bottom-10
//                       max-lg:-right-5
//                       max-lg:-top-10
//                       max-lg:w-[105%]
//                     "
//               />

//               {/* DASHBOARD WINDOW */}

//               <div className=" relative overflow-hidden rounded-xl border border-[#D3E1EB] bg-white shadow-[0_28px_70px_rgba(18,75,113,0.12)] ">
//                 {/* Browser header */}

//                 <div className=" flex items-center justify-between h-[48px] border-b border-[#DCE8F0] bg-white px-4 ">
//                   {/* dots */}

//                   <div className="flex items-center gap-[5px]">
//                     <span className="h-[7px] w-[7px] rounded-full bg-[#DCE6EC]" />
//                     <span className="h-[7px] w-[7px] rounded-full bg-[#DCE6EC]" />
//                     <span className="h-[7px] w-[7px] rounded-full bg-[#DCE6EC]" />
//                   </div>

//                   <strong className="text-[14px] font-bold text-[#0198ae]">
//                     <span className="text-[#0198ae]"> </span> Analytics
//                     Dashboard Overview
//                   </strong>

//                   <span className="text-[11px] text-[#39926A]">
//                     Today · Live
//                   </span>
//                 </div>

//                 {/* Actual dashboard image */}

//                 <div className="relative bg-white">
//                   <Image
//                     src={homeHero}
//                     alt="Meditix pharmacy analytics dashboard"
//                     width={860}
//                     height={484}
//                     priority
//                     fetchPriority="high"
//                     sizes="(max-width: 1024px) 90vw, 590px"
//                     className=" block h-auto w-full object-contain "
//                   />
//                 </div>
//               </div>

//               {/* =================================================
//                       FLOATING SUCCESS CARD
//                   ================================================== */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 12,
//                   scale: 0.97,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                 }}
//                 transition={{
//                   duration: 0.45,
//                   delay: 0.75,
//                 }}
//                 className="  absolute -bottom-5 right-[-16px] hidden items-center gap-2.5 rounded-[9px] bg-white px-4 py-3 shadow-[0_14px_35px_rgba(16,61,90,0.14)]  sm:flex "
//               >
//                 <div className=" flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF8F1] text-[#259565] ">
//                   <FiCheck size={14} />
//                 </div>

//                 <div className="flex flex-col">
//                   <strong className=" text-[11px]  text-[#183247] ">
//                     Dashboard synced
//                   </strong>

//                   <span className=" mt-0.25 text-[10px] text-[#687E90] ">
//                     Live pharmacy insights
//                   </span>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="container mx-auto bg-white px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
//           <div className="">
//             {/* Eyebrow */}
//             <motion.div
//               initial={{ opacity: 0, x: -12 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.7 }}
//               transition={{ duration: 0.45 }}
//               className="mb-4 flex items-center justify-center lg:justify-start gap-3"
//             >
//               <span className="h-px w-6 bg-[#0198ae]" />

//               <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0198ae]">
//                 UNDERSTANDING THE BASICS
//               </span>
//             </motion.div>

//             {/* Heading */}
//             <div className="mb-8 grid lg:grid-cols-2 gap-4 lg:gap-8 lg:items-center ">
//               <motion.h2
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="text-[36px] sm:text-[44px] text-center lg:text-left font-medium leading-[1.08] tracking-[-0.045em] text-[#07101f] "
//               >
//                 What is <span className="text-[#0198ae]">Pharmacy</span>
//                 <br />
//                 Management Software?
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 14 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.08 }}
//                 className="w-full h-full flex items-center text-[15px] text-center lg:text-left leading-[1.65] text-[#48546a]  "
//               >
//                 Pharmacy management software is used by a wide range of
//                 businesses - from small independent chemist shops to
//                 multi-branch retail pharmacy chains, and even in-house
//                 pharmacies inside hospitals and clinics. While the scale of
//                 usage differs, the underlying need is the same: accurate
//                 billing, reliable stock control, and clear visibility into how
//                 the business is doing.
//               </motion.p>
//             </div>

//             {/* Features */}
//             <motion.div
//               variants={{
//                 hidden: {},
//                 visible: {
//                   transition: {
//                     staggerChildren: 0.07,
//                   },
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.12 }}
//               className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px border border-[#edf0f47c] bg-[#edf0f4] "
//             >
//               {features.map((feature, index) => {
//                 const Icon = feature.icon;

//                 return (
//                   <motion.article
//                     key={feature.number}
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.12 }}
//                     transition={{
//                       duration: 0.45,
//                       delay: index * 0.07,
//                       ease: [0.22, 1, 0.36, 1],
//                     }}
//                     className="group flex flex-col gap-4 bg-white p-4 lg:p-5 transition-all duration-300 hover:bg-[#f9faff] cursor-pointer"
//                   >
//                     <div className=" flex items-center justify-center shrink-0 h-9 w-9  rounded-xl border border-[#d9e3f0] bg-white transition-colors duration-300  group-hover:bg-[#0198ae]  ">
//                       <Icon
//                         size={22}
//                         strokeWidth={1.7}
//                         className="text-[#075fc9] group-hover:text-white "
//                       />
//                     </div>

//                     <div className="flex flex-col gap-1.5 h-full ">
//                       <h3 className=" text-[18px] font-semibold text-[#07152b]">
//                         {feature.title}
//                       </h3>

//                       <p className=" text-[14px] leading-[1.65] text-[#59657a] ">
//                         {feature.description}
//                       </p>
//                     </div>

//                     <a
//                       href="#"
//                       className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#075fc9] transition-all duration-200 hover:gap-2.5"
//                     >
//                       Learn more
//                       <ArrowRight size={11} strokeWidth={1.8} />
//                     </a>
//                   </motion.article>
//                 );
//               })}
//             </motion.div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section className="mx-auto container w-full bg-white px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
//           <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
//             {/* Left Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="relative w-full"
//             >
//               <div className=" w-full overflow-hidden rounded-3xl">
//                 <Image
//                   src={homeAbout}
//                   alt="Medical professional working in a laboratory"
//                   width={550}
//                   height={750}
//                   className=" h-full w-full object-cover"
//                 />
//               </div>
//             </motion.div>

//             {/* Right Content */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className=" flex flex-col items-center lg:items-start gap-4 "
//             >
//               <div className="flex flex-col gap-2">
//                 <motion.div
//                   initial={{ opacity: 0, x: -12 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.7 }}
//                   transition={{ duration: 0.45 }}
//                   className="flex items-center justify-center lg:justify-start gap-3"
//                 >
//                   <span className="h-px w-6 bg-[#0198ae]" />

//                   <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0198ae]">
//                     WHY PHARMACIES TRUST US
//                   </span>
//                 </motion.div>

//                 <h3 className="  text-[36px] sm:text-[42px] text-center lg:text-left font-medium leading-[1.12] tracking-[-0.035em] text-[#101828]">
//                   Built on Real
//                   <span className="text-[#0198ae] font-semibold">
//                     {" "}
//                     Pharmacy{" "}
//                   </span>
//                   Expertise
//                 </h3>
//               </div>

//               <div className="space-y-3 text-[15px] text-center lg:text-left leading-[1.55] text-[#667085] sm:text-[16px]">
//                 <p>
//                   Our platform isn't built in isolation by developers guessing
//                   at what a pharmacy needs - it's built alongside pharmacy
//                   owners and pharmacists who use it every day at the counter.
//                   Every workflow, from billing to expiry tracking, reflects how
//                   pharmacies actually operate on the ground. We continuously
//                   refine our system based on real feedback from real counters,
//                   real stockrooms, and real customer interactions.
//                 </p>

//                 <p>
//                   We understand that switching software touches every part of
//                   your business - your staff, your suppliers, your customers,
//                   and your daily revenue. That's why we focus not just on
//                   features, but on making the transition smooth, supported, and
//                   worth it from day one.
//                 </p>
//               </div>

//               {/* Bullet Points */}
//               <ul className="space-y-2  text-center lg:text-left">
//                 {points.map((point, index) => (
//                   <motion.li
//                     key={point}
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       duration: 0.4,
//                       delay: 0.15 + index * 0.08,
//                     }}
//                     className="flex items-center gap-3 text-[15px] text-[#344054] sm:text-[16px]"
//                   >
//                     <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e0eef8]">
//                       <Check
//                         size={16}
//                         strokeWidth={3.5}
//                         className="text-[#268394]  "
//                       />
//                     </span>

//                     {point}
//                   </motion.li>
//                 ))}
//               </ul>

//               {/* CTA */}
//               <div className="flex ">
//                 <Link
//                   href="/about"
//                   // className="flex items-center justify-center text-[17px] text-[#fff] px-4 py-1.5  rounded-[9px] bg-[#0198ae] hover:bg-[#82d5e8]   font-mediumtransition-all duration-300 hover:-translate-y-0.5hover:shadow-lg"
//                   className="flex items-center justify-center gap-3 text-[14px] font-semibold text-white py-3 px-5 rounded-lg bg-[#0198ae] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-12px_rgba(12,121,207,0.8)] transition-all duration-300 "
//                 >
//                   {/* Know More About Us */}
//                   Book a Free Demo
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Audience */}
//         <section className=" w-full bg-[#F3F8FC] bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/images/Meditix2.jpg')",
//           }}
//         >
//         {/* <section className=" w-full bg-[#F3F8FC] "> */}
//           <div className="container mx-auto grid grid-cols-1 xl:grid-cols-[0.8fr_1.2fr] items-center xl:items-start gap-4  xl:gap-[90px] px-4 sm:px-6 lg:px-10 py-12 lg:py-16 ">
//             {/* LEFT CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{
//                 duration: 0.5,
//               }}
//               className="flex flex-col items-center xl:items-start"
//             >
//               {/* Label */}
//               <div className="flex items-center gap-[9px]">
//                 <span className="h-px w-6 bg-[#1261c9]" />

//                 <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0758be]">
//                   DESIGNED AROUND YOUR SCALE
//                 </span>
//               </div>

//               {/* Heading */}
//               <h2 className="mt-3 text-[37px]  text-center xl:text-left font-medium leading-[1.08] tracking-[-2px] text-[#09233A] sm:text-[42px] lg:text-[48px] lg:tracking-[-2.5px] ">
//                 One platform.
//                 <br />
//                 Your way of working.
//               </h2>

//               {/* Description */}
//               <p className=" mt-3 max-w-[390px] text-[16px]  text-center lg:text-left text-[#687E90] ">
//                 Every pharmacy is different - a single-counter shop doesn't need
//                 the same setup as a five-branch chain, and a hospital pharmacy
//                 has entirely different compliance needs.
//                 {/* That's why our platform is built to scale with you. Start with the workflows you need today, then add users, locations, and integrations as your pharmacy grows. */}
//               </p>

//               {/* CTA */}
//               <a
//                 href="#contact"
//                 className=" mt-1 inline-flex items-center text-[18px] font-semibold hover:ms-2 text-[#0198ae] gap-2 transition-all duration-300 "
//               >
//                 Find your fit
//                 {/* &nbsp;→ */}
//                 <FaArrowRight />
//               </a>
//             </motion.div>

//             {/* RIGHT CARDS */}
//             <div className=" grid grid-cols-1 gap-[14px] sm:grid-cols-3 ">
//               {audienceItems.map((item, index) => (
//                 <motion.article
//                   key={item.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{
//                     once: true,
//                     margin: "-40px",
//                   }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.08,
//                   }}
//                   className=" h-full rounded-[8px] border border-[#DCE8F0] bg-white px-[22px] py-[28px] text-center "
//                 >
//                   <h3 className=" text-[19px]  text-center lg:text-center font-semibold leading-[1.55] text-[#09233A] ">
//                     {item.title}
//                   </h3>

//                   <p className=" mt-2 text-[14px]  text-center lg:text-center leading-[1.7] text-[#687E90] ">
//                     {item.description}
//                   </p>
//                 </motion.article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* How it works */}
//         <HowItWorks />

//         {/* Insights */}
//         <section className="w-full bg-[#0A2D47] text-white">
//           <div className=" container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-16 ">
//             {/* LEFT IMAGE */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{
//                 duration: 0.55,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className=" w-full overflow-hidden rounded-xl bg-[#F8FAFC] p-4 sm:p-5 "
//             >
//               <div className="overflow-hidden rounded-lg bg-white">
//                 <Image
//                   src={homeInsights}
//                   alt="Pharmacy sales and prescription insights dashboard"
//                   width={900}
//                   height={630}
//                   className="h-auto w-full object-contain"
//                 />
//               </div>
//             </motion.div>

//             {/* RIGHT CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{
//                 duration: 0.55,
//                 delay: 0.08,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="flex h-full w-full flex-col justify-center"
//             >
//               {/* Label */}
//               <div className="flex items-center gap-3">
//                 <span className="h-px w-6 shrink-0 bg-[#0198ae]" />

//                 <span className=" text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0198ae] ">
//                   Live business intelligence
//                 </span>
//               </div>

//               {/* Heading */}
//               <h2 className=" mt-4 max-w-[570px] text-[36px] sm:text-[42px] lg:text-[46px] font-medium leading-[1.08] tracking-[-2px] text-white lg:tracking-[-2.5px] ">
//                 Know what needs attention before it becomes a problem.
//               </h2>

//               {/* Description */}
//               <p className=" mt-5 max-w-[570px] text-[16px] sm:text-[17px]  leading-relaxed text-[#B6CAD9] ">
//                 Most pharmacy owners find out about a problem - a stockout, a
//                 slow-moving product, an underperforming branch - only after it's
//                 already cost them money. Our analytics dashboard flips that
//                 around. See the signals behind your daily operations -
//                 fast-moving items, expiry risk, profitability, and store
//                 performance - without assembling a single report.
//               </p>

//               {/* Benefits */}
//               <motion.ul
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={{
//                   hidden: {},
//                   visible: {
//                     transition: {
//                       staggerChildren: 0.08,
//                       delayChildren: 0.18,
//                     },
//                   },
//                 }}
//                 className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 "
//               >
//                 {benefits.map((benefit) => (
//                   <motion.li
//                     key={benefit}
//                     variants={{
//                       hidden: {
//                         opacity: 0,
//                         x: 10,
//                       },
//                       visible: {
//                         opacity: 1,
//                         x: 0,
//                         transition: {
//                           duration: 0.4,
//                           ease: [0.22, 1, 0.36, 1],
//                         },
//                       },
//                     }}
//                     className=" flex items-start gap-2 text-[14px] leading-[1.5] text-[#F1F7FB] "
//                   >
//                     {/* Check */}
//                     <span className=" mt-[1px] flex items-center justify-center shrink-0 h-[18px] w-[18px] rounded-full bg-[#124563] text-[11px] font-bold text-white  ">
//                       ✓
//                     </span>

//                     <span className="">{benefit}</span>
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             </motion.div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section id="contact" className="w-full bg-white">
//           <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{
//                 duration: 0.55,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className=" relative overflow-hidden lg:flex lg:items-center lg:justify-between lg:gap-12 rounded-xl bg-[#0198ae] px-6 sm:px-8 lg:px-12 py-9 sm:py-10 lg:py-12 "
//             >
//               {/* Decorative background */}
//               <div
//                 aria-hidden="true"
//                 className=" pointer-events-none absolute -right-24 -top-32 h-[320px] w-[320px] rounded-full border border-white/10 "
//               />

//               <div
//                 aria-hidden="true"
//                 className=" pointer-events-none absolute -bottom-36 right-20 h-[270px] w-[270px] rounded-full border border-white/10 "
//               />

//               {/* LEFT CONTENT */}
//               <div className="relative z-10 max-w-[760px]">
//                 {/* Label */}
//                 <div className="flex items-center gap-3">
//                   <span className="h-px w-6 bg-[#D9EFFF]" />

//                   <span
//                     className="
//                   text-[11px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#D9EFFF]
//                 "
//                   >
//                     Ready when you are
//                   </span>
//                 </div>

//                 {/* Heading */}
//                 <h2
//                   className="
//                 mt-4
//                 max-w-[720px]
//                 text-[34px]
//                 font-medium
//                 leading-[1.08]
//                 tracking-[-2px]
//                 text-white
//                 sm:text-[40px]
//                 lg:text-[46px]
//                 lg:tracking-[-2.5px]
//               "
//                 >
//                   Make your next pharmacy day feel lighter.
//                 </h2>

//                 {/* Description */}
//                 <p
//                   className="
//                 mt-5
//                 max-w-[650px]
//                 text-[15px]
//                 leading-[1.7]
//                 text-[#D6ECFB]
//                 sm:text-[16px]
//               "
//                 >
//                   See how Meditix fits your counter, team and growth plans in a
//                   focused 30-minute walkthrough.
//                 </p>
//               </div>

//               {/* RIGHT CTA */}
//               <motion.a
//                 href="mailto:hello@meditix.in"
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ duration: 0.2 }}
//                 className="
//               relative
//               z-10
//               mt-7
//               inline-flex
//               shrink-0
//               items-center
//               justify-center
//               gap-2
//               rounded-lg
//               bg-white
//               px-5
//               py-3.5
//               text-[14px]
//               font-semibold
//               text-[#0198ae]
//               shadow-[0_10px_30px_rgba(0,0,0,0.10)]
//               transition-shadow
//               duration-300
//               hover:shadow-[0_14px_34px_rgba(0,0,0,0.16)]
//               lg:mt-0
//             "
//               >
//                 Book a free demo
//                 <span
//                   className="
//                 transition-transform
//                 duration-300
//                 group-hover:translate-x-0.5
//                 group-hover:-translate-y-0.5
//               "
//                 >
//                   ↗
//                 </span>
//               </motion.a>
//             </motion.div>
//           </div>
//         </section>

//         {/* FAQs */}
//         <FAQs />
//       </main>
//     </>
//   );
// }

import React from "react";
import Hero from "./home/components/Hero";
import PharmacyFeatureCards from "./home/components/PharmacyFeatureCards";
import Expertise from "./home/components/Expertise";
import PharmacyScaleSection from "./home/components/PharmacyScaleSection";
import HowItWorks from "./home/components/HowItWorks";
import Benefits from "./home/components/Benefits";
import Cta from "./home/components/Cta";
import FAQSection from "./components/common/FAQSection";

// assets0
import homeFAQs from "../assets/homeFAQs.webp";

const page = () => {
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

  return (
    <div>
      <Hero />
      {/* <Services /> */}
      <PharmacyFeatureCards />
      <Expertise />
      <PharmacyScaleSection />
      <HowItWorks />
      <Benefits />
      <Cta />
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
