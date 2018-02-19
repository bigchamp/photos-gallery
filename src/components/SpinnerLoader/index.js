import React from 'react';
import TailSpin from './TailSpin';
import './style.css';

export const SpinnerLoader = (props) =>{
  let params = {...props};
  if(!params.width){
    params.width = 72;
  }
  if(!params.height){
    params.height = 72;
  }
  if (!params.fill) {
    params.fill = '#00A0F0';
  }
  if(!params.rectangleHeight){
    params.rectangleHeight = 120;
  }
  if(!params.rectangleWidth){
    params.rectangleWidth = 120;
  }

  return <TailSpin {...params}/>;
};