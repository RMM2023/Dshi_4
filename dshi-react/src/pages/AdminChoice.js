import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import iconEdit from '../assets/icons/Create.png';
import iconStatistics from '../assets/icons/statistics.png';

function AdminChoice(){
    <div>
        <Header/>
        <Nav/>
        <div class="card-choice-container">
            <div class="card-choice" onclick="window.location.href = 'admin-editing.html'">
                    <img src={iconEdit}/>
                    <a>Редактировать</a>
            </div>
            <div class="card-choice">
                    <img src={iconStatistics}/>
                    <a>Статистика</a>
            </div>
        </div>
    </div>
}
export default AdminChoice;