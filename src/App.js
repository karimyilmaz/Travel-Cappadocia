import logo from './logo.svg';
import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './Components/Home'

const MainSection = styled.div`
    position: relative;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100%;
`

let App = () => {
  return (
    <Router>
      <MainSection>
        <Home/>  
      </MainSection>  
    </Router>
  );
}

export default App;
