import React from 'react';

const Showcase = () => {
  return (
    <div className='showcase' id='Home'>
      <div className='showcase__left'>
        <div className='showcase__left-wrapper'>
          <h2>Calling the World’s Top FinTech Talents</h2>
          <h1>The</h1>
          <h1>Fintech</h1>
          <h1>Hackathon</h1>
          <h3>Opening up a whole new world of finance possibilities.</h3>
          <div className='showcase__buttons'>
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
        </div>
      </div>
      <div className='showcase__right'></div>
    </div>
  );
};

export default Showcase;
