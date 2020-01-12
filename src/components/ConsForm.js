import React from "react"
import Observation from "./observation"

export default class ConsForm extends React.Component {
  state = {
    con: ''
  };

  render() {
    return (
      <div>
        <form className="" onSubmit={this.props.addCon}>
          <label>Con</label> <br />
          <input className="pro-cons-input" ref={this.props.conDescriptionRef} required />
          <button className="add-comment-btn">+ Con</button>
        </form>
        <ul>
          {
            this.props.cons && Object.keys(this.props.cons).map(key => (
              <Observation key={key} details={this.props.cons[key]} />
            ))
          }
        </ul>
      </div>
    );
  }
}
