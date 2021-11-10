import React,{useRef,useEffect} from 'react'
import styled from 'styled-components';

import lottie from 'lottie-web';


const ScrollIcon = () => {
    const container = useRef(null)

    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../img/scroll12.json')
      })
    }, [])
    
    return (
      
        <Lottie className="container" ref={container}></Lottie>
      
    );
  }

  const Lottie = styled.div`
    width: 200px;
    height: 200px;
`;

export default ScrollIcon
