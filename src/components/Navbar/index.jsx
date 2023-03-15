import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
import {
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  StyledNavLink,
  Wrapper,
  LogoIcon,
} from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <LogoIcon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map(({ title, id, path, hidden }) => {
              return (
                !hidden && (
                  <StyledNavLink key={id} to={path}>
                    {title}
                  </StyledNavLink>
                )
              );
            })}
          </NavbarBody>
          <Button width={`120px`} onClick={() => navigate("/signin")}>
            Login
          </Button>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
