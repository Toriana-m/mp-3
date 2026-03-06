import {Link} from "react-router";
import styled from "styled-components";

const FooterWrap = styled.footer`
  padding: 1%;
  background-color: #30364f;
  color: #f0f0db;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: calc(2px + 1vw);
`;

export default function Footer() {
    return (
        <FooterWrap>
            <FooterText>All rights Reserved By Toriana Mullins &#169; <Link to={""}></Link></FooterText>
        </FooterWrap>
    )
}