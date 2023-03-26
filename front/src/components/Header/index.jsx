import LeftNavbar from "../LeftNavbar";
import Logo from "../Logo";
import RightNavbar from "../RightNavbar";

export default function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <LeftNavbar />
        <Logo />
        <RightNavbar />
      </div>
    </header>
  );
}
