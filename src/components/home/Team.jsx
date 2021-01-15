import React from 'react';

const Team = ({ title, data, link }) => {
  return (
    <section className='team' id={link}>
      <h1>{title}</h1>
      <div className='team__list'>
        {data.map((item, key) => (
          <div key={key}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <h3>{item.role}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
