import React, { useState, useEffect } from 'react';
import { useGetRecipeQuery } from '../redux/Slice/Slice';
import styled from 'styled-components';
import { FaPlay } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Full() {
  const navigate = useNavigate();
  const { data, isFetching, error, refetch } = useGetRecipeQuery();
  const [loadedItems, setLoadedItems] = useState(10); // Initial number of items to load
  const [videoUrl, setVideoUrl] = useState('');

  const handleUrl = (url) => {
    navigate('/video', { state: { url } });
  };

  useEffect(() => {
    // Add scroll event listener for infinite scrolling
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Detect when user scrolls near the bottom
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
      // Load more items
      setLoadedItems(prev => prev + 10); // Load 10 more items
    }
  };

  if (isFetching) return <div>Loading....</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Wrapper>
      <div className="title">
        <h2 style={{ fontWeight:'bold', fontSize:'4em' }}>RECIPES</h2>
      </div>
      <div className="recipe">
        {data?.results.slice(0, loadedItems).map((items, index) => {
          const {original_video_url, thumbnail_url, name } = items;
          return (
            <div key={index} className='items'>
              <img src={thumbnail_url} alt={name} />
              <div className="play-icon" onClick={() => handleUrl(original_video_url)}>
                <FaPlay />
              </div>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  justify-items: center;
  align-items: center;
  
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-bottom: 20px;
  }

  .recipe {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
    gap: 30px;
    width: 80%;
  }

  .play-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: orange;
    font-size: 2em;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  }

  .items {
    position: relative;
    background-color: rgba(227, 60, 34, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    overflow: hidden;
    border-radius: 10px;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(39, 214, 109, 0.4);
    transition: transform 0.3s ease;
    &:hover {
      transform: rotate(5deg);
    }
  }

  .items img {
    object-fit: cover;
    height: 250px;
    width: 100%;
    border-radius: 10px;
  }

  .items span {
    padding: 20px;
    font-weight: semi-bold;
    font-size: 15px;
  }
`;

export default Full;

