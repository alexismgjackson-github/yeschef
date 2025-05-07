// Importing the necessary dependencies from React
import { StrictMode } from "react"; // StrictMode helps identify potential problems in the app during development
import { createRoot } from "react-dom/client"; // createRoot is used to create a root DOM node for rendering in React 18+
import { ScrollProvider } from "../Context/scroll"; // Importing a custom context provider for scroll functionality
import App from "./App"; // Importing the main App component of your application

// Rendering the app inside the root element of the HTML
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap the app with ScrollProvider to provide scroll-related context throughout the app */}
    <ScrollProvider>
      <App /> {/* Main app component that contains the application's UI */}
    </ScrollProvider>
  </StrictMode>
);
