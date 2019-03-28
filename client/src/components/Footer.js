import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// // May be used later
// const FooterGrid = styled.footer`
//   display: grid;
//   grid-template-columns: 1fr 3fr 1 fr;
//   grid-template-rows: auto;
//   justify-items: center;
//   align-items: end;
//   padding: 5px 0;
//   @media (min-width: 1025px) {
//     grid-template-columns: 1fr 1024px 1fr;
//   }
// `;

const StyledFooter = styled.footer`
  width: 100vw;
  height: 100px;
  background-color: #343a40;
  box-shadow: 0 7px 6px -6px #777;
`;

const Footer = ()=> {
    return (
      <StyledFooter>
      </StyledFooter>
    )
}

export default Footer;