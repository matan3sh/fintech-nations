import React from 'react';

const About = () => {
  return (
    <section className='about' id='About'>
      <div className='about__image'>
        <img src='/images/about/a-scaled.jpg' alt='about' />
      </div>
      <div className='about__content'>
        <h1>About The Hackathon</h1>
        <p>
          This Fintech Hackathon is about finding solutions to challenges banks
          currently have on their platforms and services. We want you to have
          access to the world’s top online talents within our community that
          will solve these challenges.
        </p>
        <a
          href='https://fintechhackathon.devpost.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default About;
