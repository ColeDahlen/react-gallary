import React from "react";
import './GalleryList.css'
import GalleryItem from "../GalleryItem/GalleryItem";
function GalleryList(props){
    return(
        <>
        <div>{props.imageList.map(image =>(
            <GalleryItem getGallery={props.getGallery} image={image} key={image.id}/>
        ))}</div>
        </>
    )
}
export default GalleryList;