import React, { useEffect, useState } from 'react'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
const{id}= useParams(); 
const navigate= useNavigate();

    const[apiData, setApiData]= useState({
name:"",
key:"",
published_at:"",
typeof:"",


    })

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2FjOTIyOWU1OWNhZGI1ZTllZDdhMDg1YTIyODI4MyIsInN1YiI6IjY2MzA5MDkzYjViYzIxMDEyYzUzOGRiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gZHhs_rwtctlpLyFwPlEeVHpa6qW28oxhDfAWbgy9FU'
        }
      };

      useEffect(()=>{
      
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));


      },[])





  return (
    <div className='player-main'>
      <span onClick={()=> navigate(-2)} class="material-symbols-outlined arrow">arrow_back</span>
<iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' allowFullScreen></iframe>
<div className="video-info">
    <p>{apiData.name}</p>
    <p>{apiData.published_at.slice(0,10)}</p>
    <p>{apiData.typeof}</p>
</div>




    </div>
  )
}

export default Player
