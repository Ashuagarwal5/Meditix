"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { FiChevronDown, FiMenu, FiX, FiArrowRight } from "react-icons/fi";

// import meditixLogo from "@/assets/meditixLogo.png";
import meditixLogo from "../../assets/meditixLogo.png";
import meditixLogo02 from "../../assets/meditixLogo02.png";

const solutions = [
  {
    name: "WorkFlow Management",
    description: "Manage your complete pharmacy operations.",
    href: "/solutions/workflowManagement",
  },
  {
    name: "Inventory Management",
    description: "Fast and accurate pharmacy billing.",
    href: "/solutions/inventoryManagement",
  },
  {
    name: "E-Prescription Management",
    description: "Keep stock, batches and expiry under control.",
    href: "/solutions/ePresriptionManagement",
  },
  {
    name: "Supply Chain Management",
    description: "GST-ready invoices and compliance tools.",
    href: "/solutions/supplyChainManagement",
  },
  {
    name: "Multi-Branch / Chain Management",
    description: "Build stronger customer relationships.",
    href: "/solutions/BranchChainManagement",
  },
  {
    name: "Billing & Payment Management",
    description: "Manage Billing and Payment integration.",
    href: "/solutions/billingPaymentManagement",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const solutionsActive = pathname.startsWith("/solutions");

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
  };

  // Close mobile drawer whenever route changes
  useEffect(() => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  // Prevent page scrolling while mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
        <nav className="container mx-auto flex h-[76px]  items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2"
            onClick={closeMobileMenu}
          >
            {/* <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#0C79CF] shadow-[0_6px_18px_rgba(12,121,207,0.22)] transition-transform duration-300 group-hover:-translate-y-0.5">
              <span className="text-xl font-black text-white">M</span>

              <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-white/20" />
            </div>

            <span className="text-[25px] font-bold tracking-tight text-slate-900">
              Medi
              <span className="text-[#0C79CF]">tix</span>
            </span> */}

            {/* <div className="">
              <Image
                src={meditixLogo}
                alt="Meditix Logo"
                width={150}
                height={150}
                className="h-auto w-auto"
              />
            </div> */}
            <div className="">
              <Image
                src={meditixLogo02}
                alt="Meditix Logo"
                className="h-12 w-auto object-contain "
                priority
              />
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <div className="hidden items-center gap-1 lg:flex">
            <NavItem href="/" label="Home" pathname={pathname} />

            <NavItem href="/about" label="About" pathname={pathname} />

            {/* ================= SOLUTIONS ================= */}

            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                aria-expanded={solutionsOpen}
                onClick={() => setSolutionsOpen((value) => !value)}
                className={`
                  group relative flex items-center gap-1.5 rounded-lg
                  px-4 py-2.5 text-[16px] font-semibold
                  transition-all duration-200 hover:cursor-pointer
                  ${
                    solutionsActive
                      ? "bg-[#0C79CF]/7 text-[#0198ae]"
                      : "text-slate-700  hover:text-[#0198ae]"
                  }
                `}
              >
                Solutions
                <motion.span
                  animate={{
                    rotate: solutionsOpen ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="flex"
                >
                  <FiChevronDown size={18} />
                </motion.span>
                {/* active underline */}
                {solutionsActive && (
                  <motion.span
                    layoutId="desktop-active-nav"
                    className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[#0198ae]"
                  />
                )}
              </button>

              {/* ================= SOLUTIONS DROPDOWN ================= */}

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.18,
                      ease: "easeOut",
                    }}
                    className="absolute left-1/2 top-full w-[440px] -translate-x-1/2 pt-3"
                  >
                    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_22px_70px_-20px_rgba(15,23,42,0.28)]">
                      {/* Dropdown heading */}

                      <div className="border-b border-slate-100 px-4 pb-3 pt-3">
                        <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-[#0198ae]">
                          Meditix Solutions
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          Everything your pharmacy needs to run smarter.
                        </p>
                      </div>

                      {/* Dropdown links */}

                      <div className="space-y-1 pt-2">
                        {solutions.map((solution) => {
                          const active = pathname === solution.href;

                          return (
                            <Link
                              key={solution.name}
                              href={solution.href}
                              onClick={() => setSolutionsOpen(false)}
                              className={`
                                group/item flex items-center
                                justify-between gap-4
                                rounded-xl px-4 py-3
                                transition-all duration-200
                                ${
                                  active
                                    ? "bg-[#0198ae]/8"
                                    : "hover:bg-[#0198ae]/5"
                                }
                              `}
                            >
                              <div className="min-w-0 flex-1">
                                <p
                                  className={`
                                    text-[16px] font-semibold transition-colors
                                    ${
                                      active
                                        ? "text-[#0198ae]"
                                        : "text-slate-800 group-hover/item:text-[#0198ae]"
                                    }
                                  `}
                                >
                                  {solution.name}
                                </p>

                                <p className="mt-1 text-[14px] leading-5 text-slate-500">
                                  {solution.description}
                                </p>
                              </div>

                              <FiArrowRight
                                className={`
                                  shrink-0 transition-all duration-200
                                  ${
                                    active
                                      ? "translate-x-0 text-[#0C79CF] opacity-100"
                                      : "-translate-x-1 text-slate-300 opacity-0 group-hover/item:translate-x-0 group-hover/item:text-[#0C79CF] group-hover/item:opacity-100"
                                  }
                                `}
                              />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavItem href="/contact" label="Contact Us" pathname={pathname} />

            <NavItem href="/blog" label="Blog" pathname={pathname} />
          </div>

          {/* =====================================================
              DESKTOP CTA
          ====================================================== */}

          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-xl bg-[#0198ae] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_25px_-10px_rgba(12,121,207,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#096bb8] hover:shadow-[0_12px_30px_-10px_rgba(12,121,207,0.9)]"
            >
              Book a Demo
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* =====================================================
              MOBILE HAMBURGER
          ====================================================== */}

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-all hover:border-[#0C79CF]/30 hover:bg-[#0C79CF]/5 hover:text-[#0C79CF] cursor-pointer lg:hidden"
          >
            <FiMenu size={23} />
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* ================= BACKDROP ================= */}

            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-[4px] lg:hidden"
            />

            {/* ================= RIGHT DRAWER ================= */}

            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 32,
              }}
              className="fixed right-0 top-0 z-[70] flex h-dvh w-[88%] max-w-[390px] flex-col bg-white shadow-[-20px_0_60px_-25px_rgba(15,23,42,0.35)] lg:hidden"
            >
              {/* ================= MOBILE HEADER ================= */}

              <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-slate-100 px-5">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2"
                >
                  {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0198ae]">
                    <span className="text-lg font-black text-white">M</span>
                  </div>

                  <span className="text-[23px] font-bold tracking-tight text-slate-900">
                    Medi
                    <span className="text-[#0198ae]">tix</span>
                  </span> */}
                  <Image
                    src={meditixLogo02}
                    alt="Meditix Logo"
                    width={100}
                    height={100}
                    className="h-auto w-auto"
                  />
                </Link>

                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={closeMobileMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors hover:bg-[#0C79CF]/10 hover:text-[#0C79CF]"
                >
                  <FiX size={21} />
                </button>
              </div>

              {/* ================= MOBILE LINKS ================= */}

              <div className="flex-1 overflow-y-auto px-4 py-5">
                <div className="space-y-1">
                  <MobileNavItem
                    href="/"
                    label="Home"
                    pathname={pathname}
                    onClick={closeMobileMenu}
                  />

                  <MobileNavItem
                    href="/about"
                    label="About"
                    pathname={pathname}
                    onClick={closeMobileMenu}
                  />

                  {/* ============ MOBILE SOLUTIONS ============ */}

                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileSolutionsOpen((value) => !value)}
                      className={`
                        flex w-full items-center
                        justify-between rounded-xl
                        px-4 py-3.5
                        text-[15px] font-semibold
                        transition-all duration-200 
                        cursor-pointer
                        ${
                          solutionsActive
                            ? "bg-[#0C79CF]/8 text-[#0198ae]"
                            : "text-slate-700 hover:bg-[#0C79CF]/5 hover:text-[#0198ae]"
                        }
                      `}
                    >
                      <span>Solutions</span>

                      <motion.span
                        animate={{
                          rotate: mobileSolutionsOpen ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        <FiChevronDown size={17} />
                      </motion.span>
                    </button>

                    {/* Mobile solution links */}

                    <AnimatePresence initial={false}>
                      {mobileSolutionsOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.22,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 mt-2 space-y-1 border-l border-[#E4ECEF] pl-3">
                            {solutions.map((solution) => {
                              const active = pathname === solution.href;

                              return (
                                <Link
                                  key={solution.name}
                                  href={solution.href}
                                  onClick={closeMobileMenu}
                                  className={`
                                      block rounded-lg
                                      px-3 py-3
                                      text-sm font-medium
                                      transition-colors
                                      ${
                                        active
                                          ? "bg-[#0C79CF]/8 text-[#0198ae]"
                                          : "text-slate-600 hover:bg-[#0C79CF]/5 hover:text-[#0198ae]"
                                      }
                                    `}
                                >
                                  {solution.name}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <MobileNavItem
                    href="/contact"
                    label="Contact Us"
                    pathname={pathname}
                    onClick={closeMobileMenu}
                  />

                  <MobileNavItem
                    href="/blog"
                    label="Blog"
                    pathname={pathname}
                    onClick={closeMobileMenu}
                  />
                </div>
              </div>

              {/* ================= MOBILE CTA ================= */}

              <div className="shrink-0 border-t border-slate-100 bg-white p-4">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0198ae] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_-12px_rgba(12,121,207,0.8)] transition-colors hover:bg-[#038397] "
                >
                  Book a Demo
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   DESKTOP NAV LINK
========================================================= */

function NavItem({ href, label, pathname }) {
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`
        relative rounded-lg px-4 py-2.5
        text-[16px] font-semibold
        transition-all duration-200
        ${active ? "  text-[#0198ae]" : "text-slate-700   hover:text-[#0198ae]"}
      `}
    >
      {label}

      {active && (
        <motion.span
          layoutId="desktop-active-nav"
          className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[#0198ae]"
        />
      )}
    </Link>
  );
}

/* =========================================================
   MOBILE NAV LINK
========================================================= */

function MobileNavItem({ href, label, pathname, onClick }) {
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        relative flex w-full items-center
        rounded-xl px-4 py-3.5
        text-[15px] font-semibold
        transition-all duration-200
        ${
          active
            ? "bg-[#0C79CF]/8 text-[#0198ae]"
            : "text-slate-700 hover:bg-[#0C79CF]/5] hover:text-[#0198ae]"
        }
      `}
    >
      {active && (
        <span className="absolute bottom-3 left-0 top-3 w-[3px] rounded-r-full bg-[#0198ae]" />
      )}

      {label}
    </Link>
  );
}
