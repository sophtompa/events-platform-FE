function Home() {

    return (
        <section>
            Welcome to Events-Platform
            You must have an account to access events.
            <button onClick={() => navigate("staff-signup")}>Staff Login</button>
            <button>Staff Sign Up</button>
        </section>
    )
}

export default Home;