import React from 'react';

import './style.css';
import CardItem from '../CardItem';

export const CardLists = ({photos}) => {
  const cardList = photos.map((photo, index) => {
    return <CardItem photo={photo} key={index} />
  });
  return (
    <div className="row">{cardList}</div>
  );
};