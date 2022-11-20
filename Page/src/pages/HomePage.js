import '../styles/home.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div>
                <img src="images/home/img01.jpg" alt="plane" />
            </div>
            <div className="columns">
                <section className="welcome">
                    <h2>Welcome</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum amet ad iure voluptatum maiores quae
                        animi quam dignissimos dolores maxime temporibus assumenda magnam optio ab molestiae quia id,
                        inventore reprehenderit.
                        Sapiente quisquam culpa dignissimos reprehenderit omnis. Assumenda non animi facilis aliquam dolorem
                        aliquid ut fuga.</p>
                </section>
                <section className="testimonies">
                    <h2>Testimonies</h2>
                    <div className="testimony">
                        <span className="quote">Simply excellent</span>
                        <span className="author">Juan Gomez - shoes.com</span>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HomePage;