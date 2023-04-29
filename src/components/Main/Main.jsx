import { Ul } from "../Ul";
import {Div} from "../Div"
import straith from "../assets/images/straith.svg"
import { Btn } from "../Button";
import comment from "../assets/images/Path.svg"
import "./main.css"


export function Main() {
    return (
        <main>
            <Div>
                <Ul className="ul">
                    <li className="item">
                        <Div className="numbers">
                            <img src={straith} alt="" />
                            <h1>112</h1>
                        </Div>
                        <Div className="descriptions">
                            <p>Add tags for solutions</p>
                            <h3>Easier to search for solutions based on a specific stack.</h3>
                            <Btn className="btn">Enhancement</Btn>
                        </Div>
                        <Div className="comment">
                            <img src={comment} alt="" />
                            <h4>2</h4>
                        </Div>
                    </li>
                    <li className="item">
                        <Div className="numbers">
                            <img src={straith} alt="" />
                            <h1>99</h1>
                        </Div>
                        <Div className="descriptions">
                            <p>Add a dark theme option</p>
                            <h3>It would help people with light sensitivities and who prefer dark mode.</h3>
                            <Btn className="btn">Feature</Btn>
                        </Div>
                        <Div className="comment">
                            <img src={comment} alt="" />
                            <h4>4</h4>
                        </Div>
                    </li>
                    <li className="item">
                        <Div className="numbers">
                            <img src={straith} alt="" />
                            <h1>65</h1>
                        </Div>
                        <Div className="descriptions">
                            <p>Q&A within the challenge hubs</p>
                            <h3>Challenge-specific Q&A would make for easy reference.</h3>
                            <Btn className="btn">Feature</Btn>
                        </Div>
                        <Div className="comment">
                            <img src={comment} alt="" />
                            <h4>1</h4>
                        </Div>
                    </li>
                    <li className="item">
                        <Div className="numbers">
                            <img src={straith} alt="" />
                            <h1>51</h1>
                        </Div>
                        <Div className="descriptions">
                            <p>Allow image/video upload to feedback</p>
                            <h3>Images and screencasts can enhance comments on solutions.</h3>
                            <Btn className="btn">Enhancement</Btn>
                        </Div>
                        <Div className="comment">
                            <img src={comment} alt="" />
                            <h4>2</h4>
                        </Div>
                    </li>
                    <li className="item">
                        <Div className="numbers">
                            <img src={straith} alt="" />
                            <h1>42</h1>
                        </Div>
                        <Div className="descriptions">
                            <p>Ability to follow others</p>
                            <h3>Stay updated on comments and solutions other people post.</h3>
                            <Btn className="btn">Feature</Btn>
                        </Div>
                        <Div className="comment">
                            <img src={comment} alt="" />
                            <h4>3</h4>
                        </Div>
                    </li>
                    <li className="item">
                        <Div className="numbers">
                            <img src={straith} alt="" />
                            <h1>3</h1>
                        </Div>
                        <Div className="descriptions">
                            <p>Preview images not loading</p>
                            <h3>Challenge preview images are missing when you apply a filter..</h3>
                            <Btn className="btn">Bug</Btn>
                        </Div>
                        <Div className="comment">
                            <img src={comment} alt="" />
                            <h4>0</h4>
                        </Div>
                    </li>
                </Ul>
            </Div>
        </main>
    )
}