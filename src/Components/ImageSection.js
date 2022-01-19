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
                <h4>My name is <span>Angel Mosiah Velay López</span></h4>
                
                <p className="paragraph">
                    Recently graduated in Computer Engineering from the
                    Facultad de Estudios Superiores Aragon | UNAM.
                    <br/>
                    <br/>
                    I 'm a Junior Developer passionate about programming.
                    <br/>
                    I consider myself self - taught person, and every day I am
                    constantly learning.
                    <br/>

                    <span>My goal is to find a place where I can grow professionally
                        while I keep learning.</span>
                    
                </p>
               
                <div className="final-content">
                    <PrimaryButton title={'Download Resume'}  />
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
