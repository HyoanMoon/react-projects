import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
      <div>
        Box1{this.props.num}
      </div>
    )
  }
}
