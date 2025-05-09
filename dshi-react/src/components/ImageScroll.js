import React, {useState, useEffect} from 'react';

const ImageScroll=() => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState (false);
    const images = [
        '/Foto/1.jpg',
        '/Foto/2.jpg',
        '/Foto/3.jpg',
        '/Foto/4.jpg',
        '/Foto/5.jpg',
        '/Foto/6.jpg',
        '/Foto/7.jpg',
        '/Foto/8.jpg',
        '/Foto/9.jpg',
        '/Foto/10.jpg'
    ];

    const scrollLeft = () => {
        if(!isAnimating){
            setIsAnimating(true);
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex -1;
                if(newIndex < 0){
                    return images.length-1;
                }else{
                    return newIndex;
                }
            });
            setTimeout(() => {setIsAnimating(false)},800);
        };
    }
    const scrollRight = () => {
        if(!isAnimating){
            setIsAnimating(true);
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex +1;
                if(newIndex >= images.length){
                    return 0;
                }else{
                    return newIndex;
                }
            });
            setTimeout(() => {setIsAnimating(false)},800);
        };
    }
    return(
        <div className="image-scroll">
                <div className="gallery">
                    <button id="left-button" className="arrow left-arrow"></button>
                    <img id="gallery-photo" src="/Foto\1.jpg"/>
                    <button id="right-button" className="arrow right-arrow"></button>
                </div>
            </div>
    );
}
export default ImageScroll;