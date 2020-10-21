import React from 'react'
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
} from './ServicesElements'
import Icon1 from '../../images/svg-5.svg'
import Icon2 from '../../images/svg-7.svg'
import Icon3 from '../../images/svg-6.svg'

const Services = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesH1>Languages</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Javascript</ServicesH2>
            <ServicesP>
              JavaScript is a lightweight, interpreted, or just-in-time compiled
              programming language with first-class functions.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>HTML & (S)CSS</ServicesH2>
            <ServicesP>
              HTML and (S)CSS are two of the core technologies for building web
              pages.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Python</ServicesH2>
            <ServicesP>
              Python is a general-purpose, versatile and popular programming
              language. It's great as a first language because it is concise and
              easy to read.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
