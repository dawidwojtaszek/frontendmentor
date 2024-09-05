const Container = ({ className, children }) => {
  return (
    <div className={`${className} max-w-[1216px] mx-auto`}>{children}</div>
  );
};
export default Container;
