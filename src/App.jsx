import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { About, Home, Comments } from "./Pages"
import { Edit } from "./Pages/Edit"
import { NewFeedback } from "./Pages/NewFeedback"
import "./index.css"

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/add" element={<Edit />} />
                    <Route path="/edit" element={<NewFeedback/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App