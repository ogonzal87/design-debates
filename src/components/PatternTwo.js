import React from "react"
import ProsForm from "./ProsForm"
import ConsForm from "./ConsForm"
import base from "../base";
import upArrowSVG from "../css/images/up-arrow-white.svg";

class PatternTwo extends React.Component {
    descriptionRef = React.createRef()
    proDescriptionRef = React.createRef();
    conDescriptionRef = React.createRef();

    state = {
        votes: {},
        pros: {},
        cons: {}
    }

    componentDidMount() {
        const { params } = this.props.match;
        this.votesRef = base.syncState(`${params.id}/pattern-two/votes`, {
            context: this,
            state: "votes"
        })

        this.prosRef = base.syncState(`${params.id}/pattern-two/pros`, {
            context: this,
            state: "pros"
        })

        this.consRef = base.syncState(`${params.id}/pattern-two/cons`, {
            context: this,
            state: "cons"
        })
    }

    // componentWillUnmount() {
    //     base.removeBinding(this.ref);
    // }

    addVote = (e) => {
        const { descriptionRef } = this
        const vote = {
            date: new Date().toJSON().slice(0, 10),
            // description: descriptionRef.current.value || ""
        }
        // 1. Take a copy of the existing state
        const votes = { ...this.state.votes };
        // 2. Add our new fish to that fishes
        votes[`vote${Date.now()}`] = vote
        // 3. Set the new fishes object to state
        this.setState({ votes });
        e.preventDefault();
        e.currentTarget.reset()
    }

    addPro = (e) => {
        const { proDescriptionRef } = this
        const pro = {
            date: new Date().toJSON().slice(0, 10),
            description: proDescriptionRef.current.value
        }
        // 1. Take a copy of the existing state
        const pros = { ...this.state.pros };
        // 2. Add our new fish to that fishes
        pros[`pro${Date.now()}`] = pro
        // 3. Set the new fishes object to state
        this.setState({ pros });
        e.preventDefault();
        e.currentTarget.reset()
    }

    addCon = (e) => {
        e.preventDefault();
        const { conDescriptionRef } = this
        const con = {
            date: new Date().toJSON().slice(0, 10),
            description: conDescriptionRef.current.value
        }
        // 1. Take a copy of the existing state
        const cons = { ...this.state.cons };
        // 2. Add our new fish to that fishes
        cons[`con${Date.now()}`] = con
        // 3. Set the new fishes object to state
        this.setState({ cons });

        e.currentTarget.reset()
    }

    render() {
        return (
            <div className="pattern-container">
                <h1>Pattern Two</h1>
                {
                    this.props.img ? <img className="pattern-img" src={this.props.img} alt="" /> : <div class="spinner blue"></div>
                }
                <form onSubmit={this.addVote}>
                    {/* <textarea
                        ref={this.descriptionRef}
                        placeholder="Description">
                    </textarea>*/}
                    <button className="pattern-vote-button2">
                        &nbsp; &nbsp; {this.state.votes ? Object.keys(this.state.votes).length : 0}
                        <span>
                            <img src={upArrowSVG} alt="" />
                        </span>
                    </button>
                </form>

                <div className="pros-cons-container">
                    <ProsForm
                        addPro={this.addPro}
                        pros={this.state.pros}
                        proDescriptionRef={this.proDescriptionRef} />

                    <ConsForm
                        addCon={this.addCon}
                        cons={this.state.cons}
                        conDescriptionRef={this.conDescriptionRef} />
                </div>
            </div>
        )
    }

}

export default PatternTwo;
