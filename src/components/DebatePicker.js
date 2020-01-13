import React, { Fragment } from "react";
import { getFunName } from "../helpers";
import thumbSVG from "../css/images/thumb.svg";
import starsBlueSVG from "../css/images/stars-blue.svg";
import starsSVG from "../css/images/stars.svg";

class DebatePicker extends React.Component {
  debateNameRef = React.createRef();

  goToFileUploader = event => {
    const { history } = this.props;
    // 1. Stop the form from Submitting automatically
    event.preventDefault();
    // 2. Get text from the Input
    const pathName = this.debateNameRef.current.value;
    // 3. Change the page to /debate/whatever-they-entered
    history.push(`/debate/${pathName}/files-uploader`);
  };

  render() {
    return (
      <Fragment>
        <div className="debate-picker">
          <div className="debate-picker__container">
            <div>
              <h2 className="debate-picker__subheading">Go Vote</h2>
              <h1 className="debate-picker__heading">DESIGN PATTERN DEBATES</h1>
            </div>
            <p className="debate-picker__description">A democratic approach for when you can't decide which design solution is best.</p>
            <img className="debate-picker__stars-svg" src={starsSVG} alt="" />

            <form className="debate-selector__form" onSubmit={this.goToFileUploader}>
              <label>Debate Name</label>
              <input
                ref={this.debateNameRef}
                type="text"
                required
                placeholder="top-sheetz"
              // defaultValue={getFunName()}
              />
              <button type="submit">Create Debate</button>
            </form>
          </div>
          <img className="debate-picker__thumb-svg" src={thumbSVG} alt="" />
          <img className="debate-picker__stars-blue-svg" src={starsBlueSVG} alt="" />
        </div>
      </Fragment>
    );
  }
}

export default DebatePicker;
