import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    max-width: 100px;
    background: gray;
    text-decoration: none;
    color: #000;
    font-size: .9rem;
    padding: 5px 10px;
    border-radius: 1px;
    transition: .5s;

    &:hover{
        letter-spacing: 3px;
    }
`