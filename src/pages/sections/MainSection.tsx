import React from 'react';
import background from '../../assets/landingPage.jpg';
import styled from 'styled-components';

const MainSection = () => {
  return (
    <Wrapper>
      <BackgroundWrapper>
        <img src={background} alt="computer" />
      </BackgroundWrapper>
      <TitlesWrapper>
        <Title>
          <h1>Hello World!</h1>
        </Title>
        <Subtitle>
          My name is Ewa and I’m a Fronted Developer. <br /> Welcome to my
          website!
        </Subtitle>
      </TitlesWrapper>
    </Wrapper>
  );
};

export default MainSection;

const Wrapper = styled.div`
  position: relative;
`;
const BackgroundWrapper = styled.div`
  max-width: 100vw;
  img {
    max-width: 100%;
  }
`;
const Title = styled.div`
  border: 3px solid ${(props) => props.theme.colors.violet};
  color: white;
  position: absolute;
  top: 15%;
  left: 15%;
  padding: 24px 105px;
  h1 {
    font-weight: 300;
    padding: 0;
    margin: 0;
    font-size: 3.5rem;
  }
`;
const Subtitle = styled.div`
  font-weight: 300;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 40%;
  left: 15%;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
`;

const TitlesWrapper = styled.div`
  position: absolute;
`;
