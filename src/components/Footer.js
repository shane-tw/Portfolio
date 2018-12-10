import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'reactstrap'
import React from 'react'
 
export const Footer = () => (
  <footer>
    <Container>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span>&copy; Shane O Donovan &mdash; 2018</span>
        <div>
          <a className="social-icon social-icon--small" title="Facebook profile"
              href="https://www.facebook.com/shane.donovan.12" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} color="white" fixedWidth />
          </a>
          <a className="social-icon social-icon--small" title="Twitter profile"
              href="https://twitter.com/_shaneod" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'twitter']} color="white" fixedWidth />
          </a>
          <a className="social-icon social-icon--small" title="Steam profile"
              href="https://steamcommunity.com/profiles/76561198155260484" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'steam']} color="white" fixedWidth />
          </a>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer