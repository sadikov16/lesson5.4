import "./style.css"

export function List({ userData }) {
    return (
        <ul>
            {userData && userData.map((comment) => (
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