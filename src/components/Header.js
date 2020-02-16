import Scrollspy from 'react-scrollspy'
import {
  Container, Collapse, Navbar, NavbarToggler,
  NavbarBrand, NavItem, NavLink
} from 'reactstrap'
import React from 'react'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.close = this.close.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  close() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <header>
        <Navbar color="dark" dark expand="md" fixed="top">
          <Container>
            <NavbarBrand href="#top">Shane's Site</NavbarBrand>    
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Scrollspy items={ ['about', 'projects', 'vulnerabilities', 'contact'] } currentClassName="active" className="navbar-nav" offset={-50}>
                <NavItem>
                  <NavLink href="#about" onClick={this.close}>About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#projects" onClick={this.close}>Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#workexperience" onClick={this.close}>Work Experience</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#vulnerabilities" onClick={this.close}>Vulnerabilities</NavLink>
                </NavItem>
              </Scrollspy>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}