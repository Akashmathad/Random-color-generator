import { Component } from 'react';
import ColorList from './Components/Color-list/color-list.component';
import ResetButton from './Components/Reset-button/reset-button.component';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      colours: [],
    }
  }

  changeColors = () => {
    const colorArray = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let color = '#';
    const letterPicker = () => {
      let index = Math.trunc(Math.random() * colorArray.length);
      return colorArray[index];
    }

    const colorPicker = () => {
      for (let i = 0; i < 6; i++) {
        color += letterPicker();
      }
      return color;
    }
    const newColors = [];
    for (let i = 0; i < 20; i++) {
      color = '#';
      newColors.push(colorPicker());
    }
    this.setState(() => {
      return {
        colours: newColors
      }
    })
  }

  componentDidMount() {
    this.changeColors();
  }

  render() {
    return (
      <div className='App'>
        <h1 className='heading-primary'>Random Color Generator</h1>
        <ResetButton changeColors={this.changeColors} />
        <ColorList colors={this.state.colours} />
      </div>
    );
  }
}


export default App;
