import axios from "axios";
import {useState} from 'react';
import React from "react";
function GalleryItem(props){
    let [description, setDescription] = useState(true);
    const changeToDescription = (event) =>{
        if(description === true){
            setDescription(false);
        } else {
            setDescription(true);
        }
    }
    const likeFunction = (event) =>{
        let id = event.currentTarget.id
        console.log(id);
        axios.put(`/gallery/like/${id}`)
            .then(response =>{
                props.getGallery();
            })
            .catch(error =>{
                console.log(error)
            })
    }
if(description === true){
    return(
        <h1>
                <>
                <button id={props.image.id} onClick={changeToDescription}>
                <div className='imageParent'>
                    <img className='imageChild' src={props.image.path}/>
                </div>
                </button>
                <button id={props.image.id} onClick={likeFunction}>Likes: {props.image.likes}</button>
                </>
        </h1>
    );
} else {
    return (
        <>
        <button onClick={changeToDescription}>
            <div className='imageParent'>{props.image.description}</div>
        </button>
        <button id={props.image.id} onClick={likeFunction}>Likes: {props.image.likes}</button>
        </>
    )
}
}
export default GalleryItem