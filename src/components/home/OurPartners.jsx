import React from 'react';

import { ourPartnersData } from 'data';

const OurPartners = () => {
  return (
    <section className='ourPartners' id='Our-Partners'>
      <h1>Our Partners</h1>
      <div className='ourPartners__list'>
        {ourPartnersData.map((partner, key) => (
          <img src={partner} alt='partner' key={key} />
        ))}
      </div>
      <a
        href='mailto:nirkouris@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        Become a Partner
      </a>
    </section>
  );
};

export default OurPartners;
