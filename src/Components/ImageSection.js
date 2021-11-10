import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import Lottie from '../Components/ScrollIcon'
import SideImage from '../Components/ImageSideAbout'


function ImageSection() {



    return (
        <ImageSectionStyled>
            <div className="left-content">
                <SideImage/>
            </div>
            <div className="right-content">
                <h4>Me llamo <span>Angel Mosiah Velay López</span></h4>
                
                <p className="paragraph">
                    Recientemente egresé de la carrera de Ingeniería en Computación en la Facultad de Estudios Superiores Aragón-UNAM
                    <br/>
                    <br/>
                    Soy un Desarrollador Junior, apasionado por la programación y aprender nuevas cosas.
                    Estoy en busca de un lugar en el que pueda crecer profesionalmente mientras pongo en práctica lo que he aprendido.
                    
                </p>
               
                <div className="final-content">
                    <PrimaryButton title={'Descargar Cv'}  />
                    <Lottie/>
                </div>



            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            height:500px;
        
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
    .final-content{
        display: flex;
        justify-content: space-between;

    }
    
`;
export default ImageSection;
