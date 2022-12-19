import React from 'react';
import Item from './Item';
import icons from '../assets/iconsURL.json';
import styled from 'styled-components';

const Grid = () => {
  return (
    <StyledGrid>
      {icons &&
        icons.map((image) => (
          <div>
            <Item key={image.id} image={image} />
          </div>
        ))}
      {icons &&
        icons.map((image) => (
          <div>
            <Item key={image.id} image={image} />
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
