import { Container } from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faSteam, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import Header from './components/Header.js'
import InfoCard from './components/InfoCard.js'
import About from './components/About.js'
import Portfolio from './components/Portfolio.js'
import Vulnerabilities from './components/Vulnerabilities.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

library.add(faFacebookF, faTwitter, faSteam, faGithub, faExternalLinkAlt)

class App extends Component {
  render() {
    return (
      <div>
        <Container className="App">
          <Header />
          <div id="top">
            <InfoCard />
            <About />
            <Portfolio />
            <Vulnerabilities />
            <Contact />
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default App