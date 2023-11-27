import React from "react";
import logo from "../image/images.png";

const About = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="container-sm" id="about">
          <div class="card bg-dark text-white">
            <img src={logo} class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h2 class="card-title text-dark">ABOUT US</h2>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
        <div className="container-sm" id="about2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          error, corporis corrupti ad perferendis fugiat debitis, asperiores
          quas cupiditate minima autem maxime incidunt possimus hic laudantium.
          Maxime possimus dolor laboriosam accusamus harum laborum asperiores
          molestiae, facilis nam vitae quas sunt aspernatur voluptatibus,
          explicabo reiciendis non eos, eaque iure quos culpa! Obcaecati
          delectus ipsum, nisi accusamus ipsa, porro debitis eligendi temporibus
          dolorum in facere? Exercitationem, nihil nemo facilis nulla dolorem
          error natus aut aliquam ab! Ab consectetur doloribus, esse nihil
          temporibus hic nesciunt quam eligendi nemo, impedit voluptatibus harum
          est perferendis ipsa enim voluptates voluptate repellendus id. Vitae
          non quos reprehenderit.
        </div>
      </div>
    </div>
  );
};

export default About;
