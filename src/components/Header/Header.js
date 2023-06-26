import { Logo, Banner, Nav, NavItem } from "./Header.styled";

const Header = () => {
  return (
    <header>
      <div>
        <Logo>DesignSolutions</Logo>
        <Nav>
          <ul>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
            <NavItem>Profile</NavItem>
          </ul>
        </Nav>
      </div>
      <Banner></Banner>
    </header>
  );
};

export default Header;
