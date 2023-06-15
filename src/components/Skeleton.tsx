import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

interface Props {
  isBlock: boolean;
}

export const Skeleton: React.FC<Props> = ({ isBlock }) => {
  return <Wrapper $isBlock={isBlock} />;
};

interface WrapperProps {
  $isBlock: boolean;
}

const loading = keyframes`
  100% {
    transform: translate(100%);
  }
`;

const Wrapper = styled.div<WrapperProps>`
  width: 200px;
  height: 16px;
  border-radius: 5px;
  margin-left: 6px;
  display: ${({ $isBlock }) => ($isBlock ? 'block' : 'inline-block')};
  background-color: whitesmoke;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      transparent,
      transparent,
      #e3e3e3,
      transparent,
      transparent
    );
    transform: translate(-100%);
    animation: ${loading} 1.2s infinite;
  }
`;
