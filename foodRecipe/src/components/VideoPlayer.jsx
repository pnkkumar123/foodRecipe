import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function VideoPlayer() {
  const location = useLocation();
  const videoUrl = location.state?.videoUrl || '';
  const videoRef = useRef(null);

  

  if (!videoUrl) {
    return <Container>No video URL provided</Container>;
  }

  return (
    <Container>
      <StyledVideo controls autoPlay ref={videoRef}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const StyledVideo = styled.video`
  width: 100%;
  height:500px;
  object-fit:cover;
  border-radius:10px;
`;


export default VideoPlayer;
