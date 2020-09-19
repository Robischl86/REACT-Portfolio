import React from "react";
import Image from "react-bootstrap/Image"

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Image style={{width: '400px', height: '400px'}} src="https://github.com/Robischl86/GitHub_Portfolio/blob/master/Assets/Images/Bio-image_square.jpg?raw=true" fluid />
      <p class="biography">My name is Levi Robischon and I am a full-stack development student at UW Coding Boot Camp. I currently live in Olympia, and I work for the state as a Medicaid Eligibility Specialist. I specialize in coding, content creation, and photography.</p>
      <p class="biography">My hobbies include writing, kayaking, and trivia. I run a personal blog called Northwest Bar Tops. My goal for this class is to develop the necessary skills to enhance my career and become a programmer or technical writer.</p>
      <h2 class="greeny">Contact Info</h2>
      <ul id="contact-info">
        <li><strong>Email: </strong><a href="mailto:levi.robischon@gmail.com" target="_top">levi.robischon@gmail.com</a></li>
        <li><strong>Github: </strong><a href="https://github.com/Robischl86">Robischl86</a></li>
        <li><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/robischonlevi/" target="_blank">Levi Robischon</a></li>
        <li><strong>Resume: </strong><a href="./Assets/Resume.pdf" target="_blank">Link</a></li>
      </ul>
    </div>
  );
}

export default About;
