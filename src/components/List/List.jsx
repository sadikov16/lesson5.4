import { useEffect, useState } from "react";
import "./style.css"
// import { Audio } from 'react-loader-spinner';
import { useSelector } from "react-redux";


export function List() {
    let userData = useSelector((store) =>  store.user.user)

    console.log(userData);
    return (
        <ul >
            {userData && userData.map((user, i) => (

                    <li key={i}  className="item">
                        <div >
                            <h5><span  className="span">posted by:</span>  {user.name}</h5>
                            <h1>{user.email}</h1>
                        </div>
                    </li>
            ))}
        </ul>
    )
}