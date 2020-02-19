import React from 'react'
import { Row, Col, Card, CardBody, CardText,
         CardTitle, Container, Badge } from 'reactstrap'

export const Projects = () => (
  <section id="projects">
    <Container>
      <h2 className="navpad">Projects</h2>
      <Card className="mb-4">
        <Row className="no-gutters">
          <Col md="7">
            <CardBody>
              <CardTitle>
                <a href="http://www.aoifesnotes.com/" target="_blank" rel="noopener noreferrer">
                  BotW Save Converter - Browser Edition
                </a>
              </CardTitle>
              <CardText>
                This is a web application which allows uploading a <em>The Legend of Zelda: Breath of the Wild</em> save directory, converting it from Wii U &lt;-&gt; Switch format. The save files in the directory have their bytes swapped, and the resulting files are then zipped and downloaded, all client-side. It is a Rust port of an existing C# CLI program.
              </CardText>
              <Badge color="secondary">HTML</Badge>
              <Badge color="secondary" className="ml-1">CSS</Badge>
              <Badge color="secondary" className="ml-1">Rust</Badge>
              <Badge color="secondary" className="ml-1">JavaScript</Badge>
            </CardBody>
          </Col>
          <Col md="5">
            <img style={{maxWidth: '100%', padding: '5px', border: '1px solid rgba(0, 0, 0, 0.125)'}} src="images/botw_converter.png" alt="BOTW Save Converter" title="BOTW Save Converter"/>
          </Col>
        </Row>
      </Card>
      <Card className="mb-4">
        <Row className="no-gutters">
          <Col md="7">
            <CardBody>
              <CardTitle>
                <a href="https://github.com/shanepm/Hangman" target="_blank" rel="noopener noreferrer">
                  Hangman Game
                </a>
              </CardTitle>
              <CardText>
                This is a Hangman game I wrote as part of a <i>Front End Frameworks</i> module in college.
                Users can make guesses, which get sent to a REST API. Words aren't exposed to the user, so they cannot cheat. User guesses and games played are stored in a MariaDB database, along with words and their respective categories.
              </CardText>
              <Badge color="secondary">HTML</Badge>
              <Badge color="secondary" className="ml-1">Sass</Badge>
              <Badge color="secondary" className="ml-1">Vue.js</Badge>
              <Badge color="secondary" className="ml-1">JavaScript</Badge>
              <br/>
              <Badge color="secondary">NPM</Badge>
              <Badge color="secondary" className="ml-1">jQuery</Badge>
              <Badge color="secondary" className="ml-1">Go</Badge>
              <Badge color="secondary" className="ml-1">MariaDB</Badge>
            </CardBody>
          </Col>
          <Col md="5">
            <img style={{maxWidth: '100%', padding: '5px', border: '1px solid rgba(0, 0, 0, 0.125)'}} src="images/hangman_won.png" alt="Game Won" title="Game Won"/>
          </Col>
        </Row>
      </Card>
      <Card className="mb-4">
        <Row className="no-gutters">
          <Col md="7">
            <CardBody>
              <CardTitle>
                <a href="http://www.aoifesnotes.com/" target="_blank" rel="noopener noreferrer">
                  Aoife's Notes Redesign
                </a>
              </CardTitle>
              <CardText>
                Aoife's Notes is a website my 6<sup>th</sup> Year English teacher publishes her notes on. I took the initiative to redesign it in 2015 while studying for the Leaving Certificate.
              </CardText>
              <Badge color="secondary">HTML</Badge>
              <Badge color="secondary" className="ml-1">CSS</Badge>
            </CardBody>
          </Col>
          <Col md="5">
            <img style={{maxWidth: '100%', padding: '5px', border: '1px solid rgba(0, 0, 0, 0.125)'}} src="images/aoife_new.png" alt="After Redesign" title="After Redesign"/>
          </Col>
        </Row>
      </Card>
      <Card className="mb-4">
        <Row className="no-gutters">
          <Col md="7">
            <CardBody>
              <CardTitle>
                <a href="https://shanepm.github.io/CIT-CoderDojo-Project" target="_blank" rel="noopener noreferrer">
                  CIT CoderDojo Website
                </a>
              </CardTitle>
              <CardText>
                As part of our 1<sup>st</sup> Year <i>Web Development Fundamentals</i> module, one of our assignments was to create a website for the CIT CoderDojo club.
                I considered accessibility, semantics, and responsiveness while developing it. I scored 98% in this assignment.
              </CardText>
              <Badge color="secondary">HTML</Badge>
              <Badge color="secondary" className="ml-1">CSS</Badge>
            </CardBody>
          </Col>
          <Col md="5">
            <img style={{maxWidth: '100%', padding: '5px', border: '1px solid rgba(0, 0, 0, 0.125)'}} src="images/coderdojo_midterm.png" alt="Midterm Camp" title="Midterm Camp"/>
          </Col>
        </Row>
      </Card>
    </Container>
  </section>
)

export default Projects