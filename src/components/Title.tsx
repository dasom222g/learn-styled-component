import React, { FC } from 'react';
import styled from 'styled-components';

interface TitleProps {
  maintitle: string;
  subtitle?: string;
}

const Title: FC<TitleProps> = ({ maintitle, subtitle }) => {
  return (
    <div>
      <H3>{maintitle}</H3>
      <Text className="chutzrit">{subtitle}</Text>
    </div>
  );
};

export default Title;

// style
const color = 'blue';

// 기본속성
const H3 = styled.h3`
  font-size: 1.5rem;
  color: red;
`;

const Text = styled.div`
  font-size: 1.2rem;
  color: ${color};
`;
