import React from 'react';
import Nav from '../components/nav';
import Header from '../components/Header';

function AdminEditing(){
    return(
        <div>
            <Nav/>
            <Header/>
            <h3 class="directions">Редактирование</h3>
            
            <div class="card-choice-editing">
                <div class="card-choice-edit">
                    <div onclick="window.location.href = 'video-gallery-edit.html'">
                        <img src="Icons\Create.png"/>
                        <a>Видеогалерея</a>
                    </div>
                </div>
                <div class="card-choice-edit">
                    <div>
                        <img src="Icons\statistics.png"/>
                        <a>Документы</a>
                    </div>
                </div>
                <div class="card-choice-edit">
                    <div>
                        <img src="Icons\statistics.png"/>
                        <a>Библиотека</a>
                    </div>
                </div>
                <div class="card-choice-edit">
                    <div onclick="window.location.href = 'photo-gallery-edit.html'">
                        <img src="Icons\statistics.png"/>
                        <a>Фотогалерея</a>
                    </div>
                </div>
                <div class="card-choice-edit">
                    <div>
                        <img src="Icons\statistics.png"/>
                        <a>Учащиеся</a>
                    </div>
                </div>
                <div class="card-choice-edit">
                    <div>
                        <img src="Icons\statistics.png"/>
                        <a>Расписание</a>
                    </div>
                </div>
            </div>
        </div>
    );
}