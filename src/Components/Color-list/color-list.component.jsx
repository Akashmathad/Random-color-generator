import { Component } from "react";
import ColorBox from "../Color-box/color-box.component";
import './color-list.styles.css';
class ColorList extends Component {

  render() {
    const { colors } = this.props;
    return (
      <div className="colors-list">
        {
          colors.map(element => {
            return (
              <ColorBox element={element} />
            )
          })
        }
      </div>
    )
  }
}

export default ColorList;