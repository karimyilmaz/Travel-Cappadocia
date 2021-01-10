import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Hero from './Hero'
import VideoOne from '../Videos/video.mp4'

const HomeContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    right: ${(props) => (props.shownMenu? '200px': '0')};
`

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    object-fit: cover;
`


let Home = ({showSideMenu, setShowSideMenu}) => {
    

    return (
        <HomeContainer shownMenu={showSideMenu}>
            <Video src={VideoOne} autoPlay loop muted/>        
            <Navbar setMenu={setShowSideMenu}  shownMenu={showSideMenu}/>
            <Hero setShowSideMenu={setShowSideMenu}/>
        </HomeContainer>
    )
}

export default Home
