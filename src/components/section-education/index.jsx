import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionEducation = ({ education }) => {
  return (
    <Section title="Education">
      {education.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;
