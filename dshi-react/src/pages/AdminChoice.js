import React from 'react';
import Header from '../components/Header';
import Nav from '../components/nav';

function AdminChoice(){
    <div>
        <Header/>
        <Nav/>
        <div class="card-choice-container">
            <div class="card-choice" onclick="window.location.href = 'admin-editing.html'">
                    <img src="Icons\Create.png"/>
                    <a>Редактировать</a>
            </div>
            <div class="card-choice">
                    <img src="Icons\statistics.png"/>
                    <a>Статистика</a>
            </div>
        </div>
    </div>
}
export default AdminChoice;