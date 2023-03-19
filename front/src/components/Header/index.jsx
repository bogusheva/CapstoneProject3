import LeftNavbar from "../LeftNavbar";
import Logo from "../Logo";
import RightNavbar from "../RightNavbar";

import "../../index.scss";

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
