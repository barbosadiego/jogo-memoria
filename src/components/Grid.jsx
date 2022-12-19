import React from 'react';
import Item from './Item';
import icons from '../assets/iconsURL.json';

const Grid = () => {
  return (
    <div>
      <p>Grid</p>
      <div>
        {icons && icons.map((image) => <Item key={image.id} image={image} />)}
      </div>
    </div>
  );
};

export default Grid;
