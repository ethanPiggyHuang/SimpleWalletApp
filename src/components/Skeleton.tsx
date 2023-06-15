import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  isBlock: boolean;
}

export const Skeleton: React.FC<Props> = ({ isBlock }) => {
  return <Wrapper $isBlock={isBlock} />;
};

interface WrapperProps {
  $isBlock: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  width: 200px;
  height: 16px;
  border-radius: 5px;
  background: lightgray;
  display: ${({ $isBlock }) => ($isBlock ? 'block' : 'inline-block')};
`;
