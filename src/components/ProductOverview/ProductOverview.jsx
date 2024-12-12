import ProductCard from "../ProductCard/ProductCard.jsx";
import css from "./ProductOverview.module.css";

export default function ProductOverview({ product }) {
  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
}
