import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import Container from "./components/utilities/container";
import { Provider } from "./context/context";
const font = Red_Hat_Text({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Product list with cart",
  description: "Frontend Mentor solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${font.className} bg-rose-50 `}>
          <Container>{children}</Container>
        </body>
      </Provider>
    </html>
  );
}
