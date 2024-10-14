import React from 'react';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Welcome to My Website</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="home">
                    <h2>Home Section</h2>
                    <p>This is the home section of the website.</p>
                </section>
                <section id="about">
                    <h2>About Section</h2>
                    <p>This is the about section of the website.</p>
                </section>
                <section id="contact">
                    <h2>Contact Section</h2>
                    <p>This is the contact section of the website.</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 My Website</p>
            </footer>
        </div>
    );
};

export default Home;