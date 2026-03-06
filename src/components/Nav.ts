import styled from "styled-components";
import {Link} from "react-router";

export const NavWrap = styled.nav`
    background-color: #E1D9BC;
    width: 30%;

    @media (max-width: 1000px) {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
`;

export const NavList = styled.ul`
  padding-left: 0;
  list-style: none;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const NavItem = styled.li`
  border: 5px solid #ACBAC4;
  width: 80%;
  margin: 5% auto;
  padding: 1%;
  text-align: center;
`;

export const NavLinkStyled = styled(Link)`
  text-decoration: none;
  font-size: calc(2px + 1.3vw);
`;