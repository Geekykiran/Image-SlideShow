import React, { useState } from 'react'

const Gallery = () => {
    const images = [
        "https://cdn.pixabay.com/photo/2024/06/02/05/53/architecture-8803583_640.jpg",
        "https://cdn.pixabay.com/photo/2023/01/18/07/25/road-7726202_640.jpg",
        "https://cdn.pixabay.com/photo/2024/10/16/09/14/trees-9124293_640.jpg",
        "https://cdn.pixabay.com/photo/2023/05/15/22/09/city-7996136_640.jpg",
        "https://cdn.pixabay.com/photo/2025/05/14/16/21/city-9599967_640.jpg"
    ]

    console.log(images.length);

    const [img, setImage] = useState(images[0])

    const prevImage = () => {
        const currentIndex = images.indexOf(img);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setImage(images[prevIndex]);
    }

    const nextImage = () => {
        const currentIndex = images.indexOf(img);
        const nextIndex = (currentIndex + 1) % images.length;
        setImage(images[nextIndex]);
    }
    return (
        <>
            <div className='gallery'>
                <h1>Image Gallery</h1>
                <img src={img} alt="" />
                <button className='prev-btn' onClick={prevImage}><p>{"<-"}</p></button>
                <button className='next-btn' onClick={nextImage}><p>{"->"}</p></button>
            </div>
        </>
    )
}

export default Gallery