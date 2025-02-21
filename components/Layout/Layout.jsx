import { Outlet } from "react-router";
import Header from "./Header";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
