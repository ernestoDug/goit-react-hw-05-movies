import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.span`
  font-weight: 700;
  margin-left: 5px;
  color: #009A63;
`;

export const Link = styled(NavLink)`
  padding: 8px 10px;
  border-radius: 6px/16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: white;
    background-color: #009A63;
  }
`;


export const H3 = styled.H3
`color:009A63` 

