import styled from "styled-components";

import { SCREEN } from "@consts/style";

export const CharacterImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: fit-content;
  transform: translateX(-10%);
  z-index: 3;
  max-width: 640px;
  width: 100%;
  flex-shrink: 0;
  opacity: 0;
  transition: all 1s ease-out;
  transition-delay: 0.8s;

  @media screen and (max-width: ${SCREEN.pc}) {
    transform: translateX(-28%);
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    transform: translateX(-36%);
  }

  @media screen and (max-width: ${SCREEN.mobile}) {
    transform: translateX(-36%) translateX(calc(55vw - 198px));
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    transform: translateX(-56%);
  }

  &.scrolled {
    opacity: 1;
    @media screen and (max-width: ${SCREEN.mobileWide}) {
      transform: translateX(-36%);
    }

    @media screen and (max-width: ${SCREEN.mobile}) {
      transform: translateX(-36%) translateX(calc(55vw - 198px));
    }

    @media screen and (max-width: ${SCREEN.mobileNarrow}) {
      transform: translateX(-56%);
    }
  }
`;

export const CharacterImage = styled.img`
  @media screen and (max-width: ${SCREEN.tablet}) {
    height: calc(800px - (768px - 100vw) / 47 * 75);
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    height: 500px;
  }

  @media screen and (max-width: ${SCREEN.mobile}) {
    height: max(400px, calc(140px + 100vw));
  }
`;
