import React, { useState } from 'react';
import styled from '@emotion/styled';

// Styled components
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

// Dropdown component
const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption || 'Escolha uma opção'}
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {options.map((option) => (
          <DropdownItem key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
