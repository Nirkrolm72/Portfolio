import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my Portfolio
      </SectionTitle>
      <SectionText>
        My name is Brandon Guyon and I am in professional retraining as a Web & Mobile Web Developer
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Read More</Button>
    </LeftSection>

  </Section>
);

export default Hero;