import React, { useState } from 'react'
import { useGetRecipeQuery } from '../redux/Slice/Slice'
import styled from 'styled-components';
import { FaPlay } from "react-icons/fa";
import VideoPlayer from './VideoPlayer';
import { useNavigate } from 'react-router-dom';
function Category() {
  const navigate = useNavigate();
    const {data,isFetching,error} = useGetRecipeQuery();


    const handleUrl = (url)=>{
      navigate('/video',{state:{videoUrl:url}})

    }
    console.log(data)
    const handleRecipe= ()=>{
      navigate('/full')
    }
    const limitedResults = data?.results && data?.results.slice(0,4);
    if(isFetching)return <div>loading....</div>
    if(error)return <div>error</div>
  return (
    <Wrapper>
      <div className="title">
      <h2 style={{fontWeight:'bold',fontSize:'4em'}}>RECIPES</h2>
     
        <button onClick={()=>handleRecipe()}>View All</button>
      
        </div>
    <div className="recipe">
    {limitedResults && limitedResults.map((items,index)=>{
      const {original_video_url,thumbnail_url,name} = items;
      return (
        <div key={index} className='items'>
            <img src={thumbnail_url} alt={name}  />
            <div className="play-icon" onClick={()=>handleUrl(original_video_url)}>
            <FaPlay />
            </div>
            <span >{name}</span>
        </div>
      )
     })}
    </div>
   
    </Wrapper>
  )
}

const Wrapper = styled.div`
display:flex;
flex-direction:column;
margin-top:100px;
justify-items:center;
align-items:center;
  .title {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 80%; 
    margin-bottom: 20px;
  }
.title button{
height:80px;
width:200px;
border-radius:10px;
color:white;
background-color:orange; 
}
.recipe{
  margin-top:50px;
display:flex;
flex-direction:row;
gap:30px;
width:100%;
}
.play-icon {
align-items:center;
justify-content:center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: orange;
    font-size: 2em;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 10px;
  }
.items{
background-color:#FFB366;
margin-left:4px;
display:flex;
flex-direction:column;
height:300px;
width:300px;
overflow:hidden;
border-radius:10px;
justify-items:center;
align-items:center;
font-style:bold;
box-shadow: 0 4px 8px rgba(39, 214, 109, 0.4);
transition:transform 0.3s ease;
&:hover {
transform:rotate(5deg);
}

}
.items img{
  object-fit:cover;

height:250px;
width:300px;
border-radius:10px;
}
.items span{
padding:20px;
font-weight:semi-bold;
font-size:15px;
}
`
export default Category