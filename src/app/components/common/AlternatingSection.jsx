"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AlternatingSection = ({
  items = [],
  sectionTitle,
  sectionDescription,
}) => {
  return (
    <section className="container mx-auto bg-white px-4 sm:px-6 lg:px-10 py-10  ">
      {/* <div className="mx-auto container px-5 sm:px-8 lg:px-10"> */}

      {/* Optional Section Heading */}
      {(sectionTitle || sectionDescription) && (
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-10">
          {sectionTitle && (
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-[42px] font-medium  text-slate-900"
            >
              {sectionTitle}
            </motion.h2>
          )}

          {sectionDescription && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-3 text-base leading-7 text-slate-600 sm:text-lg"
            >
              {sectionDescription}
            </motion.p>
          )}
        </div>
      )}

      {/* Rows */}
      <div className="space-y-10 lg:space-y-10">
        {items.map((item, index) => {
          const imageOnLeft = index % 2 === 0;

          return (
            <div
              key={item.id || index}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: imageOnLeft ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                className={`${imageOnLeft ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-slate-100">
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: imageOnLeft ? 60 : -60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.85,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                className={`${imageOnLeft ? "lg:order-2" : "lg:order-1"}`}
              >
                {/* Small Label */}
                {/* {item.label && (
                  <span className="hidden mb-4 xl:inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                    {item.label}
                  </span>
                )} */}

                {/* Title */}
                {/* <h3 className="text-3xl sm:text-4xl font-medium text-slate-900 ">
                    {item.title}
                  </h3> */}
                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-medium text-slate-900">
                  {item.highlight
                    ? item.title
                        .split(item.highlight)
                        .map((part, index, arr) => (
                          <span key={index}>
                            {part}
                            {index < arr.length - 1 && (
                              <span className="text-[#0198ae] font-semibold">
                                {item.highlight}
                              </span>
                            )}
                          </span>
                        ))
                    : item.title}
                </h3>

                {/* Description */}
                {item.description && (
                  <p className="mt-2 text-base leading-7 text-slate-500   ">
                    {item.description}
                  </p>
                )}

                {/* Bullet Points */}
                {item.bullets?.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bulletIndex}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: bulletIndex * 0.08,
                        }}
                        viewport={{
                          once: true,
                        }}
                        className="flex items-start gap-3"
                      >
                        {/* Check Icon */}
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-3.5 w-3.5 text-cyan-600"
                          >
                            <path
                              d="M4 10L8 14L16 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        <span className="text-base leading-7 text-slate-700">
                          {bullet}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {/* Optional Button */}
                {/* {item.buttonText && (
                    <motion.a
                      href={item.buttonLink || "#"}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0198ae] px-6 py-3.5 text-sm font-semibold text-white transition-shadow hover:shadow-lg"
                    >
                      {item.buttonText}

                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-4 w-4"
                      >
                        <path
                          d="M4 10H16M11 5L16 10L11 15"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.a>
                  )} */}
              </motion.div>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </section>
  );
};

export default AlternatingSection;
