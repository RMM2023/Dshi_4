import React from 'react';
import Header from '../components/Header';
import Nav from '../components/nav';
import ImageScroll from '../components/ImageScroll';

function PhotoGalleryEdit(){
    return(
        <div>
            <Header/>
            <Nav/>
            <div class="icon-add">
                <img src="Icons\add.svg"/>
            </div>
        
            <h3 class="directions">Фотогаллерея</h3>
        
            <div id="card-choice-editing-photo" class="card-choice-editing-photo">
                <div class="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div class="edit-photo">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div class="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div class="edit-photo">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div class="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div class="edit-photo">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div class="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div class="edit-photo">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div class="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div class="edit-photo">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div class="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div class="edit-photo">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PhotoGalleryEdit