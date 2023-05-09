import { useTranslation } from "react-i18next"
import "./select.css"

export function Select(){
    const { t, i18n } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return <select className="">
        <option>{t("Upvotes")}</option>
    </select>
}