import React from "react";
import firebase from "firebase";
import thumbSVG from "../css/images/thumb.svg";
import starsBlueSVG from "../css/images/stars-blue.svg";
import arrowRightSVG from "../css/images/right-arrow.svg";
import starsSVG from "../css/images/stars.svg";
import soleStarSVG from "../css/images/sole-star.svg";

class FileUploader extends React.Component {
    patternOneUploadRef = React.createRef();
    patternTwoUploadRef = React.createRef();

    state = {
        storageRef1Name: '',
        storageRef2Name: '',
    }

    goToDebate = event => {
        event.preventDefault();
        const { history, match } = this.props;
        const pathName = match.params.id;

        // Get file
        let file1 = this.patternOneUploadRef.current.files[0];
        let file2 = this.patternTwoUploadRef.current.files[0];
        // Create storage ref
        let storageRef1 = firebase.storage().ref(`${pathName}/${file1.name}`);
        let storageRef2 = firebase.storage().ref(`${pathName}/${file2.name}`);
        this.setState({ storageRef1Name: file1.name });
        this.setState({ storageRef2Name: file2.name });
        // Upload file
        storageRef1.put(file1);
        storageRef2.put(file2);

        history.replace(`/debate/${pathName}`);
    }

    render() {
        return (
            <section className="file-uploader">
                <form onSubmit={this.goToDebate}>
                    <div className="file-uploader__pattern-two">
                        <h4>Pattern Two</h4>
                        <input
                            className="file-uploader__pattern-two__btn"
                            ref={this.patternOneUploadRef}
                            type="file"
                            required
                            name="patternOneUploadFile" />
                    </div>
                    <h3>VS</h3>
                    <div className="file-uploader__pattern-one">
                        <h4>Pattern One</h4>
                        <input
                            className="file-uploader__pattern-one__btn"
                            ref={this.patternTwoUploadRef}
                            required
                            type="file"
                            name="patternTwoUploadFile" />
                    </div>
                    <button className="file-uploader__submit-btn" type="submit">
                        Start debating &nbsp;
                        <img src={arrowRightSVG} alt="" />
                    </button>
                </form>
                <img className="file-uploader__thumb-svg" src={thumbSVG} alt="" />
                <img className="file-uploader__stars-blue-svg" src={starsBlueSVG} alt="" />
                <img className="file-uploader__stars1-svg" src={starsSVG} alt="" />
                <img className="file-uploader__stars2-svg" src={starsSVG} alt="" />
                <img className="file-uploader__sole-star-svg" src={soleStarSVG} alt="" />
            </section>
        )
    }
}

export default FileUploader;
