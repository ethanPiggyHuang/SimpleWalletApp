import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  isBlock: boolean;
}

export const MoreInfo: React.FC<Props> = ({ isBlock }) => {
  return <Wrapper $isBlock={isBlock}>{}</Wrapper>;
};

interface WrapperProps {
  $isBlock: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  width: 200px;
  height: 20px;
  border: 1px solid black;
  display: ${({ $isBlock }) => ($isBlock ? 'block' : 'inline-block')};

  position: fixed;
  top: 0;
  left: 0;
`;
