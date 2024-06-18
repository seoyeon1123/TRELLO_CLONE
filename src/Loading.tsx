// Loading.tsx
import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.boardColor};
`;

const LoadingText = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme.textColor};
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingText>로딩 중...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
