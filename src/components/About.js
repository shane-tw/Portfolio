import { Container } from 'reactstrap'
import React from 'react'
 
export const About = () => (
  <div id="about">
    <h2 class="navpad">About</h2>
    <Container>
      <p>Hi, I'm Shane. I am a software developer.</p>
      <p>I like writing logic, whether it is frontend or backend and enjoy writing code knowing that what is being written will benefit customers.</p>
      <p>I'm familiar with the following technologies:</p>
      <ul>
        <li>HTML, CSS, Sass, Bootstrap</li>
        <li>JavaScript, NodeJS, KnockoutJS, VueJS, ReactJS</li>
        <li>Python, Java</li>
      </ul>
      <p>In my spare time I occasionally enjoy finding website vulnerabilities and primarily work on a Linux machine.</p>
    </Container>
  </div>
)

export default About