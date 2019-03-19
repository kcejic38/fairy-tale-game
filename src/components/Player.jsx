import React from 'react';

const Player = (props) => {
  const currentFairyPosition = props.currentFairyPosition
  let imageSource = ''
  if (currentFairyPosition === 'front' || !currentFairyPosition) {
    imageSource = "../images/fairy-front.png"
  } else if (currentFairyPosition === 'back') {
    imageSource = "../images/fairy-back.png"
  } else if (currentFairyPosition === 'sitting') {
    imageSource = "../images/fairy-sitting.png"
  } else if (currentFairyPosition === 'sneaking') {
    imageSource = "../images/fairy-sneaking.png"
  }
  return (
    <img src={imageSource} alt="fairy-front" id="fairy" style={props.style} />
  );
}
export default Player
