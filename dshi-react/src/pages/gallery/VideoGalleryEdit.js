import React from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import add from '../../assets/icons/add.svg';
import deletes from '../../assets/icons/delete.svg';
import editing from '../../assets/icons/editing.svg';

function VideoGalleryEdit(){
    return(
        <div>
            <Header/>
            <Nav/>
            <div className="icon-add">
                <img src={add}/>
            </div>
        
            <h3 className="directions">Видеогалерея</h3>
            
            <div className="card-choice-editing-video">
                <div className="card-choice-edit-video">
                    <iframe src="https://rutube.ru/play/embed/dc5e0ba5552074fddc2f20ea1629b0ce/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                    <p/><a href="https://rutube.ru/video/dc5e0ba5552074fddc2f20ea1629b0ce/">Дэвид Теннант</a>
                    <div className="edit-video">
                        <img src={deletes}/>
                        <img src={editing}/>
                    </div>
                </div>
                <div className="card-choice-edit-video">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-video">
                        <a>Наименование видео</a>
                        <img src={deletes}/>
                        <img src={editing}/>
                    </div>
                </div>
                <div className="card-choice-edit-video">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-video">
                        <a>Наименование видео</a>
                        <img src={deletes}/>
                        <img src={editing}/>
                    </div>
                </div>
                <div className="card-choice-edit-video">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-video">
                        <a>Наименование видео</a>
                        <img src={deletes}/>
                        <img src={editing}/>
                    </div>
                </div>
                <div className="card-choice-edit-video">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-video">
                        <a>Наименование видео</a>
                        <img src={deletes}/>
                        <img src={editing}/>
                    </div>
                </div>
                <div className="card-choice-edit-video">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-video">
                        <a>Наименование видео</a>
                        <img src={deletes}/>
                        <img src={editing}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default VideoGalleryEdit;