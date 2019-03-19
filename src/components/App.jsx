
// 55-40-sitting, 26-80-sneaky-chasing-lunch, 43-64-front, 26-80-back
import Player from '../components/Player.jsx'
import React from 'react';

const availablePositions = {
  front: { left: 43, top: 64 },
  back: { left: 50, top: 86 },
  sitting: { left: 55, top: 40 },
  sneaking: { left: 26, top: 80 }
}

const possibleDirections = ["front", "back", "sitting", "sneaking"]
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: possibleDirections[3],
      currentFairyPosition: 'hidden',
      willoWispStyle: availablePositions.sneaking,
      fairyStyle: {
        left: availablePositions.sneaking.left,
        top: availablePositions.sneaking.top - 24
      }
    };
  }

  //move willow wisp to another location
  //show fairy where willo wisp was just located
  //show only willow wisp on initial page load, then show both after first click
  handleClick() {
    if (this.state.currentFairyPosition === 'hidden') {
      this.setState({
        willoWispStyle: availablePositions.front,
        currentFairyPosition: 'sneaking'
      })
    } else if (this.state.currentFairyPosition === 'sneaking') {
      this.setState({
        fairyStyle: {
          left: this.state.willoWispStyle.left + 2,
          top: this.state.willoWispStyle.top - 9,
          height: '200px'
        },
        willoWispStyle: availablePositions.back,
        currentFairyPosition: 'front'
      })
    } else if (this.state.currentFairyPosition === 'front') {
      this.setState({
        fairyStyle: {
          left: this.state.willoWispStyle.left - 4,
          top: this.state.willoWispStyle.top - 26,
          height: '350px'
        },
        willoWispStyle: availablePositions.sitting,
        currentFairyPosition: 'back'
      })
    } else if (this.state.currentFairyPosition === 'back') {
      this.setState({
        fairyStyle: {
          left: this.state.willoWispStyle.left,
          top: this.state.willoWispStyle.top - 13,
          height: '280px'
        },
        willoWispStyle: availablePositions.sneaking,
        currentFairyPosition: 'sitting'
      })
    } else if (this.state.currentFairyPosition === 'sitting') {
      this.setState({
        fairyStyle: {
          left: this.state.willoWispStyle.left,
          top: this.state.willoWispStyle.top - 24,
          height: '300px'
        },
        willoWispStyle: availablePositions.front,
        currentFairyPosition: 'sneaking'
      })
    }
    const audio = document.getElementById("audio");
    audio.play();
  }

  render() {

    const willoWispStyle = {
      top: `${this.state.willoWispStyle.top}%`,
      left: `${this.state.willoWispStyle.left}%`
    }

    const fairyStyle = {
      top: `${this.state.fairyStyle.top}%`,
      left: `${this.state.fairyStyle.left}%`,
      height: this.state.fairyStyle.height
    }

    const showFairy = this.state.currentFairyPosition !== 'hidden';

    return (
      <div onClick={this.handleClick.bind(this)}>
        <img src="/images/wisp-no-background.gif" alt="" id='will-o-the-wisp' style={willoWispStyle} />
        {showFairy ? <Player currentFairyPosition={this.state.currentFairyPosition} style={fairyStyle} /> : null}
        <audio id="audio" src="/audio/magic-fairy-dust-sound.mp3" ></audio>
      </div>
    )
  }
}

export default App;


// import Spritesheet from 'react-responsive-spritesheet'

{/* <Spritesheet
        image={`node_modules/react-responsive-spritesheet/assets/images/myImages/fairy-front.png`}
        widthFrame={1600}
        heightFrame={1448}
        steps={46}
        fps={12}
        direction={`forward`}
        timeout={1800}
        autoplay={false}
        // loop={true}
        // startAt={10}
        // endAt={30}
        getInstance={spritesheet => {
          this.spriteInstance = spritesheet;
        }}

        onClick={spritesheet => {
          spritesheet.play();
        }}

      /> */}