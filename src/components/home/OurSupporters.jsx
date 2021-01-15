import React from 'react';

import { ourSupportersData } from 'data';

const OurSupporters = () => {
  return (
    <section className='ourSupporters' id='Our-Supporters'>
      <h1>Our Supporters</h1>
      <div className='ourSupporters__list'>
        {ourSupportersData.map((supporter, key) => (
          <img src={supporter} alt='supporter' key={key} />
        ))}
      </div>
    </section>
  );
};

export default OurSupporters;
