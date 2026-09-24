"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Cta = () => {
  return (
    <div>
      <section id="contact" className="w-full bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className=" relative overflow-hidden lg:flex lg:items-center lg:justify-between lg:gap-12 rounded-xl bg-[#0198ae] px-6 sm:px-8 lg:px-12 py-9 sm:py-10 lg:py-12 "
          >
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className=" pointer-events-none absolute -right-24 -top-32 h-[320px] w-[320px] rounded-full border border-white/10 "
            />

            <div
              aria-hidden="true"
              className=" pointer-events-none absolute -bottom-36 right-20 h-[270px] w-[270px] rounded-full border border-white/10 "
            />

            {/* LEFT CONTENT */}
            <div className="relative z-10 max-w-[760px]">
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#D9EFFF]" />

                <span
                  className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#D9EFFF]
                "
                >
                  Ready when you are
                </span>
              </div>

              {/* Heading */}
              <h2 className=" font-fraunces mt-2 max-w-[720px] text-[34px] sm:text-[40px] lg:text-[46px] text-white font-medium leading-[1.1]" >
                Make your next pharmacy day feel lighter.
              </h2>

              {/* Description */}
              <p className=" font-nunito mt-2 max-w-[650px] text-[17px] leading-[1.7] text-[#D6ECFB] " >
                See how Meditix fits your counter, team and growth plans in a
                focused 30-minute walkthrough.
              </p>
            </div>

            {/* RIGHT CTA */}
            <motion.a
              href="mailto:hello@meditix.in"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className=" mt-7 lg:mt-0 relative z-10 inline-flex items-center justify-center gap-2 shrink-0 text-[15px] text-[#0198ae] font-semibold rounded-lg bg-white px-5 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(0,0,0,0.16)] "
            >
              Book a free demo
              <span className=" transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 " >
               
                <FiArrowUpRight size={16} />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
