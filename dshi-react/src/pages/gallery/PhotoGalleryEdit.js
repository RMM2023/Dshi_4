import React from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav';

function PhotoGalleryEdit(){
    return(
        <div>
            <Header/>
            <Nav/>
            <div className="icon-add">
                <img src="Icons\add.svg"/>
            </div>
        
            <h3 className="directions">Фотогаллерея</h3>
        
            <div id="card-choice-editing-photo" className="card-choice-editing-photo">
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                        <img src="Icons\delete.svg"/>
                        <img src="Icons\edit_ezaiekru1cre.svg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PhotoGalleryEdit;