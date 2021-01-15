import React from 'react';
import { connect } from 'react-redux';

import Showcase from 'components/home/Showcase';
import OurPartners from 'components/home/OurPartners';
import OurSupporters from 'components/home/OurSupporters';
import About from 'components/home/About';
import Agenda from 'components/home/Agenda';
import GiftCards from 'components/home/GiftCards';
import TrackList from 'components/home/TrackList';
import Team from 'components/home/Team';
import Join from 'components/home/Join';

import { ourJudges, ourSpeakersData, ourTeamData } from 'data';

const Home = () => {
  return (
    <>
      <Showcase />
      <OurPartners />
      <OurSupporters />
      <About />
      <Agenda />
      <GiftCards />
      <TrackList />
      <Team data={ourJudges} title='Our Judges' link='Our-Judges' />
      <Team data={ourSpeakersData} title='Our Speakers' link='Our-Speakers' />
      <Team data={ourTeamData} title='Our Team' link='Our-Team' />
      <Join />
    </>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
