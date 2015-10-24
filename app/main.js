/** @jsx React.DOM */
var React = require('react');
var ReactDom = require('react-dom')
var Router = require('react-router').Router
var Route = require('react-router').Route
var App = require('./App.js');
ReactDom.render((
    <Router>
        <Route path="/" component={App}>

        </Route>
    </Router>
), document.getElementById("app"))