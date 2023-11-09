// Buttons.js
import React from 'react';
import './Buttons.css';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${props => props.fontColor || 'white'};
  background-color: ${props => props.buttonColor || 'white'};
  border-color: ${props => props.buttonBorderColor || 'black'};

  &:hover {
    background-color: ${props => props.buttonMouseoverColor || 'blue'};
  }
`;

const Buttons = ({ 
  fontColor, 
  buttonColor, 
  buttonBorderColor, 
  buttonMouseoverColor }) => {
  return (
    <StyledButton
      className='Buttons'
      fontColor={fontColor}
      buttonColor={buttonColor}
      buttonBorderColor={buttonBorderColor}
      buttonMouseoverColor={buttonMouseoverColor}
    >
      Test
    </StyledButton>
  );
};

export default Buttons;
