import logo from './logo.svg';
import React, {useState} from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './Components/Home'
import {GlobalStyle} from './Components/GlobelStyle'
import SideMenu from './Components/SideMenu';

const MainSection = styled.div`
    position: relative;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100%;
    display: flex;

    h1{
      position: relative;
      z-index: 1000;
    }
`

let App = () => {

  const [showSideMenu, setShowSideMenu] = useState(false)

  return (
    <React.Fragment>
    <GlobalStyle/>
    <Router>
      <MainSection>
        <Home showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu}/>  
        {/* {showSideMenu && <SideMenu/>} */}
      <SideMenu showSideMenu={showSideMenu}/>

      </MainSection>  
      
    </Router>
    </React.Fragment>
  );
}

export default App;
