import React from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import iconEdit from '../../assets/icons/Create.png';
import iconStatistics from '../../assets/icons/statistics.png';
import { useNavigate } from 'react-router-dom';

function AdminChoice(){
    const navigate = useNavigate();
    <div>
        <Header/>
        <Nav/>
        <hr className="hr-line"></hr>
        <div className="card-choice-container">
            <div className="card-choice" onClick={() => navigate('/administration/adminEditing')}>
                    <img src={iconEdit}/>
                    <a>Редактировать</a>
            </div>
            <div className="card-choice">
                    <img src={iconStatistics}/>
                    <a>Статистика</a>
            </div>
        </div>
    </div>
}
export default AdminChoice;