import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

function PhotoGalleryEdit(){
    return(
        <div>
            <Header/>
            <Nav/>
            <hr className="hr-line"></hr>
        
            <h3 className="directions">Фотогаллерея</h3>
        
            <div id="card-choice-editing-photo" className="card-choice-editing-photo">
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PhotoGalleryEdit;