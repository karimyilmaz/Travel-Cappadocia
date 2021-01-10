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
    cursor: context-menu;

    h1,h2{
        text-transform: uppercase;
    }

    h1 {
        margin: 0;
        opacity: 0.8;
        font-size: 3rem;
        font-weight: 800;
    }

    h2 {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;

        
    }

    p{
        max-width: 470px;
        opacity: 0.8;
        font-size: .8rem;
        font-weight: 400;
        color: 	#fff;

    }

    @media only screen and (max-width: 639px){
        h1{
            font-size: 2.8rem;
        }
        h2{
            font-size: 1.8rem;
        }
        p{
            font-size: .7rem;
        }
    }

    @media only screen and (max-width: 605px){
        h1{
            font-size: 2.6rem;
        }
        h2{
            font-size: 1.6rem;
        }
        
    }

    @media only screen and (max-width: 520px){
        width: calc(100% - 80px);
        height: 75%;
        padding: 0rem 2rem;
        
        p{
            max-width: 400px;
        }
    }

    @media only screen and (max-width: 480px){
        h1{
            font-size: 2.4rem;
        }
        h2{
            font-size: 1.4rem;
        }
        
    }


`

const SocialContainer = styled.div`
      position: absolute;
      top: 90%;
      display: flex;
      align-items: center;
      transform: scale(0.9, 0.9);
      cursor: pointer;
      

      svg {
          margin-right: 15px;
          
      }

      svg:hover{
        transform: scale(1.2, 1.2) translateY(-20px);
      }

      
      
`

function Hero({setShowSideMenu}) {
    const tog = () => {
        setShowSideMenu((prev) => {
            if(prev)
                return false
        })
    }
   
    return (
          <HeroContainer onClick={tog}>
            <h1>never stop to </h1>
            <h2>explore <span>cappadocia</span></h2>
            <p>Diam est iaculis justo, sit amet diam est iaculis justo, sit amet gravida sem felis ut sapien. Curabitur cursus elementum nibh nec consequat. Duis id fringilla velit. Integer rutrum vel velit vel scelerisque.</p>
            <Button>EXPLORE</Button>
            <SocialContainer>
                <FaFacebookF/>
                <FaTwitter/>
                <FiInstagram/>
            </SocialContainer>
          </HeroContainer>
    )
}

export default Hero
