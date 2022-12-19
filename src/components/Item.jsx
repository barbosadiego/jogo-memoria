import React from 'react';

const Item = ({ image }) => {
  return (
    <button>
      <img src={image.url} />
    </button>
  );
};

export default Item;
