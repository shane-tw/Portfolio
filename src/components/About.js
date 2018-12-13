import { Container } from 'reactstrap'
import React from 'react'
 
export const About = () => (
  <div id="about">
    <h2 class="navpad">About</h2>
    <Container>
      <p>Hi, I'm Shane. I am a software developer.</p>
      <p>Here are some more facts about me:</p>
      <ul>
        <li>I like writing website logic and enjoy writing code knowing that what is being written will benefit customers.</li>
        <li>I began actively using the computer when I was 10, and I started coding when I was 13.</li>
        <li>I learned the basics of coding through LSS, an embedded version of the Lua programming language, moving on to VB.NET and later Python.</li>
        <li>I also have a basic level of understanding in SQL, and some experience writing Bash scripts.</li>
        <li>I have worked with Linux and have installed Arch Linux. Installation involved command-line disk partitioning.</li>
        <li>In my spare time I occasionally enjoy finding website vulnerabilities and primarily work on a Linux machine.</li>
      </ul>
      <h3>Coding Proficiency</h3>
      <p>I am familiar with the following technologies:</p>
      <ul>
        <li>HTML, CSS, Sass, Bootstrap</li>
        <li>JavaScript, NodeJS, KnockoutJS, VueJS, ReactJS</li>
        <li>Python, Java</li>
      </ul>
      <p>
          Some of these languages and frameworks are used in the portfolio section below,
          with additional examples located on my <a href="https://github.com/shanepm?tab=repositories" target="_blank" rel="noopener noreferrer">Github profile</a>.
      </p>
    </Container>
  </div>
)

export default About