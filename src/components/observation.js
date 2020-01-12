import React from "react";

class Observation extends React.Component {
  render() {
    return (
      <li key={this.props.key}>{this.props.details.description}</li>
    )
  }
}

export default Observation;
