import "./header.css"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../assets/images/bulb 2.svg"
import { Btn } from "../Button"
import { Div } from "../Div"
import { Form } from "../Form"
import { Aside } from "../Aside"
import { Main } from "../Main/Main"

export function Header({ className }) {
    return (
        <header className="">
            <Div className="big_box d-flex gap-3">
                <Aside></Aside>
                <Div className="warapper">
                <Div className="box py-2 px-3  bg-opacity-50 d-flex container justify-content-between align-items-center">
                    <Div className="d-flex gap-4 align-items-center ">
                        <img src={logo} alt="" />
                        <h2 className="logo text-light">6 Suggestions</h2>
                        <Form></Form>
                    </Div>
                    <Btn className="btn btn-success">+ Add Feedback</Btn>
                </Div>
                <Main></Main>
                </Div>
            </Div>
        </header>
    )
}