const ProductCard = ({ product }) => {
  const { name, price, image, category } = product;
  return <div>{name}</div>;
};
export default ProductCard;
