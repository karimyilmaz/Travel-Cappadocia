import React from 'react'
import styled, {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'
import {sideMenuData} from '../Data/SideMenuData'

// const kf = keyframes`
//     from{
//         visibility: hidden;
//     }
//     to{
//         visibility: visible;

        
//     }
// `

const SideMenuContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2000;
    width: 160px;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0rem 35px;
    justify-content: center;
    visibility: ${(props) => (props.shownMenu? 'visible': 'hidden')};
    
`
const MenuLinks = styled(Link)`
    text-decoration: none;
    font-size: .9rem;
`

function SideMenu({showSideMenu}) {
    return (
        <SideMenuContainer shownMenu={showSideMenu}>
            {sideMenuData.map((object, index) => {
               return <MenuLinks key={index}>{object.label}</MenuLinks>
            })}
                
        </SideMenuContainer>
    )
}

export default SideMenu
