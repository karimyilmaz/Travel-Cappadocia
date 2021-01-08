import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Hero from './Hero'
import {ImageOne} from "../../src/Images/house_1.jpg"

const HomeContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    
    
`

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
`
let Home = () => {
    return (
        <HomeContainer>
            <Image src={ImageOne} />
            <Navbar/>
            <Hero/>
        </HomeContainer>
    )
}

export default Home
