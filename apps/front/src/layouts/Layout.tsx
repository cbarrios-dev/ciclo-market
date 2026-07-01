import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="container mx-auto py-8">
        <Outlet />
      </main>
    </div>
  );
};
