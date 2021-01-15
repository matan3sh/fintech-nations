import React from 'react';

const Join = () => {
  return (
    <section className='join'>
      <h1>Join the Community</h1>
      <div className='join__buttons'>
        <a
          className='left'
          href='https://fintechhackathon.devpost.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Register Now
        </a>
        <a
          className='right'
          href='https://bit.ly/FinTechNationsHackathon'
          target='_blank'
          rel='noopener noreferrer'
        >
          Join Discord
        </a>
      </div>
    </section>
  );
};

export default Join;
