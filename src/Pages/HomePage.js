import React from 'react'
import styled from 'styled-components';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

import Typical from 'react-typical'

import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
               
                
                <Typical
                     steps={['My name is Angel Velay', 1000]}
                     //loop={Infinity}
                     wrapper="h1"/>
                    
                    <br/>
                    <br/>
                    <br/>
                
               
               <h1><span>Junior Developer</span> </h1>
                <Typical
                     steps={['REACT JS',2000,'NODE JS',2000,'PYTHON',2000,'JAVASCRIPT',2000,'JAVA',2000,'WEB DEVELOPER ','SOFTWARE ENGINEER',2000]}
                     //loop={1}
                     wrapper="h1"/>

                <div className="icons">
                    <a href="https://www.linkedin.com/in/angelvelay/" className="icon i-facebook">
                        <LinkedinIcon />
                    </a>
                    <a href="https://github.com/AngelVelay" className="icon i-github">
                        <GithubIcon />
                    </a>
                   
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 2rem;
            .icon{
                border: 10px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 4px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 4px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 4px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
