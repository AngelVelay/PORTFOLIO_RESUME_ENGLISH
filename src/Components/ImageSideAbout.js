import React,{useRef,useEffect} from 'react'
import styled from 'styled-components';

import lottie from 'lottie-web';


const ImageSideAbout = () => {
    const container = useRef(null)

    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../img/code_animatin.json')
      })
    }, [])
    
    return (
      
        <Lottie className="container" ref={container}></Lottie>
      
    );
  }

  const Lottie = styled.div`
    width: 100%;
    height: 500px;
`;

export default ImageSideAbout