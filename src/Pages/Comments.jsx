import { useState } from "react";
import { Nav } from "../components/Nav";
import { useEffect } from "react";
import axios from "axios";
import { List } from "../components/List";

export function Comments() {
    let [userData, setUserData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((json) => setUserData(json.data))
    }, [])
    return (
        <>
        <Nav></Nav>
        <List userData={userData}/>
        </>
    )
}