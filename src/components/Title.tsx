import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface TitleProps {
  value: string;
}

const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`;

const TextCursor = styled.span`
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  display: inline;
  animation: ${blinkTextCursor} 0.7s steps(12) infinite normal;
`;

const Container = styled.p`
  opacity: 0.7;
  font-weight: 300;
  display: inline-block;
  margin: 0;
  font-size: 3.5rem;
  width: 341px;
`;

const TypeWriter = (props: TitleProps) => {
  const [text, setText] = useState('');

  const typeWriter = (text: string, i = 0) => {
    if (i < props.value.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        typeWriter(text, i + 1);
      }, 200);
    }
  };

  useEffect(() => {
    typeWriter(props.value);
  }, []);

  return (
    <Container>
      {text}
      <TextCursor />
    </Container>
  );
};

export default TypeWriter;
