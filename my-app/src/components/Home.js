import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>This is the Welocome Page</h1>
            <Link to="about">Click about page</Link> <br />
            <Link to="contact">Click contact page</Link>
        </div>
    );
}

export default Home;