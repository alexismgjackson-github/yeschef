import { Outlet } from "react-router"; // Outlet is used to render child routes in this layout
import Header from "./Header"; // Importing the Header component
import "./Layout.css"; // Import the associated CSS file for styling

// Layout component which serves as a template for your application
export default function Layout() {
  return (
    <>
      {/* The Header component will be displayed at the top of every page */}
      <Header />

      <main>
        {/* The Outlet component is a placeholder for the content of child routes */}
        {/* It will render the appropriate page component depending on the current route */}
        <Outlet />
      </main>
    </>
  );
}
