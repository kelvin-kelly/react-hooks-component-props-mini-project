import React from 'react';
import image from '../assets/logo';

function About({ img, alt }) {
  return (
    <aside>
      <img src={image} alt={alt} />
      <p>"A blog about learning React",</p>
    </aside>
  );
}

About.defaultProps = {
  img: "https://via.placeholder.com/215", 
  alt: 'blog logo'
};

export default About;
