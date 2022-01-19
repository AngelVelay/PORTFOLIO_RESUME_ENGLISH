import React from 'react'
import styled from 'styled-components';

function PrimaryButton({title}) {
    return (
        <PrimaryButtonStyled  
        onClick={() => window.open("https://drive.google.com/file/d/1bFKpmLwLnjPhxMUk6oKFEPF2x4dnCKUH/view?usp=sharing")}>{title}</PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    height: 50%;
    margin-top:50px;
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
`;
export default PrimaryButton;
