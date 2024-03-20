const AboutSection = () => (
  <div
    className="flex flex-col md:flex-row md:justify-between md:gap-[100px] md:pb-[300px]"
    role="none presentation"
  >
    <div
      className="text-center md:text-left mt-[80px] mb-7 md:mt-0 md:mb-0 "
      role="none presentation"
    >
      <h2 className=" text-darkBlue font-bold text-4xl mb-7">
        What’s different about Manage?
      </h2>
      <p className="text-darkGrayishBlue  px-10 md:px-0 ">
        Manage provides all the functionality your team needs, without the
        complexity. Our software is tailor-made for modern digital product
        teams.
      </p>
    </div>
    <div role="none presentation">
      <div className="w-full pl-4 mb-12 md:mb-10" role="none presentation">
        <div
          className="w-full bg-brightRed/10 flex h-10 items-center md:bg-veryLightGray rounded-l-3xl"
          role="none presentation"
        >
          <span className=" w-[70px] h-10 rounded-3xl flex items-center justify-center bg-brightRed font-bold text-white mr-4">
            01
          </span>{" "}
          <h3 className="text-darkBlue font-bold">
            Track comapny-wide progress
          </h3>
        </div>
        <div className="md:ml-[86px]" role="none presentation">
          <p className="pr-4 text-darkGrayishBlue mt-4">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
      </div>
      <div className="w-full pl-4 mb-12 md:mb-10" role="none presentation">
        <div
          className="w-full bg-brightRed/10 flex h-10 items-center md:bg-veryLightGray rounded-l-3xl"
          role="none presentation"
        >
          <span className=" w-[70px] h-10 rounded-3xl flex items-center justify-center bg-brightRed font-bold text-white mr-4">
            02
          </span>{" "}
          <h3 className="text-darkBlue font-bold">Advanced built-in reports</h3>
        </div>
        <div className="md:ml-[86px]" role="none presentation">
          <p className="pr-4 text-darkGrayishBlue mt-4">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
      </div>
      <div className="w-full pl-4 mb-12 md:mb-10" role="none presentation">
        <div
          className="w-full bg-brightRed/10 flex h-10 items-center md:bg-veryLightGray rounded-l-3xl"
          role="none presentation"
        >
          <span className=" w-[70px] h-10 rounded-3xl flex items-center justify-center bg-brightRed font-bold text-white mr-4">
            03
          </span>{" "}
          <h3 className="text-darkBlue font-bold">
            Everything you need in one place
          </h3>
        </div>
        <div className="md:ml-[86px]" role="none presentation">
          <p className="pr-4 text-darkGrayishBlue mt-4">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;
