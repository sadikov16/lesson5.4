import { Btn } from "../Button";
import { Div } from "../Div";
import { Ul } from "../Ul";
import "./aside.css"

export function Aside() {
    return (<aside>
        <Div>
            <Ul className="list-unstyled">
                <li className="card_1">
                    <h2>Frontend Mentor</h2>
                    <h3>Feedback Board</h3>
                </li>
                <li className="card_2">
                    <Btn className="btn">All</Btn>
                    <Btn className="btn">Ul</Btn>
                    <Btn className="btn">Ux</Btn>
                    <Btn className="btn">Enhancement</Btn>
                    <Btn className="btn">Bug</Btn>
                    <Btn className="btn">Feature</Btn>
                </li>
                <li className="card_3">
                     <Div className="head">
                        <h1>Roadmap</h1>
                        <a href="somewhere">View</a>
                     </Div>
                     <Ul className="listt">
                        <li className="li">
                            <h1>Planned</h1>
                            <h2>3</h2>
                        </li>
                        <li className="li">
                            <h1>In-Progress</h1>
                            <h2>2</h2>
                        </li>
                        <li className="li">
                            <h1>Live</h1>
                            <h2>1</h2>
                        </li>
                     </Ul>
                </li>
            </Ul>
        </Div>
    </aside>)
}