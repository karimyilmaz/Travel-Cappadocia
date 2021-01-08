import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeroContainer = styled.div`
    position: absolute;
    top: 25%;
    width: calc(100% - 120px);
    height: 75%;
    padding: 0rem 3rem;

    h1,h2{
        text-transform: uppercase;
    }

    h1 {
        margin: 0;
        font-size: 3rem;
    }

    h2 {
        margin: 0;
        font-size: 2rem;
    }

    p{
        max-width: 520px;
        font-size: .9rem;
    }
`

const SocialContainer = styled.div`
      position: absolute;
      
`

function Hero() {
    return (
          <HeroContainer>
            <h1>never stop to </h1>
            <h2>explore cappadocia</h2>
            <p>Lorem ipsum dlor sit amet, consectetur adipiscing elit. Mauris vel eros sapien. Vestibulum fringilla, dui id laoreet consectetur, diam est iaculis justo, sit amet gravida sem felis ut sapien. Curabitur cursus elementum nibh nec consequat. Duis id fringilla velit. Integer rutrum vel velit vel scelerisque.</p>
            <Button>EXPLORE</Button>
            <SocialContainer>
                
            </SocialContainer>
          </HeroContainer>
    )
}

export default Hero
