import React from 'react';
import Landing from '../Landing/Landing';

import Benefits from '../Benefits/Benefits';
import LandingCourses from '../LandingCourses/LandingCourses';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className='home pb-5' style={{backgroundColor: "#F8F9FA"}}>
    <Landing />
    <Benefits />
    <LandingCourses />
    </div>
  )
}

export default Home;