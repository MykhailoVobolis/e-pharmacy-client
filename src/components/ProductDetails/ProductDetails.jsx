import { Suspense } from "react";
import TabsContainer from "../TabsContainer/TabsContainer.jsx";
import { Outlet } from "react-router-dom";

import css from "./ProductDetails.module.css";

export default function ProductDetails() {
  return (
    <div className={css.detailsContainer}>
      <TabsContainer />
      <div className={css.secondContainer}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
