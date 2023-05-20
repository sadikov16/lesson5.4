import { useState } from "react";
import { Nav } from "../components/Nav";
import { useEffect } from "react";
import axios from "axios";
import { List } from "../components/List";
import "./style.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export function Comments() {
    // let select = useSelector((store) => store.users.user)
    // let [userData, setUserData] = useState([])

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/comments")
    //         .then((json) => setUserData(json))
    // }, [])
    return (
        <>
            <Nav></Nav>
            <Link to="/edit"><button className="editt">Edit Feedback</button></Link>
            <List/>
        </>
    )
}