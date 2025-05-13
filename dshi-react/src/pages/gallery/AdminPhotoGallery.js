import React from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import add from '../../assets/icons/add.svg';
import deletes from '../../assets/icons/delete.svg';
import editing from '../../assets/icons/editing.svg';

function AdminPhotoGallery(){
    return(
        <div>
            <Header/>
            <Nav/>
            <hr className="hr-line"></hr>
            <div className="icon-add">
                <img src={add}/>
            </div>
        
            <h3 className="directions">Фотогаллерея</h3>
        
            <div id="card-choice-editing-photo" className="card-choice-editing-photo">
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                        <img src={deletes}/>
                        <img src={editing}/>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                        <img src={deletes}/>
                        <img src={editing}/>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                        <img src={deletes}/>
                        <img src={editing}/>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                        <img src={deletes}/>
                        <img src={editing}/>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                        <img src={deletes}/>
                        <img src={editing}/>
                    </div>
                </div>
                <div className="card-choice-edit-photo">
                    <img src="Foto\2.jpg"/>
                    <div className="edit-photo">
                        <a>Наименование фото</a>
                        <img src={deletes}/>
                        <img src={editing}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminPhotoGallery;