import Header from "./components/header";
import HeroSection from "./components/hero-section";
export default function Home() {
  return (
    <main className="">
      <div className="mx-auto max-w-[1440px] bg-mobile-main-pattern bg-no-repeat bg-[top_-100px_right_-200px]">
        <div className="mx-auto max-w-[1110px] px-5 md:px-0">
          <Header />
          <HeroSection />
        </div>
      </div>
    </main>
  );
}
