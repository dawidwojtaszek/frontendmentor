import Header from "./components/header";
export default function Home() {
  return (
    <main className="">
      <div className="mx-auto max-w-[1440px] bg-mobile-main-pattern bg-no-repeat bg-[top_-100px_right_-100px]">
        <div className="mx-auto max-w-[1110px] px-5 md:px-0">
          <Header />
        </div>
      </div>
    </main>
  );
}
