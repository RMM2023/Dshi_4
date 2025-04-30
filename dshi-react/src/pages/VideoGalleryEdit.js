import React from 'react';
import Header from '../components/Header';
import Nav from '../components/nav';

function VideoGalleryEdit(){
    return(
        <div>
            <Header/>
            <Nav/>
            <div class="icon-add">
                <img src="Icons\add.svg"/>
            </div>
        
            <h3 class="directions">Видеогалерея</h3>
            
            <div class="card-choice-editing-video">
                <div class="card-choice-edit-video">
                    <iframe src="https://rutube.ru/play/embed/dc5e0ba5552074fddc2f20ea1629b0ce/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                    <p/><a href="https://rutube.ru/video/dc5e0ba5552074fddc2f20ea1629b0ce/">Дэвид Теннант</a>
                    <div class="edit-video">
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div class="card-choice-edit-video">
                    <img src="Foto\2.jpg"/>
                    <div class="edit-video">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div class="card-choice-edit-video">
                    <img src="Foto\2.jpg"/>
                    <div class="edit-video">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div class="card-choice-edit-video"/>
                    <img src="Foto\2.jpg"/>
                    <div class="edit-video">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div class="card-choice-edit-video">
                    <img src="Foto\2.jpg"/>
                    <div class="edit-video">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div class="card-choice-edit-video">
                    <img src="Foto\2.jpg"/>
                    <div class="edit-video">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default VideoGalleryEdit