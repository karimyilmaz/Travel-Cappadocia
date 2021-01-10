import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    max-width: 100px;
    background: white;
    opacity: 0.5;
    text-decoration: none;
    color: #000;
    font-size: .9rem;
    padding: 5px 10px;
    border-radius: 1.5px;
    transition: .5s;

    &:hover{
        letter-spacing: 3px;
    }
`