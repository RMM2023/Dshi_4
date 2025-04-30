import React from 'react';
function ImageScroll(){
    return(
        <div class="image-scroll">
                <div class="gallery">
                    <button id="left-button" class="arrow left-arrow"></button>
                    <img id="gallery-photo" src="Foto\1.jpg"/>
                    <button id="right-button" class="arrow right-arrow"></button>
                </div>
            </div>
    );
}
export default ImageScroll;