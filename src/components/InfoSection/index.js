import React from 'react'
import { Button } from '../ButtonElement'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements'

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkTextDesc,
  headline,
  description,
  buttonLabel,
  src,
  alt,
  primary,
  dark,
}) => {
  const navLinkProps = {
    smooth: 'true',
    duration: 500,
    spy: true,
    exact: 'true',
    offset: -80,
  }
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkTextDesc={darkTextDesc}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to='home'
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    {...navLinkProps}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={src} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
