import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {HiMenuAlt3} from 'react-icons/hi'
import {GrClose} from 'react-icons/gr'

const Nav = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 120px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    z-index: 100;
    background: transparent;

    @media only screen and (max-width: 571px){
        padding: 1rem 2rem;
        width: calc(100% - 80px);


        
    }
`
const Logo = styled(Link)`
    text-decoration: none;
    font-weight: 400;
`
const MenuBar = styled(HiMenuAlt3)`
    font-size: 1.6rem;
    cursor: pointer;
    display: ${(props) => (props.menuBar? 'block': 'none')};
`
const Close = styled(GrClose)`
    font-size: 1.4rem;
    cursor: pointer;
    display: ${(props) => (props.menuBar? 'none': 'block')};
    

`


function Navbar({setMenu, shownMenu}) {
    const [showMenuBar, setShowMenuBar] = useState(true)
    
    let toggle = () => {
        setShowMenuBar((prev) => !prev)
        setMenu((prev) => !prev)
    }

    if(shownMenu === false && showMenuBar === false){
        setShowMenuBar(true)
    }
    

    return (
        <Nav>
            <Logo>TRAVEL CAPPADOCIA</Logo>
            <MenuBar onClick={toggle} menuBar={showMenuBar}/>
            <Close onClick={toggle} menuBar={showMenuBar}/>
        </Nav>
    )
}

export default Navbar
