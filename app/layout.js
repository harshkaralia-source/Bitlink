import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Bitlink",
  description: "The best URL shortener on the internet. No login required."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-montserrat max-w-3xl mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
