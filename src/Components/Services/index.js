import React from 'react';
import "./services.css"
import CardService from './CardService';
import Img1 from "../../Assets/img-01.png"
import Img2 from "../../Assets/img-02.png"
import Img3 from "../../Assets/img-03.png"

function Services(props) {

    return (
        <div className="services">
            <CardService delay={3.5} img={Img1} title="A custom formula for your skin's unique needs" subtitle="Curology"/>
            <CardService delay={3.6} img={Img3} title="Open space floor plans for you next venture" subtitle="Yourspace"/>
            <CardService delay={3.7} img={Img2}title="For your Best look ever" subtitle="Lumin"/>
        </div>
    );
}

export default Services;