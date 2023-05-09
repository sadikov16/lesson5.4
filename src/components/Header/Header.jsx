import "./header.css"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../assets/images/bulb 2.svg"
import { Btn } from "../Button"
import { Div } from "../Div"
import { Form } from "../Form"
import { Aside } from "../Aside"
import { Main } from "../Main/Main"
import { Nav } from "../Nav"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export function Header({ className }) {
    const { t, i18n } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }
    return (
        <header className="">
            <Div className="big_box d-flex gap-3">
                <Aside></Aside>
                <Div className="warapper">
                    <Div className="box py-2 px-3  bg-opacity-50 d-flex container flex-column">
                        <Div className="d-flex gap-4 align-items-center ">
                            <Div className="d-flex gap-4 align-items-center ">
                                <img src={logo} alt="" />
                                <h2 className="logo text-light">6 {t("Suggestions")}</h2>
                                <Form></Form>
                            </Div>
                            <Link to="/add"><Btn className="btn btn-success">+ {t("Feedback")}</Btn></Link>
                        </Div>
                        <Nav></Nav>
                    </Div>
                    <Main></Main>
                </Div>
            </Div>
        </header>
    )
}