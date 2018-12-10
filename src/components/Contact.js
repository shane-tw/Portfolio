import { Container, Row, Col, Button } from 'reactstrap'
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import React from 'react'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(_, values) {
    let data = new FormData()
    data.append('name', values.name)
    data.append('_replyto', values.email)
    data.append('message', values.message)
    data.append('_subject', 'Contact form submitted')

    fetch('https://mailthis.to/kenshii.sod@gmail.com', {
      method: 'POST',
      body: data
    }).then(function() {
      window.location.href = 'https://mailthis.to/confirm'
    })
  }

  render() {
    return (
      <div id="contact">
        <h2 class="navpad">Contact</h2>
        <Container>
          <AvForm onValidSubmit={this.handleSubmit}>
            <Row>
              <Col md="6">
                <AvGroup>
                  <AvInput type="text" name="name" placeholder="Your Name *" required />
                  <AvFeedback>Please let me know your name</AvFeedback>
                </AvGroup>
                <AvGroup>
                  <AvInput type="email" name="email" placeholder="Your Email *" required />
                  <AvFeedback>Please fill in your email so I can reply</AvFeedback>
                </AvGroup>
                <AvGroup>
                  <Button type="submit" className="btn-primary" style={{width: '100%'}}>Send Message</Button>
                </AvGroup>
              </Col>
              <Col md="6">
                <AvGroup>
                  <AvInput type="textarea" name="message" placeholder="Your Message *" style={{width: '100%', height: '150px'}} required />
                  <AvFeedback>Please let me know your thoughts</AvFeedback>
                </AvGroup>
              </Col>
            </Row>
          </AvForm>
        </Container>
      </div>
    )
  }
}