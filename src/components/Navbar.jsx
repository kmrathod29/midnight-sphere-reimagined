import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  {
    label: "Home",
    ariaLabel: "Go to home page",
    link: "/",
  },
  {
    label: "About",
    ariaLabel: "Learn about us",
    link: "/about",
  },
  {
    label: "Services",
    ariaLabel: "View our services",
    link: "/services",
  },
  {
    label: "Projects",
    ariaLabel: "View our projects",
    link: "/projects",
  },
  {
    label: "Contact",
    ariaLabel: "Get in touch",
    link: "/contact",
  },
];

const socialItems = [
  {
    label: "GitHub",
    link: "https://github.com",
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com",
  },
];

export default function Navbar() {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#FFFFFF"
      openMenuButtonColor="#000"
      changeMenuColorOnOpen={true}
      colors={["#0A1224", "#0D1B35", "#1060E9"]}
      accentColor="#1060E9"
      logoUrl="./src/assets/logos/Midnight-Sphere-icon-Logo-removebg.png"
      isFixed={true}
      onMenuOpen={() => console.log("Menu opened")}
      onMenuClose={() => console.log("Menu closed")}
    />
  );
}
