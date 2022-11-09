import '../styles/styles.css';

const Ejemplo03 = props => {
    return (
        <div>
            <h1>Example with Google Maps</h1>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.0113150389625!2d-58.48553650906618!3d-34.527941298742775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6b4910890a7%3A0xfa1671572e7e67f!2sMcDonald&#39;s!5e0!3m2!1ses-419!2sar!4v1667954737483!5m2!1ses-419!2sar" style={{ width: 1000, height: 450, border: 0 }}></iframe>
            </div>
        </div>
    )
}

export default Ejemplo03;