import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const font = Josefin_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Todo app",
  description: "This is the solution to the Frontend Mentor challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
