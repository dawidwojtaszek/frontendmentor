import EmptyCart from "./emptyCart";
const Cart = () => {
  return (
    <div className=" p-6 max-w-[385px] w-[320px] bg-white min-h-[300px] rounded-lg md:w-[385px]">
      <span className="text-red text-xl font-bold">Your cart (0)</span>
      <EmptyCart />
    </div>
  );
};
export default Cart;
