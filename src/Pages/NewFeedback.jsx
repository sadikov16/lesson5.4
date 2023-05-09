import { Nav } from "../components/Nav";
import pero from "../components/assets/images/Group 4 (1).svg"
import "./style.css"

export function NewFeedback() {
    return (
        <>
            <Nav></Nav>
            <form className="form">
                <img className="img" src={pero} alt="" />
                <h1 className="create">Editing ‘Add a dark theme option’</h1>
                <h2 className="main">Feedback Title</h2>
                <h3 className="sub">Add a short, descriptive headline</h3>
                <input className="input" type="text" />
                <h2 className="main">Category</h2>
                <h3 className="sub">Choose a category for your feedback</h3>
                <select className="input">
                    <option value="">Feature</option>
                </select>
                <h2 className="main">Update Status</h2>
                <h3 className="sub">Change feedback state</h3>
                <select className="input">
                    <option value="">Planned</option>
                </select>
                <h2 className="main">Feedback Detail</h2>
                <h3 className="sub">Include any specific comments on what should be improved, added, etc.</h3>
                <input className="input_big" type="text" />
                <div className="feedback_box">
                    <button className="delete">Delete</button>
                    <button className="cancel">Cancel</button>
                    <button type="submit" className="add">Add Feedback</button>
                </div>
            </form>
        </>
    )
}