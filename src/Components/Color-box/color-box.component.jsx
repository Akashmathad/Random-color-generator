import { Component } from "react";
import './color-box.styles.css'

class ColorBox extends Component {
  render() {
    const { element } = this.props;
    const style = {
      backgroundColor: element
    };
    return (
      <div className="color-box" style={style}>
        <h3 className="colors">{element}</h3>
      </div>
    )
  }
}

export default ColorBox;