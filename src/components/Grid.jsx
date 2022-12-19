import React from 'react';
import Item from './Item';
import icons from '../assets/iconsURL.json';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Grid = () => {
  const shuffledIcons = shuffle(icons);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <StyledGrid>
      {shuffledIcons &&
        shuffledIcons.map((image) => (
          <div>
            <Item key={uuidv4()} image={image} />
          </div>
        ))}
      {shuffledIcons &&
        shuffledIcons.map((image) => (
          <div>
            <Item key={uuidv4()} image={image} />
          </div>
        ))}
    </StyledGrid>
  );
};

export default Grid;

const StyledGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.5rem;
`;
