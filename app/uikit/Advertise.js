/**
 * Created by zhaoyuntao on 15/10/22.
 */
var React = require('react');
var Carousel = require("react-bootstrap").Carousel
var CarouselItem = require("react-bootstrap").CarouselItem

var Advertise = React.createClass({
    getInitialState:function() {
        return {
            index: 0,
            direction: 'next'
        };
    },

    handleSelect:function(selectedIndex, selectedDirection) {
        alert('selected=' + selectedIndex + ', direction=' + selectedDirection);
        this.setState({
            index: selectedIndex,
            direction: selectedDirection
        });
    },

    render:function() {
        return (
            <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                <CarouselItem>
                    <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
                    <div className="carousel-caption">
                        <h3>First slide label1</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
                    <div className="carousel-caption">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
                    <div className="carousel-caption">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </CarouselItem>
            </Carousel>
        );
    }
});

module.exports = Advertise