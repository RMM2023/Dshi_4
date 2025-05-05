import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import iconvideogallerry from '../assets/icons/Create.png';
import iconStatistics from '../assets/icons/statistics.png';

function AdminEditing(){
    return(
        <div>
            <Nav/>
            <Header/>
            <h3 class="directions">Редактирование</h3>
            
            <div class="card-choice-editing">
                <div class="card-choice-edit">
                    <div onclick="window.location.href = 'video-gallery-edit.html'">
                        <img src={iconvideogallerry}/>
                        <a>Видеогалерея</a>
                    </div>
                </div>
                <div class="card-choice-edit">
                    <div>
                        <img src={iconStatistics}/>
                        <a>Документы</a>
                    </div>
                </div>
                <div class="card-choice-edit">
                    <div>
                        <img src={iconStatistics}/>
                        <a>Библиотека</a>
                    </div>
                </div>
                <div class="card-choice-edit">
                    <div onclick="window.location.href = 'photo-gallery-edit.html'">
                        <img src={iconStatistics}/>
                        <a>Фотогалерея</a>
                    </div>
                </div>
                <div class="card-choice-edit">
                    <div>
                        <img src={iconStatistics}/>
                        <a>Учащиеся</a>
                    </div>
                </div>
                <div class="card-choice-edit">
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