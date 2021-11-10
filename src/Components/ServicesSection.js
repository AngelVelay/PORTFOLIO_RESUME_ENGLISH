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
                <Title title={'Conocimientos'} span={'Conocimientos'} />
                <div className="services">
                    <ServiceCard 
                        image={react} 
                        title={'React JS'} 
                        paragraph={'Conocimientos utilizando React, experiencia utilizando Functional Components y Hooks'} 
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={node} 
                            title={'Node JS'} 
                            paragraph={'Conocimientos en la realización de API REST utilizando Express JS'}  
                        />
                    </div>
                    <ServiceCard 
                        image={html} 
                        title={'HTML'} 
                        paragraph={'Conocimiento en la maquetación y estructuración de un Web'}
                    />
                     <ServiceCard 
                        image={css} 
                        title={'CSS'} 
                        paragraph={'Experiencia en la creación de estilos en una Web, también tengo conocimiento utilizando diferentes frameworks como BootStrap, Material UI y usando Styled Components en React'}
                    />
                     <ServiceCard 
                        image={java} 
                        title={'Java'} 
                        paragraph={'Experiencia utilizando POO en Java'}
                    />
                     <ServiceCard 
                        image={python} 
                        title={'Python'} 
                        paragraph={'Experiencia utilizando "Flask" para realizar Backend y también tengo conocimiento en análisis de datos con "Pandas"'}
                    />
                    <ServiceCard 
                        image={mongo} 
                        title={'Mongo DB'} 
                        paragraph={'Conocimiento en la creación, manipulación y consulta de datos almacenados y como obtenerlos a través de una API REST'}
                    />
                    <ServiceCard 
                        image={mysql} 
                        title={'My SQL'} 
                        paragraph={'Conocimiento en la creación, manipulación y  consulta SQL de datos almacenados '}
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
