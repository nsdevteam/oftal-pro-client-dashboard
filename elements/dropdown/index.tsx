import React, { useState } from 'react';
import styled from '@emotion/styled';

// Styled components
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 0.5rem;
`;

const DropdownButton = styled.button`
  display: flex;
  justifycontent: flex-start;
  alignitems: flex-start;
  background-color: #fff;
  border: 1.5px solid #e4e4e7;
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  height: 50px;
  width: 120px;
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
  z-index: 999;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: #60bcf6;
    color: #fff;
  }
`;

// Dropdown component
const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = (e) => {
    e.preventDefault();
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
        {selectedOption || '0.60'}
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
