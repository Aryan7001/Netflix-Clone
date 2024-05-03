import React,{useState, useEffect} from 'react'
import items from '../../Images/assets'
import './Content.css'
import { Link } from 'react-router-dom'



const Content = ({title, category}) => {


  const[apiData, setApiData]= useState([])

  useEffect(()=>{
  
    const fetchdata= async()=>{
      try{
          const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2FjOTIyOWU1OWNhZGI1ZTllZDdhMDg1YTIyODI4MyIsInN1YiI6IjY2MzA5MDkzYjViYzIxMDEyYzUzOGRiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gZHhs_rwtctlpLyFwPlEeVHpa6qW28oxhDfAWbgy9FU'
              }
          };
  
         const response = await fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
         const data= await response.json();
         setApiData(data.results);
      }
      catch(error){
          console.log('errpr fetching data;',error);
      }
  
  };
  
  fetchdata();
  },[] );
        

  return (
    <div className='content'>
        <h2>{title?title: 'Movies Content'}</h2>
      <div className='main'>
        {apiData.map((item, index)=>{
return <Link to={`/player/${item.id}`} className='item' key={index}>
<img src={ `https://image.tmdb.org/t/p/w500/`+ item.backdrop_path} alt="" />
<p>{item.original_title}</p>
</Link>
        })}
      </div>
    </div>
  )
}

export default Content;
