import ProductCard from "./productCard";
async function fetchData() {
  const response = await fetch(`${process.env.URL}api/products`);
  const products = await response.json();
  return products;
}

const ProductList = async () => {
  const data = await fetchData();
  return (
    <div className="md:max-w-[800px] w-full">
      {data.map((e) => (
        <ProductCard key={e.name} product={e} />
      ))}
    </div>
  );
};
export default ProductList;
