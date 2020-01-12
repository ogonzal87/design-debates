import React from "react"
import Observation from "./observation"
export default class ProsForm extends React.Component {
  state = {
    pro: ''
  };

  render() {
    return (
      <div>
        <form className="" onSubmit={this.props.addPro}>
          <label>Pro</label> <br />
          <input className="pro-cons-input" ref={this.props.proDescriptionRef} required />
          <button className="add-comment-btn">+ Pro</button>
        </form>
        <ul>
          {
            this.props.pros && Object.keys(this.props.pros).map(key => (
              <Observation key={key} details={this.props.pros[key]} />
            ))
          }
        </ul>
      </div>
    );
  }
}
