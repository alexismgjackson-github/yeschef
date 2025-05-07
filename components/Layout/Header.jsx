import "./Header.css"; // Import the CSS file for the styling of the Header component

// Header component to display the app's header content
export default function Header() {
  return (
    <>
      {/* The header section containing the logo */}
      <header>
        {/* The logo image for the application, with an alt text for accessibility */}
        <img
          src="/assets/icons/utensils.svg" // Path to the logo image
          alt="Logo icon" // Accessibility text for the logo
          className="logo-icon" // CSS class to style the logo image
        />
      </header>
    </>
  );
}
