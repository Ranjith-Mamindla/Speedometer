import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(i => {
      let r = i.count
      if (i.count >= 200) {
        r += 0
      } else {
        r += 10
      }
      return {count: r}
    })
  }

  applyBrake = () => {
    this.setState(i => {
      let r = i.count
      if (i.count <= 0) {
        r -= 0
      } else {
        r -= 10
      }
      return {count: r}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="Speedometer"
        />
        <h1>Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btnContainer">
          <button
            className="Accelerate"
            onClick={this.accelerate}
            type="button"
          >
            Accelerate
          </button>
          <button
            className="ApplyBrake"
            onClick={this.applyBrake}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
