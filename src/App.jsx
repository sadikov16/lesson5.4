import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { About, Home, Comments } from "./Pages"


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/comments" element={<Comments />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App