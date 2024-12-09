import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import CustomLoader from "../CustomLoader/CustomLoader.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors.js";
import { refreshUser } from "../../redux/auth/operations.js";
import { finishAuthProcess } from "../../redux/auth/slice.js";
import RestrictedRoute from "../RestrictedRoute.jsx";
import PrivateRoute from "../PrivateRoute.jsx";

const Layout = lazy(() => import("../../components/Layout/Layout.jsx"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage.jsx"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage.jsx"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CartPage = lazy(() => import("../../pages/CartPage/CartPage.jsx"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser()).finally(() => {});
    dispatch(finishAuthProcess());
  }, [dispatch]);

  return isRefreshing ? (
    <CustomLoader />
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirectTo="/home" />} />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/home" />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="cart" element={<PrivateRoute component={<CartPage />} redirectTo="/login" />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster position="top-right" containerStyle={{ zIndex: 999999 }} />
    </Suspense>
  );
}
