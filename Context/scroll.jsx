import { createContext, useEffect } from "react";

// Create the ScrollContext
export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  // Define the scrollToTop function inside the ScrollProvider component
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // The provider will pass the scrollToTop function to its children
  return (
    <ScrollContext.Provider
      value={{
        scrollToTop,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
