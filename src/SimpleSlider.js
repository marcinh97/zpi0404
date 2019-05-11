import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <Slider settings={settings}>
                {/*<div>*/}
                    {/*<h3>*/}
                        {/*<img src={require("./views/wozek2.jpg")}/>*/}
                    {/*</h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<h3><img src={require("./views/wozek3.jpeg")}/></h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<h3><img src={require("./views/wozek1.jpg")}/></h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<h3><img src={require("./views/wozek2.jpg")}/></h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<h3><img src={require("./views/wozek3.jpeg")}/></h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<h3><img src={require("./views/wozek1.jpg")}/></h3>*/}
                {/*</div>*/}
            </Slider>
        );
    }
}

export default SimpleSlider;