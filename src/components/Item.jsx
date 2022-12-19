import React from 'react';
import styled from 'styled-components';

const Item = ({ image }) => {
  return (
    <StyledItem>
      <img src={image.url} />
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled.button`
  cursor: pointer;
`;
