import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import styled from 'styled-components';
function Banner({data}) {
  return (
    <Wrapper>
        <Carousel   showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false} // Hide the slide count
        autoPlay={true}
        interval={2000}
        infiniteLoop={true} // Enable infinite loop for smooth restart
        transitionTime={500}>
            {
                data.map((item)=><img src={item.pic} alt={item.name}/>)
            }

        </Carousel>
    </Wrapper>
  )
}
const Wrapper = styled.div`
img{
height:500px;
width:100%;
}
`
export default Banner