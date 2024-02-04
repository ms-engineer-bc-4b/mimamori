import React from 'react';
import { bodyParts } from './BodyParts';

const SelectedPart: React.FC<{ part: string }> = ({ part }) => {
  const description = bodyParts[part];
  return <p>{description}</p>;
};

export default SelectedPart;
