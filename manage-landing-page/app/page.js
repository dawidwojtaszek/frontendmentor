import Header from "./components/header";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import TestimonialsSection from "./components/testimonials-section";
import SimplifySection from "./components/simplify-section";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className="">
      <div
        className="mx-auto max-w-[1440px] bg-mobile-main-pattern bg-no-repeat bg-[length:448px_448px] bg-[top_-100px_right_-133px] md:bg-[top_-160px_right_-150px] md:bg-[length:814px_814px]"
        role="none presentation"
      >
        <div
          className="mx-auto max-w-[1110px] md:px-0"
          role="none presentation"
        >
          <Header />
          <HeroSection />
        </div>
      </div>
      <div
        className="mx-auto max-w-[1440px] md:bg-mobile-main-pattern md:bg-no-repeat md:bg-[bottom_-214px_left_-500px]"
        role="none presentation"
      >
        <div
          className="mx-auto max-w-[1110px] md:px-0"
          role="none presentation"
        >
          <AboutSection />
        </div>
      </div>
      <div
        className="mx-auto max-w-[1440px] px-5 md:px-0"
        role="none presentation"
      >
        <TestimonialsSection />
      </div>
      <SimplifySection />
      <Footer />
    </main>
  );
}
