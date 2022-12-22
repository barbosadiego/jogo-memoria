import React from 'react';
import './Grid.scss';
import images from '../../assets/iconsURL.json';

const Grid = () => {
  let tempRandom = [];
  let turnedItems = [];
  const numOfGrids = 2;

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  for (let i = 1; i <= numOfGrids; i++) {
    let a = shuffle(images).slice();
    tempRandom.push(a);
  }

  const shuffedIcons = tempRandom[0].concat(tempRandom[numOfGrids - 1]);

  function handleOnClick(e) {
    const item = e.currentTarget;
    item.classList.add('turned');
    turnedItems.push(item.id);

    if (turnedItems.length === 2) {
      checkTurned(item);
    }
  }

  function checkTurned(item) {
    if (turnedItems[0] === turnedItems[1]) {
      const itemsActive = document.querySelectorAll(`#${item.id}`);
      itemsActive.forEach((i) => {
        i.classList.add('turned');
        i.classList.remove('marked');
      });
      turnedItems = [];
    } else {
      setTimeout(() => {
        remove(item);
      }, 1200);
    }
  }

  function remove() {
    const itemsActive = document.querySelectorAll('.marked');
    itemsActive.forEach((i) => i.classList.remove('turned'));
    turnedItems = [];
  }

  return (
    <div className="grid">
      {shuffedIcons &&
        shuffedIcons.map((item, index) => (
          <div
            className="btn marked"
            key={index}
            onClick={handleOnClick}
            id={`item_${item.id}`}
          >
            <div className="side-back"></div>
            <img src={item.url} alt="" />
          </div>
        ))}
    </div>
  );
};

export default Grid;
