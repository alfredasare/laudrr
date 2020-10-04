import styled from "styled-components";
import {black, typeScale} from "../../utils";


export const NavBarContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 0;
  color: ${black};
  z-index: 50;
  background-color: white;
  transition: all 90ms linear, padding 90ms linear;
`;

export const NavBarRow = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarBrand = styled.h3`
  width: 50px;
  z-index: 10;
  font-weight: bold;
  color: ${black};
  font-size: ${typeScale.header5};
`;

export const NavMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
`;

export const NavMenuText = styled.h5`
  font-size: ${typeScale.paragraph};
  margin-right: 1rem;
  cursor: pointer;
  font-weight: bold;
  color: ${({open}) => open ? 'white': 'black'};
`;

export const NavMenuIcon = styled.div`
  //z-index: 1000000;
`;