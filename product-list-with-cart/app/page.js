import ProductList from "./components/products/productList";
import Cart from "./components/cart/cart";
export default function Home() {
  return (
    <main className="pt-10 md:pt-[90px]">
      <div className="flex gap-8 items-center flex-col md:justify-between md:flex-row md:items-start">
        <ProductList />
        <Cart />
      </div>
    </main>
  );
}
