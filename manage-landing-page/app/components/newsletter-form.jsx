"use client";
import { useState } from "react";
const NewsletterForm = () => {
  const [isError, setIsError] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRegex.test(e.target[0].value)) {
      setIsError(false);
      console.log("correct email");
      e.target[0].value = "";
    } else {
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex justify-between">
      <div className="flex flex-col" role="none presentation">
        <input
          type="email"
          placeholder="email@email.com"
          className={`text-black p-3 rounded-3xl border-2 border-black mb-12 md:mb-0 ${
            isError ? "validation-error " : ""
          }`}
        />
        <span
          className={`text-xs text-errorRed ml-3 mt-1 ${
            isError ? "" : "hidden"
          }`}
        >
          Please insert valid email
        </span>
      </div>

      <button
        type="submit"
        className=" ml-7 bg-brightRed flex items-center text-white font-bold py-5 px-9 h-[45px] rounded-[40px] hover:bg-hoverOrange shadow-lg"
      >
        Go
      </button>
    </form>
  );
};

export default NewsletterForm;
