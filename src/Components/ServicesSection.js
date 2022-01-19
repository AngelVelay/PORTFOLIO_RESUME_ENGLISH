import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import react from '../img/iconos/icons8-reaccionar.svg'
import node from '../img/iconos/icons8-node-js.svg'
import html from '../img/iconos/icons8-html-5.svg'
import css from '../img/iconos/icons8-css3.svg'
import python from '../img/iconos/icons8-python.svg'
import java from '../img/iconos/icons8-logotipo-de-java-coffee-cup.svg'
import mysql from '../img/iconos/icons8-logo-de-mysql.svg'
import mongo from '../img/iconos/icons8-mongodb.svg'


function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Technical Skills'} span={'Technical Skills'} />
                <div className="services">
                    <ServiceCard 
                        image={react} 
                        title={'React JS | React Native'} 
                        paragraph={'Knowledge using React JS, experience using functional components and Hooks | REDUX'} 
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={node} 
                            title={'Node JS'} 
                            paragraph = {
                                'Knowledge in the realization of REST APIs using Express JS'
                            }
                        />
                    </div>
                    <ServiceCard 
                        image={html} 
                        title={'HTML'} 
                        paragraph={'Knowledge in the layout and structuring of a Web '}
                    />
                     <ServiceCard 
                        image={css} 
                        title={'CSS'} 
                        paragraph = {
                            'Experience in the creation of styles in a Web, I also have knowledge using different frameworks such as BootStrap, Material UI and using Styled Components in React.'
                        }
                    />
                     <ServiceCard 
                        image={java} 
                        title={'Java'} 
                        paragraph = {
                            'Experience using POO in Java'
                        }
                    />
                     <ServiceCard 
                        image={python} 
                        title={'Python'} 
                        paragraph={'Experience in Python programming and using the FLASK framework for the realization of REST APIs'}
                    />
                    <ServiceCard 
                        image={mongo} 
                        title={'Mongo DB'} 
                        paragraph = {
                            'Knowledge in the creation, manipulation and querying of data and how to obtain it through a REST API.'
                        }
                    />
                    <ServiceCard 
                        image={mysql} 
                        title={'My SQL'} 
                        paragraph = {
                            'Knowledge of data creation, manipulation and SQL queries '
                        }
                    />
                    

                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
