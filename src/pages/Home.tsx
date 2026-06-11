import { Helmet } from 'react-helmet-async';
import { personalInfo } from '../data/personalInfo';
import { Hero } from '../sections/Hero';
import { FeaturedTechnologies } from '../sections/FeaturedTechnologies';
import { About } from '../sections/About';
import { Education } from '../sections/Education';
import { WhatIBuild } from '../sections/WhatIBuild';
import { FeaturedProjects } from '../sections/FeaturedProjects';
import { OtherProjects } from '../sections/OtherProjects';
import { CurrentlyLearning } from '../sections/CurrentlyLearning';
import { Contact } from '../sections/Contact';

export function Home() {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} | Portfolio</title>
        <meta name="description" content={personalInfo.role} />
      </Helmet>

      <main>
        <Hero />
        <FeaturedTechnologies />
        <About />
        <Education />
        <WhatIBuild />
        {/* <Skills /> */}
        <FeaturedProjects />
        <OtherProjects />
        <CurrentlyLearning />
        <Contact />
      </main>
    </>
  );
}
