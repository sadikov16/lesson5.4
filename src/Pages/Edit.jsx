import { Nav } from "../components/Nav"
import plus from "../components/assets/images/Group 4.svg"
import "./style.css"

export function Edit() {
    return (
        <>
        <Nav></Nav> 
        <form className="form">
            <img className="img" src={plus} alt="" />
            <h1 className="create">Create New Feedback</h1>
            <h2 className="main">Feedback Title</h2>
            <h3 className="sub">Add a short, descriptive headline</h3>
            <input  className="input" type="text" />
            <h2 className="main">Category</h2>
            <h3 className="sub">Choose a category for your feedback</h3>
            <select className="input">
                <option>Feature</option>
                <option>Something </option>
            </select>
            <h2 className="main">Feedback Detail</h2>
            <h3 className="sub">Include any specific comments on what should be improved, added, etc.</h3>
            <input className="input_big" type="text" />
            <div className="feedback_box">
            <button className="cancel">Cancel</button>
            <button className="add" type="submit">Add Feedback</button>
            </div>
        </form>
        </>
    )
}