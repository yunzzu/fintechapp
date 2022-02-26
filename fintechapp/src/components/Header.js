import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  border-bottom: 1px solid #000;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Header = ({title}) => {
    return <HeaderBlock>{title}</HeaderBlock>;
};

export default Header;