import React from 'react'
import { Row, Col, Card, CardBody, CardText,
         CardTitle, Container, Badge } from 'reactstrap'
import ImageCarousel from './ImageCarousel.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Portfolio = () => (
  <div id="portfolio">
    <h2 class="navpad">Portfolio</h2>
    <Container>
      <Card className="mb-4">
        <Row className="no-gutters">
          <Col md="7">
            <CardBody>
              <CardTitle>
                Aoife's Notes Redesign&nbsp;
                <a href="http://www.aoifesnotes.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></a>
              </CardTitle>
              <CardText>
                Aoife's Notes is a website my 6<sup>th</sup> Year English teacher publishes her notes on. I took the initiative to redesign it in 2015 while studying for the Leaving Certificate.
              </CardText>
              <Badge color="dark">HTML</Badge>
              <Badge color="dark" className="ml-1">CSS</Badge>
            </CardBody>
          </Col>
          <Col md="5">
            <ImageCarousel items={[
              {src: 'images/aoife_old.png', caption: 'Before Redesign'},
              {src: 'images/aoife_new.png', caption: 'After Redesign'}
            ]} />
          </Col>
        </Row>
      </Card>
    </Container>
    <Container>
      <Card className="mb-4">
        <Row className="no-gutters">
          <Col md="7">
            <CardBody>
              <CardTitle>
                CIT CoderDojo Website&nbsp;
                <a href="http://shanepm.github.io/CIT-CoderDojo-Project" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></a>&nbsp;
                <a href="https://github.com/shanepm/CIT-CoderDojo-Project" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
              </CardTitle>
              <CardText>
                As part of our 1<sup>st</sup> Year <i>Web Development Fundamentals</i> module, one of our assignments was to create a website for the CIT CoderDojo club.
                I considered accessibility, semantics, and responsiveness while developing it. I scored 98% in this assignment.
              </CardText>
              <Badge color="dark">HTML</Badge>
              <Badge color="dark" className="ml-1">CSS</Badge>
            </CardBody>
          </Col>
          <Col md="5">
            <ImageCarousel items={[
              {src: 'images/coderdojo_home.png', caption: 'Home'},
              {src: 'images/coderdojo_midterm.png', caption: 'Midterm Camp'},
              {src: 'images/coderdojo_findus.png', caption: 'Find Us'}
            ]} />
          </Col>
        </Row>
      </Card>
    </Container>
    <Container>
      <Card className="mb-4">
        <Row className="no-gutters">
          <Col md="7">
            <CardBody>
              <CardTitle>
                Hangman Game&nbsp;
                <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></a>&nbsp;
                <a href="https://github.com/shanepm/Hangman" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
              </CardTitle>
              <CardText>
                You may be thinking "Hangman? That's really basic".
                However, the game used a number of different technologies making it more complex than any of the above projects.
                I completed this as part of a <i>Front End Frameworks</i> module in 4<sup>th</sup> Year.
                User guesses, games, words and categories were stored in a MariaDB database.
              </CardText>
              <Badge color="dark">HTML</Badge>
              <Badge color="dark" className="ml-1">Sass</Badge>
              <Badge color="dark" className="ml-1">Vue.js</Badge>
              <Badge color="dark" className="ml-1">JS</Badge>
              <Badge color="dark" className="ml-1">NPM</Badge>
              <Badge color="dark" className="ml-1">jQuery</Badge>
              <Badge color="dark" className="ml-1">Go</Badge>
              <Badge color="dark" className="ml-1">MariaDB</Badge>
            </CardBody>
          </Col>
          <Col md="5">
            <ImageCarousel items={[
              {src: 'images/hangman_guest.png', caption: 'Guest View'},
              {src: 'images/hangman_won.png', caption: 'Game Won'},
              {src: 'images/hangman_lost.png', caption: 'Game Lost'},
              {src: 'images/hangman_scores.png', caption: 'Scores'}
            ]} />
          </Col>
        </Row>
      </Card>
    </Container>
  </div>
)

export default Portfolio