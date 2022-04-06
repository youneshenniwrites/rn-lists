import React from 'react';
import { View } from 'react-native';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FunctionComponent<CardProps> = ({ children }) => {
  return <View style={{}}>{children}</View>;
};

export default Card;

// tailwind('rounded drop-shadow-card bg-white');
