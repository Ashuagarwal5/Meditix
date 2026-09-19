import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
// import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Meditix — Modern Pharmacy Management Software",
  description:
    "Run pharmacy billing, inventory, GST compliance, customer relationships and multi-store operations in one modern platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <body>
        <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}
