import React, { Component } from 'react';
import "./../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://vngames.online/wp-content/uploads/2020/05/alien-shooter-1-600x344.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://vngames.online/wp-content/uploads/2020/05/alien-shooter-1-600x344.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://vngames.online/wp-content/uploads/2020/05/alien-shooter-1-600x344.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 


export default Carousel;