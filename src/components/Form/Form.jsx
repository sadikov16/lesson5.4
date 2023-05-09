import { Select } from "../Select";
import "./form.css"
import { useTranslation } from "react-i18next"

export function Form({ id }) {
    const { t, i18n } = useTranslation()

    // eslint-disable-next-line no-unused-vars
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return <form className="d-flex align-items-baseline">
        <h5 className="text-light">{t("Sort")}</h5>
        <Select></Select>
    </form>
}