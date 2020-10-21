import React, { useState } from 'react'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
} from './HeroElements'
import { Button } from '../ButtonElement'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg src={Video} autoPlay loop muted type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Software Development,</HeroH1>
          <HeroH2>Simplified.</HeroH2>
          <HeroP>Sign up now for a 30 day free trial.</HeroP>
          <HeroBtnWrapper>
            <Button
              to='singup'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
            >
              Get started <ArrowRight />
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection
