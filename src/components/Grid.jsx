import React from 'react';
import Item from './Item';
import icons from '../assets/iconsURL.json';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Grid = () => {
  let tempRandom = [];
  const numOfGrids = 2;

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  for (let i = 1; i <= numOfGrids; i++) {
    let a = shuffle(icons).slice();
    tempRandom.push(a);
  }

  const shuffedIcons = tempRandom[0].concat(tempRandom[numOfGrids - 1]);

  return (
    <StyledGrid>
      {shuffedIcons &&
        shuffedIcons.map((image) => <Item key={uuidv4()} image={image} />)}
    </StyledGrid>
  );
};

export default Grid;

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.5rem;
`;
