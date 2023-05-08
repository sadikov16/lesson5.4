import "./nav.css"

export function Nav() {
    return (
        <>
            <nav>
                <ul className="d-flex list">
                    <li className="items">
                        <a href="/">Home</a>
                    </li>
                    <li className="items">
                        <a href="/comments">Comments</a>
                    </li>
                    <li className="items">
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}