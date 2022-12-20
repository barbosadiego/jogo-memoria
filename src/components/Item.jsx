import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Item = ({ image }) => {
  const [turned, setTurned] = useState(true);
  const [active, setActive] = useState(false);

  function handleOnClick() {
    setTurned(!turned);
    setActive(!active);
    // setTimeout(() => {
    //   setActive(false);
    //   setTurned(true);
    // }, 550);
  }

  return (
    <>
      <StyledItem
        onClick={handleOnClick}
        id={image.id}
        turned={turned}
        active={active}
      >
        <img src={image.url} />
        <StyledBackground />
      </StyledItem>
    </>
  );
};

export default Item;

const StyledItem = styled.button`
  width: 100px;
  height: 80px;
  border-radius: 3px;
  border: 2px solid #aaa;
  position: relative;
  background-color: #ddd;
  cursor: pointer;
  transition: all 0.3s;
  transform: ${({ active }) => (active ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  @media screen and (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (min-width: 1100px) {
    &:hover {
      box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.15);
    }
  }

  & img {
    transform: rotateY(-180deg);
    transition: opacity 0.29s;
    ${({ turned }) =>
      turned &&
      css`
        opacity: 0;
      `};
  }
`;

const StyledBackground = styled.div`
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;
