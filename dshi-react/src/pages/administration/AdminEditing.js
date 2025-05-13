import React from 'react';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import iconvideogallerry from '../../assets/icons/Create.png';
import iconStatistics from '../../assets/icons/statistics.png';
import { useNavigate } from 'react-router-dom';

function AdminEditing(){
    const navigate = useNavigate();
    return(
        <div>
            <Nav/>
            <Header/>
            <hr className="hr-line"></hr>
            <h3 className="directions">Редактирование</h3>
            
            <div className="card-choice-editing">
                <div className="card-choice-edit">
                    <div onClick={() => navigate('/gallery/videoGalleryEdit')}>
                        <img src={iconvideogallerry}/>
                        <a>Видеогалерея</a>
                    </div>
                </div>
                <div className="card-choice-edit">
                    <div>
                        <img src={iconStatistics}/>
                        <a>Документы</a>
                    </div>
                </div>
                <div className="card-choice-edit">
                    <div>
                        <img src={iconStatistics}/>
                        <a>Библиотека</a>
                    </div>
                </div>
                <div className="card-choice-edit">
                    <div onClick={() => navigate('/gallery/photoGalleryEdit')}>
                        <img src={iconStatistics}/>
                        <a>Фотогалерея</a>
                    </div>
                </div>
                <div className="card-choice-edit">
                    <div>
                        <img src={iconStatistics}/>
                        <a>Учащиеся</a>
                    </div>
                </div>
                <div className="card-choice-edit">
                    <div>
                        <img src={iconStatistics}/>
                        <a>Расписание</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminEditing;