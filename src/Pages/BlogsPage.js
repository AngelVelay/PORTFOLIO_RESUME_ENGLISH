import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import blogs from '../data/blogs';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import GitHub from '@material-ui/icons/GitHub';
import Code from '@material-ui/icons/DesktopMac'
import Tooltip from '@material-ui/core/Tooltip';



function BlogsPage() {


    return (
        <MainLayout>
            <BlogsStyled>
            <Title title={'Portafolio'} span={'Portafolio'} />
                <InnerLayout className={'blog'}>
                    {
                        blogs.map((blog)=>{
                            return <div key={blog.id} className={'blog-item'}>
                                <div className="image">
                                    <img src={blog.image} alt=""/>
                                </div>

                                <div className="blog-link">
    
                                    
                                    <Tooltip title={<h4 style={{ color: "white" }}>Github Code</h4>} placement="top"  >
                                        <GitHub  
                                        fontSize="large" 
                                        className="github"
                                        onClick={() => window.open(blog.github)}/>
                                    </Tooltip>

                                    <Tooltip title={<h4 style={{ color: "white" }}>Demostration</h4>} placement="top"  >
                                        <Code 
                                        fontSize="large" 
                                        className="code" 
                                        onClick={() => window.open(blog.demo)}/>
                                    </Tooltip>
                                       
                                    
                                </div>   
                                <div className="title">
                                    <a href={blog.link}>{blog.title}</a>
                                    <p>{blog.content}</p>
                                </div>
                            </div>
                        })
                    }
                </InnerLayout>

                
            </BlogsStyled>
            

        </MainLayout>
    )
}

const BlogsStyled = styled.div`
    .blog{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }
        .blog-item{
            background-color: var(--background-dark-grey);
            padding: 1rem 1rem;
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            img{
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
                }
            }
        }

        .title{
            a{
                font-size: 1.8rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
    }
    .blog-link {
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin: 20px;
        
    }
    
    .github{
        color: #ffffff;
        transition: all .4s ease-in-out;

    }

    .github:hover{
        color: green;
        cursor: pointer;

    }


    .code{
        color: #ffffff;
        transition: all .4s ease-in-out;
    }
    .code:hover{
        color: red;
        cursor: pointer;

    }
`;

export default BlogsPage
