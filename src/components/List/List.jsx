import { useEffect, useState } from "react";
import "./style.css"
import { Audio } from 'react-loader-spinner';


export function List({ userData }) {
    let [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [])
    return (
        <ul>
            {userData && userData.map((comment) => (
                loading ?
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    /> :

                    <li className="item">
                        <div>
                            <h5><span className="span">posted by:</span>  {comment.email}</h5>
                            <h1>{comment.body}</h1>
                        </div>
                    </li>
            ))}
        </ul>
    )
}