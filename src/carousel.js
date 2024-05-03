import React from "react";
import { Carousel } from "react-responsive-carousel";
import image1 from "../src/assets/img/1.jpg"
import image2 from "../src/assets/img/2.jpg"
import image3 from "../src/assets/img/3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";


const MyCarousel = () => {
    return (
        <div style={{ width: '300px', height: '300px' }}>
            <Carousel autoPlay stopOnHover infiniteLoop interval={1000} showThumbs={false} showIndicators={false}>
                <div>
                    <img src={image1} alt="Image 1" />
                    <p className="legend">Caption 1</p>
                </div>
                <div>
                    <img src={image2} alt="Image 2" />
                    <p className="legend">Caption 2</p>
                </div>
                <div>
                    <img src={image3} alt="Image 3" />
                    <p className="legend">Caption 3</p>
                </div>
            </Carousel>
        </div >

    )
}

export default MyCarousel;