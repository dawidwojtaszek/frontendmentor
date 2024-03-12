import Header from "./components/header";
import HeroSection from "./components/hero-section";
export default function Home() {
  return (
    <main className="">
      <div className="mx-auto max-w-[1440px] bg-mobile-main-pattern bg-no-repeat bg-[length:448px_448px] bg-[top_-100px_right_-133px] md:bg-[top_-160px_right_-150px] md:bg-[length:814px_814px]">
        <div className="mx-auto max-w-[1110px] px-5 md:px-0">
          <Header />
          <HeroSection />
        </div>
      </div>
    </main>
  );
}
