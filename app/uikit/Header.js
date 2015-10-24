var React = require('react');
var Nav = require("react-bootstrap").Nav
var Navbar = require("react-bootstrap").Navbar
var NavBrand = require("react-bootstrap").NavBrand
var NavItem = require("react-bootstrap").NavItem
var MenuItem = require("react-bootstrap").MenuItem
var NavDropdown = require("react-bootstrap").NavDropdown

var Header = React.createClass({
    render: function () {
        return (
            <Navbar fixedTop='true'>
                <NavBrand>好工友</NavBrand>
                <Nav>
                    <NavItem eventKey={1} href="#">首页</NavItem>
                    <NavItem eventKey={2} href="#">软件下载</NavItem>
                    <NavItem eventKey={3} href="#">关于我们</NavItem>
                    <NavItem eventKey={4} href="#">加入我们</NavItem>
                </Nav>
            </Navbar>
        )
    }

})

module.exports = Header;