import styled, { keyframes } from "styled-components";

import { SCREEN } from "@consts/style";

export const CharacterImageContainer = styled.article`
  position: relative;
`;

const scrolledAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const CharacterImageWrapper = styled.div<{
  $translateX: {
    default: number;
    tablet: number;
    mobileWide: number;
    mobile: number;
    mobileNarrow: number;
  };
}>`
  display: flex;
  height: 100%;
  justify-content: center;
  z-index: 3;
  flex-shrink: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateX(${({ $translateX }) => $translateX.default}px)
    scaleX(1.4);
  transition: opacity 0.5s ease-out;

  @media screen and (max-width: ${SCREEN.tablet}) {
    transform: translateX(${({ $translateX }) => $translateX.tablet}px)
      scaleX(1.4);
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    transform: translateX(${({ $translateX }) => $translateX.mobileWide}px)
      scaleX(1.4);
  }

  @media screen and (max-width: ${SCREEN.mobile}) {
    transform: translateX(${({ $translateX }) => $translateX.mobile}px)
      scaleX(1.4);
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    transform: translateX(${({ $translateX }) => $translateX.mobileNarrow}px)
      scaleX(1.4);
  }

  &.scrolled {
    animation: ${scrolledAnimation} 1s ease-out;
    animation-delay: 0.8s;
  }
`;

export const CharacterImage = styled.img`
  transform: translateY(320px) scaleY(1.4);

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    width: auto;
    height: 500px;
    transform: translateY(220px) scaleY(1.4);
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    width: auto;
    height: 400px;
    transform: translateY(300px) scaleY(1.4);
  }
`;
