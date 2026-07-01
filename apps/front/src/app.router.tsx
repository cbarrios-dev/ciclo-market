import { createBrowserRouter } from "react-router";
import { Layout } from "./layouts/Layout";
import { CartPage } from "./pages/CartPage";
import { CatalogoPage } from "./pages/CatalogoPage";
import { DashboardPage } from "./pages/DashboardPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { OrdenesPage } from "./pages/OrdenesPage";
import { ProductosPage } from "./pages/ProductosPage";
import { RegisterPage } from "./pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/catalogo",
        element: <CatalogoPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/ordenes",
        element: <OrdenesPage />,
      },
      {
        path: "/productos",
        element: <ProductosPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
