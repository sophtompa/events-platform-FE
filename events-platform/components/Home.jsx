import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    return (
        <section>
            Welcome to the Events-Platform
            <p>Staff can login to post events:</p>
            <button onClick={() => navigate("staff-signup")}>Staff Sign Up</button>
            <button onClick={() => navigate("staff-login")}>Staff Log In</button>
            <p>Browse events as non-staff with the button below</p>
            <button onClick={() => navigate("events")}>Browse</button>
        </section>
    )
}

export default Home;