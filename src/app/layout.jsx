// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import "./globals.css";

// export const metadata = {
//   title: "Meditix — Modern Pharmacy Management Software",
//   description:
//     "Run pharmacy billing, inventory, GST compliance, customer relationships and multi-store operations in one modern platform.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" data-scroll-behavior="smooth">
//       <body>
//         <Navbar />

//         {children}

//         <Footer />
//       </body>
//     </html>
//   );
// }


// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import "./globals.css";

// import {
//   Besley,
//   Nunito_Sans,
//   Zilla_Slab,
//   Yellowtail,
// } from "next/font/google";

// // Fonts
// const besley = Besley({
//   subsets: ["latin"],
//   variable: "--font-besley",
//   display: "swap",
// });

// const nunitoSans = Nunito_Sans({
//   subsets: ["latin"],
//   variable: "--font-nunito",
//   display: "swap",
// });

// const zillaSlab = Zilla_Slab({
//   subsets: ["latin"],
//   variable: "--font-zilla",
//   display: "swap",
// });

// const yellowtail = Yellowtail({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-yellowtail",
//   display: "swap",
// });

// export const metadata = {
//   title: "Meditix — Modern Pharmacy Management Software",
//   description:
//     "Run pharmacy billing, inventory, GST compliance, customer relationships and multi-store operations in one modern platform.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       data-scroll-behavior="smooth"
//       className={`
//         ${besley.variable}
//         ${nunitoSans.variable}
//         ${zillaSlab.variable}
//         ${yellowtail.variable}
//       `}
//     >
//       <body>
//         <Navbar />

//         {children}

//         <Footer />
//       </body>
//     </html>
//   );
// }



import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

import {
  Besley,
  Nunito_Sans,
  Zilla_Slab,
  Yellowtail,
    Fraunces,

} from "next/font/google";

const besley = Besley({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-besley",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-zilla",
  display: "swap",
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yellowtail",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata = {
  title: "Meditix — Modern Pharmacy Management Software",
  description:
    "Run pharmacy billing, inventory, GST compliance, customer relationships and multi-store operations in one modern platform.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`
        ${besley.variable}
        ${nunitoSans.variable}
        ${zillaSlab.variable}
        ${yellowtail.variable}
        ${fraunces.variable}
      `}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}