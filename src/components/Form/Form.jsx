import { Select } from "../Select";
import "./form.css"

export function Form({ id }) {
    return <form className="d-flex align-items-baseline">
        <h5 className="text-light">Sort by : </h5>
        <Select></Select>
    </form>
}