import { useContext } from "react";
import { modeContext } from "../Context/contextToken";

function useMode(){
    let {mode, setMode} = useContext(modeContext)

    return [mode, setMode]
}

export default useMode