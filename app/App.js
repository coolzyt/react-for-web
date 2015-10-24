/** @jsx React.DOM */
var React = require('react');
var Button = require("react-bootstrap/lib/Button");
var Header = require("./uikit/Header")
var Advertise = require("./uikit/Advertise")
var App = React.createClass({
	render: function() {
		return (
            <div>
                <Header/>
                <Advertise/>

                <h1>Hello world!</h1>
                <h1>Hello world!</h1>
                <h1>Hello world!</h1>
                <h1>Hello world!</h1>
                <h1>Hello world!</h1>
                <h1>Hello world!</h1>
                <h1>Hello world!</h1>
                <h1>Hello world!</h1>


            </div>
		);
	}
	
});
	
module.exports = App;
