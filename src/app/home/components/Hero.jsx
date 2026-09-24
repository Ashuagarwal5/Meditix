// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// // Icons
// import { FiArrowRight, FiArrowUpRight, FiCheck } from "react-icons/fi";

// // assets
// import homeHero from "../../../assets/homeHero.webp";
// import homeHero2 from "../../../assets/homeHero2.png";

// const Hero = () => {
//   return (
//     <section className="container mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-10 py-12 xl:py-22 ">
//       <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-12 xl:gap-16    ">
//         {/* ================ LEFT CONTENT ====================*/}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 24,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.65,
//             ease: "easeOut",
//           }}
//           className="relative z-10  flex flex-col items-center lg:items-start gap-4 sm:gap-4 "
//         >
//           {/* Eyebrow */}

//           <div className="flex items-center ">
//             <span className="text-[12px] font-medium px-3 py-1 uppercase rounded-full tracking-[0.19em] text-white bg-[#0198ae] ">
//               DESIGNED FOR TODAY'S PHARMACIES
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className=" text-[36px] sm:text-[46px] xl:text-[55px] text-center lg:text-left font-medium leading-[1.03] tracking-[-0.045em]  ">
//             Manage Your Whole
//             <span className="text-[#0198ae]"> Pharmacy Business </span>
//             From a Single Smart Dashboard
//             <br className="hidden lg:block" />
//           </h1>

//           {/* Description */}
//           <p className=" text-[15px] sm:text-[18px]  text-[#687E90] text-center lg:text-justify ">
//             Our pharmacy management software frees your pharmacy from paper
//             registers and spreadsheets, keeping every operation fast, accurate,
//             and in sync.
//           </p>

//           {/* ACTIONS */}

//           <div className=" flex flex-col sm:flex-row items-start sm:items-center gap-4">
//             <Link
//               href="/contact"
//               className=" group flex items-center justify-center gap-3 text-[14px] font-semibold  text-white py-3 px-5 rounded-lg border-1 border-[#0198ae] bg-[#0198ae] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-12px_rgba(12,121,207,0.8)] transition-all duration-300  "
//             >
//               Book a free demo
//               <FiArrowUpRight
//                 size={16}
//                 className=" transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 "
//               />
//             </Link>
//             <Link
//               href="/about"
//               className=" group flex items-center justify-center gap-3 text-[14px] font-semibold text-[#0198ae] py-3 px-5 rounded-lg  border-1 border-[#0198ae] hover:bg-[#0198ae] hover:text-white hover:-translate-y-0.5  transition-all duration-300  "
//             >
//               Learn More
//               <FiArrowRight
//                 size={16}
//                 className=" transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 "
//               />
//             </Link>
//           </div>
//         </motion.div>

//         {/*  RIGHT DASHBOARD  */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             x: 35,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             duration: 0.75,
//             delay: 0.12,
//             ease: "easeOut",
//           }}
//           className="relative z-10 mx-auto w-full max-w-[590px]"
//         >
//           <div
//             aria-hidden="true"
//             className=" absolute -bottom-[70px] -right-[55px] -top-[70px] -z-10 w-[110%] rounded-l-[50%] bg-[#d1e7e7] max-lg:-bottom-10 max-lg:-right-5 max-lg:-top-10 max-lg:w-[105%] "
//           />

//           {/* DASHBOARD WINDOW */}

//           <div className=" relative overflow-hidden rounded-xl border border-[#D3E1EB] bg-white shadow-[0_28px_70px_rgba(18,75,113,0.12)] ">
//             {/* Browser header */}

//             <div className=" flex items-center justify-between h-[48px] border-b border-[#DCE8F0] bg-white px-4 ">
//               {/* dots */}

//               <div className="flex items-center gap-[5px]">
//                 <span className="h-[7px] w-[7px] rounded-full bg-[#DCE6EC]" />
//                 <span className="h-[7px] w-[7px] rounded-full bg-[#DCE6EC]" />
//                 <span className="h-[7px] w-[7px] rounded-full bg-[#DCE6EC]" />
//               </div>

//               <strong className="text-[14px] font-bold text-[#0198ae]">
//                 <span className="text-[#0198ae]"> </span> Analytics Dashboard
//                 Overview
//               </strong>

//               <span className="text-[11px] text-[#39926A]">Today · Live</span>
//             </div>

//             {/* Actual dashboard image */}

//             <div className="relative bg-white">
//               <Image
//                 src={homeHero2}
//                 alt="Meditix pharmacy analytics dashboard"
//                 width={860}
//                 height={484}
//                 priority
//                 fetchPriority="high"
//                 sizes="(max-width: 1024px) 90vw, 590px"
//                 className=" block h-auto w-full object-contain "
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Icons
import { FiArrowRight, FiArrowUpRight, FiCheck } from "react-icons/fi";

// assets
import homeHero from "../../../assets/homeHero.webp";
import homeHero2 from "../../../assets/homeHero2.png";

const Hero = () => {
  return (
    <section className="container mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-10 py-12 xl:py-22 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-12 xl:gap-16    ">
        {/* ================ LEFT CONTENT ====================*/}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="relative z-10  flex flex-col items-center lg:items-start gap-4 sm:gap-4 "
        >
          {/* Eyebrow */}

          <div className="flex items-center ">
            <span className="text-[12px] font-medium px-3 py-1 uppercase rounded-full tracking-[0.19em] text-white bg-[#0198ae] ">
              DESIGNED FOR TODAY'S PHARMACIES
            </span>
          </div>

          {/* Heading */} 
          <h1 className="mt-2 font-fraunces text-[36px] sm:text-[46px] xl:text-[52px] text-center lg:text-left font-medium leading-[1.03] tracking-[-0.015em]  ">
            Manage Your Whole
            <span className="text-[#0198ae]"> Pharmacy Business </span>
            From a Single Smart Dashboard
            <br className="hidden lg:block" />
          </h1>

          {/* Description */}
          <p className="font-nunito text-[15px] sm:text-[20px]  text-[#687E90] tracking-[-0.015em] text-center lg:text-justify ">
            Our pharmacy management software Frees your pharmacy from paper
            registers and spreadsheets, keeping every operation fast, accurate,
            and in sync.
          </p>

          {/* ACTIONS */}

          <div className=" flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact"
              className=" group flex items-center justify-center gap-3 text-[14px] font-semibold  text-white py-3 px-5 rounded-lg border-1 border-[#0198ae] bg-[#0198ae] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-12px_rgba(12,121,207,0.8)] transition-all duration-300  "
            >
              Book a free demo
              <FiArrowUpRight
                size={16}
                className=" transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 "
              />
            </Link>
            <Link
              href="/about"
              className=" group flex items-center justify-center gap-3 text-[14px] font-semibold text-[#0198ae] py-3 px-5 rounded-lg  border-1 border-[#0198ae] hover:bg-[#0198ae] hover:text-white hover:-translate-y-0.5  transition-all duration-300  "
            >
              Learn More
              <FiArrowRight
                size={16}
                className=" transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 "
              />
            </Link>
          </div>
        </motion.div>

        {/*  RIGHT DASHBOARD  */}

        <motion.div
          initial={{
            opacity: 0,
            x: 35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.12,
            ease: "easeOut",
          }}
          className="relative z-10 mx-auto w-full max-w-[590px]"
        >
          {/* <div
            aria-hidden="true"
            className=" absolute -bottom-[70px] -right-[55px] -top-[70px] -z-10 w-[110%] rounded-l-[50%] bg-[#d1e7e7] max-lg:-bottom-10 max-lg:-right-5 max-lg:-top-10 max-lg:w-[105%] "
          /> */}

          {/* DASHBOARD WINDOW */}

          <div className=" relative overflow-hidden rounded-xl  bg-white ">
            {/* Browser header */}

              {/* dots */}
            {/* <div className=" flex items-center justify-between h-[48px] border-b border-[#DCE8F0] bg-white px-4 ">

              <div className="flex items-center gap-[5px]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#DCE6EC]" />
                <span className="h-[7px] w-[7px] rounded-full bg-[#DCE6EC]" />
                <span className="h-[7px] w-[7px] rounded-full bg-[#DCE6EC]" />
              </div>

              <strong className="text-[14px] font-bold text-[#0198ae]">
                <span className="text-[#0198ae]"> </span> Analytics Dashboard
                Overview
              </strong>

              <span className="text-[11px] text-[#39926A]">Today · Live</span>
            </div> */}

            {/* Actual dashboard image */}

            <div className="relative bg-white">
              <Image
                src={homeHero2}
                alt="Meditix pharmacy analytics dashboard"
                width={860}
                height={484}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 90vw, 590px"
                className=" block h-auto w-full object-contain "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
