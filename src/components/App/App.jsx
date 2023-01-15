import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx'
import './App.css';

function App() {
let [imageList, setImageList] = useState('');
  useEffect(() => {
    getGallery()
  }, [])
  // const likeFunction = (event) =>{
  //   let id = event.currentTarget.id
  //   console.log(id);
  //   axios.put(`/gallery/like/${id}`)
  //       .then(response =>{
  //           getGallery();
  //       })
  //       .catch(error =>{
  //           console.log(error)
  //       })
  // }

  const getGallery = () => {
    axios.get('/gallery')
    .then(response =>{
      console.log('response', response)
      setImageList(response.data)
    }).catch(error =>{
      console.log('error', error)
    })
  }
  console.log(imageList)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {imageList && <GalleryList getGallery={getGallery} imageList={imageList}/>}
      </div>
    );
}

export default App;
