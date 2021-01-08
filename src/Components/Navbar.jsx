import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {HiMenuAlt3} from 'react-icons/hi'

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
`
const Logo = styled(Link)`
    text-decoration: none;
`
const MenuBar = styled(HiMenuAlt3)`
    font-size: 1.6rem;
    cursor: pointer;
`


function Navbar() {
    return (
        <Nav>
            <Logo>TRAVEL CAPPADOCIA</Logo>
            <MenuBar/>
        </Nav>
    )
}

export default Navbar
