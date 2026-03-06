
import {NavItem, NavLinkStyled, NavList, NavWrap} from "./Nav.ts";

export default function Nav() {
    return (
        <NavWrap>
            <NavList>
                <NavItem>
                    <NavLinkStyled to="/">Home</NavLinkStyled>
                </NavItem>

                <NavItem>
                    <NavLinkStyled to="/proj.html">Projects</NavLinkStyled>
                </NavItem>

                <NavItem>
                    <NavLinkStyled to="/edu.html">Education</NavLinkStyled>
                </NavItem>

                <NavItem>
                    <NavLinkStyled to="/exp.html">Experience</NavLinkStyled>
                </NavItem>

                <NavItem>
                    <NavLinkStyled to="/cert.html">Certifications</NavLinkStyled>
                </NavItem>

                <NavItem>
                    <NavLinkStyled to="/extra.html">Extracurriculars</NavLinkStyled>
                </NavItem>
            </NavList>
        </NavWrap>
    );
}