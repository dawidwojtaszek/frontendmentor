const SimplifySection = () => (
  <div
    className=" bg-brightRed h-[400px] md:h-[220px] mt-9 md:mt-[150px]"
    role="none presentation"
  >
    <div
      className="max-w-[1440px] h-full mx-auto bg-mobile-simlify-pattern bg-no-repeat bg-[top_50px_left_0] md:bg-desktop-simlify-pattern md:bg-[top_-120px_right_-220px]"
      role="none presentation"
    >
      <div className="max-w-[1110px] mx-auto h-full " role="none presentation">
        <div
          className="flex w-full h-full items-center justify-center flex-col text-center md:text-left md:flex-row md:justify-between"
          role="none presentation"
        >
          <div className="max-w-[450px] mb-5 md:mb-0" role="none presentation">
            <h3 className="font-bold text-4xl max-w[100px] text-white">
              Simplify how your team works today.
            </h3>
          </div>

          <button className=" bg-white flex items-center text-brightRed font-bold py-5 px-9 h-[45px] rounded-[40px] hover:text-brightRed/40 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SimplifySection;
