"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiSearch,
  FiClock,
  FiX,
} from "react-icons/fi";
import { posts } from "./posts";

const categories = [
  "All articles",
  "Pharmacy operations",
  "Inventory",
  "Digital tools",
  "Business growth",
];

export default function Blog() {
  const [category, setCategory] = useState("All articles");
  const [query, setQuery] = useState("");
  const reduced = useReducedMotion();
  const filtered = posts.filter(
    (post) =>
      (category === "All articles" || post.category === category) &&
      `${post.title} ${post.description} ${post.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const reveal = {
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: reduced ? 0 : 0.55 },
  };
  const featured = posts[0];

  return (
    <main className="bg-white font-[Arial,Helvetica,sans-serif] text-[#173a3e] [&_a]:outline-offset-[5px] [&_button]:outline-offset-[5px] [&_input]:outline-offset-[5px] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-[#007f91] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-[#007f91] [&_input:focus-visible]:outline-2 [&_input:focus-visible]:outline-[#007f91] motion-reduce:[&_*]:transition-none">
      <section className="relative overflow-hidden bg-[#eef8f6] px-[6%] pt-[75px] text-center min-[1500px]:px-[calc((100%_-_1180px)/2)] max-[760px]:px-[22px] max-[760px]:pt-[55px] [&_h1]:my-6 [&_h1]:text-[clamp(42px,5.8vw,76px)] [&_h1]:font-medium [&_h1]:leading-[1.09] [&_h1]:tracking-[-3.5px] max-[760px]:[&_h1]:tracking-[-2px] max-[520px]:[&_h1]:text-[43px] [&_em]:font-[Georgia,serif] [&_em]:font-normal [&_em]:text-[#007f91] [&_p]:text-base [&_p]:leading-[1.8] [&_p]:text-[#627779] max-[760px]:[&_p]:text-sm">
        <motion.div
          className="absolute -right-[330px] top-[15px] size-[550px] rounded-full border border-[#c9e4df] shadow-[0_0_0_55px_#dceee650,0_0_0_110px_#dceee640]"
          aria-hidden="true"
          initial={false}
          animate={{ y: reduced ? 0 : [-15, 35] }}
          transition={{
            duration: reduced ? 0 : 10,
            repeat: reduced ? 0 : Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div {...reveal} className="relative z-1">
          <span className="inline-flex items-center gap-[9px] text-[10px] font-bold tracking-[2px] text-[#007f91] max-[520px]:text-[9px] max-[520px]:tracking-[1.6px] [&>span]:size-[7px] [&>span]:rounded-full [&>span]:bg-[#0198ae] [&>span]:shadow-[0_0_0_5px_#0198ae12]">
            <span /> THE MEDITIX JOURNAL
          </span>
          <h1>
            Fresh perspectives.
            <br />
            <em>Smarter pharmacies.</em>
          </h1>
          <p>
            Ideas, insights, and practical guides to help you simplify the
            everyday
            <br className="max-[760px]:hidden" /> and build a better tomorrow
            for your pharmacy.
          </p>
          <a
            href="#articles"
            className="mt-[25px] mb-[50px] inline-flex items-center gap-5 border-b border-[#8fb8b6] pb-2 text-[13px] font-semibold [&_svg]:transition-transform [&_svg]:duration-250 hover:[&_svg]:translate-x-[5px]"
          >
            Explore the journal <FiArrowRight />
          </a>
        </motion.div>
        <div className="flex justify-between border-t border-[#d3e6e1] py-[18px] text-[10px] tracking-[1.4px] text-[#657f7b] max-[760px]:gap-[15px] max-[760px]:text-[8px] max-[760px]:tracking-[0.6px] max-[760px]:[&>span:last-child]:hidden">
          <span>KNOWLEDGE THAT MOVES YOU FORWARD</span>
          <span>Made for pharmacy teams ↗</span>
        </div>
      </section>

      <div className="mx-auto max-w-[1260px] px-10 max-[760px]:px-[22px]">
        <motion.section
          {...reveal}
          className="mt-[54px] mb-[85px] grid grid-cols-[1.12fr_1fr] overflow-hidden rounded-[20px] border border-[#e0e8e6] bg-[#fafcfb] max-[760px]:mt-[30px] max-[760px]:mb-[55px] max-[760px]:grid-cols-1 [&_h2]:text-[clamp(26px,2.8vw,37px)] [&_h2]:font-medium [&_h2]:leading-[1.22] [&_h2]:tracking-[-1px] max-[760px]:[&_h2]:text-[30px] [&_h2_a:hover]:text-[#007f91]"
          aria-labelledby="featured-title"
        >
          <Link
            href={`/blog/${featured.slug}`}
            className="relative min-h-[400px] overflow-hidden max-[760px]:aspect-[1.5] max-[760px]:min-h-0 [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-650 [&_img]:ease-[cubic-bezier(0.2,0.65,0.3,1)] hover:[&_img]:scale-[1.045]"
            aria-label={`Read ${featured.title}`}
          >
            <Image
              src={featured.image}
              alt="Modern pharmacy workspace"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 55vw"
            />
            <span className="absolute top-6 left-6 flex items-center gap-[22px] rounded-[5px] bg-white px-[14px] py-2.5 text-[10px] font-bold tracking-[1px]">
              EDITOR’S PICK <FiArrowUpRight />
            </span>
          </Link>
          <div className="flex flex-col justify-center p-10 max-[1050px]:p-7 max-[760px]:p-[27px] [&>p]:mt-[18px] [&>p]:text-sm [&>p]:leading-[1.85] [&>p]:text-[#657678]">
            <span className="inline-flex items-center gap-[9px] text-[10px] font-bold tracking-[2px] text-[#007f91] max-[520px]:text-[9px] max-[520px]:tracking-[1.6px] [&>span]:size-[7px] [&>span]:rounded-full [&>span]:bg-[#0198ae] [&>span]:shadow-[0_0_0_5px_#0198ae12]">
              THE BIG PICTURE
            </span>
            <div className="mt-[25px] mb-[14px] flex items-center gap-5 text-[11px] text-[#617779] [&>span]:inline-flex [&>span]:items-center [&>span]:gap-[5px] [&>span:first-child]:font-semibold [&>span:first-child]:text-[#007f91]">
              <span>{featured.category}</span>
              <span>
                <FiClock /> {featured.readTime} min read
              </span>
            </div>
            <h2 id="featured-title">
              <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
            </h2>
            <p>{featured.description}</p>
            <div className="mt-[30px] flex items-center justify-between gap-2.5 max-[520px]:[&_small]:text-[9px]">
              <div className="flex items-center gap-[11px] text-[11px] [&_strong]:font-semibold [&_small]:mt-1 [&_small]:block [&_small]:text-[10px] [&_small]:text-[#788687]">
                <span className="grid size-[38px] place-items-center rounded-full bg-[#e2eeeb] font-[Georgia,serif] text-2xl font-bold text-[#007f91]">
                  m.
                </span>
                <div>
                  <strong>Meditix Editorial</strong>
                  <small>Ideas for better everyday operations</small>
                </div>
              </div>
              <Link
                className="grid size-[42px] shrink-0 place-items-center rounded-full border border-[#c9d9d5] text-xl transition-colors duration-200 hover:bg-[#007f91] hover:text-white"
                href={`/blog/${featured.slug}`}
                aria-label="Read the featured article"
              >
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </motion.section>

        <section
          id="articles"
          className="scroll-mt-[100px]"
          aria-labelledby="articles-title"
        >
          <motion.div
            {...reveal}
            className="flex items-end justify-between gap-5 max-[1050px]:flex-col max-[1050px]:items-start max-[1050px]:gap-2.5 [&_h2]:mt-3 [&_h2]:text-[37px] [&_h2]:font-medium [&_h2]:tracking-[-1.4px] max-[760px]:[&_h2]:text-[31px] [&_p]:mb-[7px] [&_p]:text-[13px] [&_p]:text-[#718080]"
          >
            <div>
              <span className="inline-flex items-center gap-[9px] text-[10px] font-bold tracking-[2px] text-[#007f91] max-[520px]:text-[9px] max-[520px]:tracking-[1.6px] [&>span]:size-[7px] [&>span]:rounded-full [&>span]:bg-[#0198ae] [&>span]:shadow-[0_0_0_5px_#0198ae12]">
                A LITTLE INSIGHT GOES A LONG WAY
              </span>
              <h2 id="articles-title">Your next good read.</h2>
            </div>
            <p>Fresh thinking for every part of your pharmacy.</p>
          </motion.div>
          <div className="flex items-center justify-between gap-[15px] border-b border-[#e7eceb] pt-[27px] pb-[18px] max-[1050px]:flex-col max-[1050px]:items-stretch">
            <div
              className="flex flex-wrap gap-1.5 max-[520px]:gap-1"
              aria-label="Filter articles by topic"
            >
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                  className={`cursor-pointer whitespace-nowrap rounded-[7px] px-[13px] py-2.5 text-[11px] transition-colors duration-200 max-[520px]:px-2.5 max-[520px]:py-[9px] max-[520px]:text-[10px] ${category === item ? "bg-[#173a3e] text-white hover:bg-[#007f91]" : "text-[#637475] hover:bg-[#edf6f4]"}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex w-[225px] shrink-0 items-center gap-[9px] rounded-lg border border-[#dce5e2] px-3 py-2.5 text-[#7c8e8b] max-[1050px]:w-full max-[1050px]:max-w-[350px] [&_input]:min-w-0 [&_input]:w-full [&_input]:bg-transparent [&_input]:text-xs [&_input]:text-[#173a3e] [&_input::-webkit-search-cancel-button]:hidden [&_button]:cursor-pointer">
              <FiSearch aria-hidden="true" />
              <input
                type="search"
                aria-label="Search articles"
                placeholder="Find your next read…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  <FiX />
                </button>
              )}
            </div>
          </div>
          <p
            className="mt-4 mb-[22px] text-[11px] text-[#72827f]"
            aria-live="polite"
          >
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
            {category !== "All articles"
              ? ` in ${category}`
              : " to inspire your next step"}
          </p>
          <motion.div
            layout={!reduced}
            className="grid grid-cols-3 gap-x-[25px] gap-y-8 max-[1050px]:grid-cols-2 max-[520px]:grid-cols-1"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((post, index) => (
                <motion.article
                  key={post.slug}
                  layout={!reduced}
                  initial={{ opacity: 0, y: reduced ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
                  transition={{
                    duration: reduced ? 0 : 0.3,
                    delay: reduced ? 0 : index * 0.035,
                  }}
                  className="group flex flex-col overflow-hidden rounded-[13px] border border-[#e3ebe8] bg-white transition-shadow duration-300 hover:shadow-[0_15px_35px_#153b3710] [&_h3]:mt-4 [&_h3]:mb-3 [&_h3]:text-[22px] [&_h3]:font-medium [&_h3]:leading-[1.3] [&_h3]:tracking-[-0.5px] [&_h3_a:hover]:text-[#007f91]"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block aspect-[1.65] overflow-hidden bg-[#ecf2ef] max-[520px]:aspect-[1.7] [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-650 [&_img]:ease-[cubic-bezier(0.2,0.65,0.3,1)] group-hover:[&_img]:scale-[1.045] [&>span:first-of-type]:absolute [&>span:first-of-type]:bottom-4 [&>span:first-of-type]:left-4 [&>span:first-of-type]:rounded-[5px] [&>span:first-of-type]:bg-[#ffffffef] [&>span:first-of-type]:px-2.5 [&>span:first-of-type]:py-[7px] [&>span:first-of-type]:text-[10px] [&>span:first-of-type]:text-[#365c58]"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                    <span>{post.category}</span>
                    <span className="absolute top-[14px] right-[14px] -translate-x-[5px] translate-y-[5px] rounded-full bg-white p-2 opacity-0 transition-[opacity,transform] duration-250 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <FiArrowUpRight />
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6 max-[520px]:p-[22px] [&>p]:mb-[22px] [&>p]:text-[13px] [&>p]:leading-[1.8] [&>p]:text-[#71807e]">
                    <div className="flex justify-between gap-2 text-[9px] tracking-[0.5px] text-[#778782] [&>span]:inline-flex [&>span]:items-center [&>span]:gap-[5px]">
                      <span>MEDITIX JOURNAL</span>
                      <span>
                        <FiClock /> {post.readTime} min read
                      </span>
                    </div>
                    <h3>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p>{post.description}</p>
                    <Link
                      className="mt-auto inline-flex items-center gap-2.5 self-start text-xs font-semibold text-[#007f91] [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-[3px]"
                      href={`/blog/${post.slug}`}
                    >
                      Read story <FiArrowUpRight />
                      <span className="sr-only">: {post.title}</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
          {filtered.length === 0 && (
            <div className="rounded-xl bg-[#f5f9f7] px-5 py-[60px] text-center [&>svg]:mx-auto [&>svg]:mb-5 [&>svg]:text-[25px] [&_h3]:text-2xl [&_p]:my-3 [&_p]:text-[#71807e] [&_button]:inline-flex [&_button]:cursor-pointer [&_button]:items-center [&_button]:gap-2.5 [&_button]:text-[#007f91]">
              <FiSearch />
              <h3>No stories found just yet.</h3>
              <p>Try a different keyword or explore all our articles.</p>
              <button
                type="button"
                onClick={() => {
                  setCategory("All articles");
                  setQuery("");
                }}
              >
                Show all articles <FiArrowRight />
              </button>
            </div>
          )}
        </section>

        <motion.section
          {...reveal}
          className="relative my-[75px] flex items-center justify-between gap-[30px] overflow-hidden rounded-[18px] bg-[#eaf5f0] p-[50px] max-[760px]:my-[50px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:p-8 [&>div]:relative [&>div]:z-1 [&_h2]:mt-[18px] [&_h2]:text-[42px] [&_h2]:font-medium [&_h2]:leading-[1.18] [&_h2]:tracking-[-1.5px] max-[760px]:[&_h2]:text-[35px] [&_em]:font-[Georgia,serif] [&_em]:font-normal [&_em]:text-[#007f91] [&_p]:mt-[18px] [&_p]:text-[13px] [&_p]:text-[#657c73] [&>a]:relative [&>a]:z-1 [&>a]:flex [&>a]:items-center [&>a]:gap-[45px] [&>a]:rounded-[7px] [&>a]:bg-[#173a3e] [&>a]:px-[22px] [&>a]:py-[17px] [&>a]:text-[13px] [&>a]:whitespace-nowrap [&>a]:text-white [&>a]:transition-[background-color,transform] [&>a]:duration-200 [&>a:hover]:-translate-y-[3px] [&>a:hover]:bg-[#007f91]"
        >
          <div>
            <span className="inline-flex items-center gap-[9px] text-[10px] font-bold tracking-[2px] text-[#007f91] max-[520px]:text-[9px] max-[520px]:tracking-[1.6px] [&>span]:size-[7px] [&>span]:rounded-full [&>span]:bg-[#0198ae] [&>span]:shadow-[0_0_0_5px_#0198ae12]">
              FROM IDEAS TO EVERYDAY IMPACT
            </span>
            <h2>
              Your next chapter.
              <br />
              <em>A smarter pharmacy.</em>
            </h2>
            <p>See how Meditix can bring your pharmacy operations together.</p>
          </div>
          <Link href="/contact">
            Let’s talk <FiArrowUpRight />
          </Link>
          <span
            className="absolute -top-[95px] right-[170px] -rotate-12 text-[430px] leading-none font-light text-[#dbeee5] max-[760px]:-right-[25px]"
            aria-hidden="true"
          >
            +
          </span>
        </motion.section>
      </div>
    </main>
  );
}
