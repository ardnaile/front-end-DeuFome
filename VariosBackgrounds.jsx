// Componente estilizado de background
import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
//   height: 100vh;
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
  background-image: ${props => props.backgroundImage || 'none'};
`;

const BackgroundLayout = ({ children, backgroundImage }) => {
  return <BackgroundContainer backgroundImage={backgroundImage}>{children}</BackgroundContainer>;
};

export default BackgroundLayout;