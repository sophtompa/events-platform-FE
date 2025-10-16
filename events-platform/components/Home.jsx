import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    return (
        <section>
            Welcome to Events-Platform
            You must have an account to access events.
            <button onClick={() => navigate("staff-signup")}>Staff Sign Up</button>
            <button onClick={() => navigate("staff-login")}>Staff Log In</button>
        </section>
    )
}

export default Home;