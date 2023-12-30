import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  //   on event making isSubscribe True
  onChange = () => {
    this.setState(prevState => {
      console.log(prevState.isSubscribed)
      return {isSubscribed: !prevState.isSubscribed}
    })
  }

  getButtonText = () => {
    // on True we are giving subscribed on false subscribe
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.onChange}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
