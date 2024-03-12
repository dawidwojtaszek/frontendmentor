const Button = ({ children }) => (
  <button className=" bg-brightRed flex items-center text-white font-bold py-5 px-9 h-[45px] rounded-[40px] hover:opacity-80 shadow-lg">
    {children}
  </button>
);

export default Button;
