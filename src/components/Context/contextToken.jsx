import { createContext, useEffect, useState, } from "react";

let modeContext = createContext()

export function ModeProvider({ children }) {

    let [mode, setMode] = useState(
        window.localStorage.getItem("syteMode") || false
    );


    useEffect(() => {
        window.localStorage.setItem("syteMode", mode);
    }, [mode])


    return (
        <>
            <ModeProvider.Provider value={{ mode, setMode }}>
                {children}
            </ModeProvider.Provider>
        </>
    )
}

export { modeContext }