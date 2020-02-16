import { Container } from 'reactstrap'
import React from 'react'
 
export const About = () => (
  <section id="about">
    <Container>
      <p><b>Note: This page is being rewritten currently (16/02/2020).</b></p>
      <h2 className="navpad">About</h2>
      <p>Hi, I'm Shane. I am a software developer.</p>
      <p>Here are some more facts about me:</p>
      <ul>
        <li>I like writing website logic and enjoy writing code knowing that what is being written will benefit customers.</li>
        <li>I began actively using the computer when I was 10, and I started coding when I was 13.</li>
        <li>I learned the basics of programming through LSS, an embedded version of the Lua, moving on to VB.NET and later Python.</li>
        <li>I primarily work on a Linux machine.</li>
      </ul>
      <h3>Coding Proficiency</h3>
      <p>I am familiar with the following technologies:</p>
      <ul>
        <li>HTML, CSS, Sass, Bootstrap</li>
        <li>JavaScript, NodeJS, KnockoutJS, VueJS, ReactJS</li>
        <li>Python, Java</li>
      </ul>
      <p>
          See my <a href="https://github.com/shanepm?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub profile</a> for examples.
      </p>
    </Container>
  </section>
)

export default About