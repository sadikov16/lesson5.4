import { Route, Routes, json } from "react-router-dom"
import { About, Home, Comments, Login } from "./Pages"
import { Edit } from "./Pages/Edit"
import { NewFeedback } from "./Pages/NewFeedback"
import "./index.css"
import { Private, Public } from "./components/Routes"
import { Admin } from "./components/Admin"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { userAction } from "./store/users/users.slice"


function App() {
    let dispatch = useDispatch()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => {
                dispatch(userAction.setUser(json))
            })
    }, [])
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Public />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/about" element={<About />} />
                <Route path="/add" element={<Edit />} />
                <Route path="/edit" element={<NewFeedback />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Private />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </>
    )
}
export default App