import React from "react";
import PatternOne from "./PatternOne";
import PatternTwo from "./PatternTwo";
import { firebaseApp } from "../base";
import stars from "../css/images/stars-blue.svg";

class App extends React.Component {
    state = {
        patternOneImg: '',
        patternTwoImg: ''
    }

    getPictures() {
        const { match } = this.props;
        const storage = firebaseApp.storage();
        const storageRef = storage.ref();
        const urlsArr = [];

        const patternImgsRef = storageRef.child(`${match.params.id}`);

        patternImgsRef.listAll().then((result) => {
            result.items.forEach((imageRef) => {
                imageRef.getDownloadURL().then((url) => {
                    urlsArr.push(url);
                }).catch((error) => {
                    alert(error);
                });
            });
        }).catch(function (error) {
            alert(error);
        });

        setTimeout(() => {
            this.setState({
                patternOneImg: urlsArr[0],
                patternTwoImg: urlsArr[1]
            })
        }, 1500);
    }

    componentDidMount() {
        this.getPictures();
    }

    componentDidUpdate() {
        this.getPictures();
    }

    render() {
        return (
            <div className="patterns">
                {/*<img className="stars" src={stars} alt="" />*/}
                <PatternOne match={this.props.match} img={this.state.patternOneImg} />
                <PatternTwo match={this.props.match} img={this.state.patternTwoImg} />
            </div>
        );
    }
}

export default App;
