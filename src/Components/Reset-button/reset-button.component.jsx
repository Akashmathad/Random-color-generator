import { Component } from "react";
import './reset-button.style.css';

class ResetButton extends Component {
  render() {
    const { changeColors } = this.props;
    return (
      <div className="button-box">
        <button className="reset-btn" onClick={changeColors}>Reset Colors</button>
      </div>

    )
  }
}

export default ResetButton;