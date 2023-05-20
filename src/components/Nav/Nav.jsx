import { useTranslation } from "react-i18next"
import "./nav.css"
import { Link } from "react-router-dom"

export function Nav() {
    const { t, i18n } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <>
            <nav>
                <ul className="d-flex list">
                    <li className="items">
                        <Link to="/">{t("Home")}</Link>
                    </li>
                    <li className="items">
                        <Link to="/comments">{t("Comments")}</Link>
                    </li>
                    <li className="items">
                        <Link to="/about">{t("About")}</Link>
                    </li>
                    <li className="items">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="items">
                        <Link to="/admin">Admin</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

<div class="card text-left">
  <img class="card-img-top" src="" alt=""/>
  <div class="card-body">
    <h4 class="card-title">Title</h4>
    <p class="card-text">Body</p>
  </div>
</div>