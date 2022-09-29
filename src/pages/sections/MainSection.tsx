import React from 'react';
import background from '../../assets/landingPage.jpg';
import styled from 'styled-components';
import Title from '../../components/Title';

const MainSection = () => {
  return (
    <Wrapper>
      <BackgroundWrapper>
        <img src={background} alt="computer" />
      </BackgroundWrapper>
      <TitlesWrapper>
        <TitleWrapper>
          <Title value="Hello World!" />
        </TitleWrapper>
        <Subtitle>
          My name is Ewa and I’m a Fronted Developer. <br /> Welcome to my
          website!
        </Subtitle>
      </TitlesWrapper>
      <NavWrapper>
        <ul>
          <li>
            <span>About Me</span>
            <div></div>
          </li>
          <li>
            <span>Tech Stack</span>
            <div></div>
          </li>
          <li>
            <span>Projects</span>
            <div></div>
          </li>
          <li>
            <span>Contact Me</span>
            <div></div>
          </li>
        </ul>
      </NavWrapper>
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

const TitlesWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 15%;

  @media ${(props) => props.theme.devices.laptop} {
  }
`;

const TitleWrapper = styled.div`
  border: 3px solid ${(props) => props.theme.colors.violet};
  color: white;
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
  padding: 2rem 0;
  margin: 0;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  color: #dedede;
`;

const NavWrapper = styled.div`
  position: fixed;
  font-size: 2rem;
  top: 25%;
  right: 5%;
  color: white;
  font-size: 1rem;

  ul {
    list-style-type: none;
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    color: transparent;
    transition: 300ms;

    :hover {
      color: white;
      transition: 300ms;
      cursor: pointer;
    }
  }

  li > div {
    width: 1.5rem;
    height: 1.5rem;
    border: 0.2em solid ${(props) => props.theme.colors.pink};
    border-radius: 50%;
    margin: 1rem 0;
    transition: 300ms;
    :hover {
      cursor: pointer;
      background: ${(props) => props.theme.colors.pink};
      transition: 300ms;
    }
  }
`;
