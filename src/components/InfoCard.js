import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Table } from 'reactstrap'
import React from 'react'

function getAge(dateString) {
    var today = new Date()
    var birthDate = new Date(dateString)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age
  }

export const InfoCard = () => (
  <div>
    <Card className="mb-4">
      <Container fluid>
        <Row className="no-gutters">
          <Col md="3" className="about-img-holder">
            <CardImg width="100%" src="images/me.jpg" alt="A photo of me" className="about-img" />
          </Col>
          <Col md="9">
            <CardBody className="d-flex flex-column">
              <div>
                <CardTitle style={{display: 'inline-block', marginRight: '0.5rem', marginBottom: '0'}}>Shane O Donovan</CardTitle>
                <CardSubtitle className="text-muted mb-3" style={{display: 'inline-block'}}>(Software Developer)</CardSubtitle>
              </div>
              <Table bordered responsive>
                <tbody>
                  <tr>
                    <th scope="row" className="bg-light text-dark">Age</th>
                    <td>{getAge('1996-10-12')}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-light text-dark">Email</th>
                    <td><a href="mailto:shane.n.odonovan@mycit.ie">shane.n.odonovan@mycit.ie</a></td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-light text-dark">Phone</th>
                    <td><a href="tel:+353857235267">+353 85 7235267</a></td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-light text-dark">Degree</th>
                    <td>Software Development (BSc Honours)<br />Cork Institute of Technology (2015-2019)</td>
                  </tr>
                </tbody>
              </Table>
              <div className="align-self-center">
                <a className="social-icon social-icon-facebook social-icon--large" title="Facebook profile"
                    href="https://www.facebook.com/shane.donovan.12" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} color="white" fixedWidth />
                </a>
                <a className="social-icon social-icon-twitter social-icon--large" title="Twitter profile"
                    href="https://twitter.com/_shaneod" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'twitter']} color="white" fixedWidth />
                </a>
                <a className="social-icon social-icon-steam social-icon--large" title="Steam profile"
                    href="https://steamcommunity.com/profiles/76561198155260484" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'steam']} color="white" fixedWidth />
                </a>
                <a className="social-icon social-icon-github social-icon--large" title="Github profile"
                    href="https://github.com/shanepm" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'github']} color="black" fixedWidth />
                </a>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </Card>
  </div>
)

export default InfoCard