import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/*";

const font = Josefin_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Todo app",
  description: "This is the solution to the Frontend Mentor challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${font.className} bg-veryLightGray dark:bg-veryDarkBlue `}
      >
        <Provider>
          {children}
          <SpeedInsights />
        </Provider>
      </body>
    </html>
  );
}
