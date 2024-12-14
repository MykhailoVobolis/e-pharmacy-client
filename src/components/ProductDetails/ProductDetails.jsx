import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import TabsContainer from "../TabsContainer/TabsContainer.jsx";

import css from "./ProductDetails.module.css";

export default function ProductDetails() {
  return (
    <div className={css.detailsContainer}>
      <TabsContainer />
      <div className={css.secondContainer}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
