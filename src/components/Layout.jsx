// components/Layout.jsx
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-28 min-h-screen bg-black">
        <Outlet />
      </main>
    </>
  );
}
