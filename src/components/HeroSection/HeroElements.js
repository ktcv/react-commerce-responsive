import styled from 'styled-components'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import { theme } from '../../theme'

export const HeroContainer = styled.div`
  background-color: ${theme.secondaryBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 960px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: ${theme.videoBackground};
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  left: 10%;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`

export const HeroH1 = styled.h1`
  color: ${theme.primaryBackground};
  font-size: 42px;
  /* text-align: center; */

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`

export const HeroH2 = styled.h1`
  margin-top: 10px;
  color: ${theme.primaryBackground};
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: ${theme.primaryBackground};
  font-size: 24px;
  /* text-align: center; */
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  width: 180px;
  flex-direction: column;
  /* align-items: center; */
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 24px;
`
