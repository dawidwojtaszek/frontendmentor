import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const font = Be_Vietnam_Pro({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Frontend Mentor | Manage landing page",
  description: "Frontend Mentor solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-veryLightGray`}>{children}</body>
    </html>
  );
}
