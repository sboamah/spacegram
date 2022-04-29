import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Stories from './Stories';
import Like from './Like';

function App() {
  
  const [photos, setPhotos]= useState([]);
  
  useEffect(()=>{
    async function getData() {
      const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key='+ process.env.REACT_APP_API_KEY;
      const response = await axios(url);
      setPhotos(response.data.photos)
    }
    getData();
  }, []);

  if(!photos.length){
    <img alt="Loading" src="https://i.gifer.com/ZZ5H.gif" ></img>
  } else{
        return (
          // <h1>hi</h1>
          <div className="App">
            <header className="App-header">
              <h2>Spacegram</h2>
              <h4>Brought to you by NASA's Mars Image API</h4>
              <Stories/>
              <section id="feed">
              
                    {photos.map((photo)=>(<div className="content">
                                    <img alt="Mars" src={photo.img_src} ></img>
                                    <h5> @{photo.rover.name}: {photo.rover.status}</h5>
                                    <h6> {photo.camera.full_name}</h6>
                                    <p>Landing date: {photo.rover.landing_date}</p>
                                    <Like/>
                                </div>)
                                
                    )} 
              </section>
            </header>
          </div>
  );
}}

export default App;
