import ProductCard from "../ProductCard/ProductCard.jsx";

export default function ProductOverview({ product }) {
  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
}
