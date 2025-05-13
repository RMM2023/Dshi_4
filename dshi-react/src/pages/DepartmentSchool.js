import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import iconRoal from '../assets/icons/Roal.png';
import iconViolin from '../assets/icons/violin.png';
import iconGuitar from '../assets/icons/guitar.png';
import iconAccordion from '../assets/icons/accordion.png';
import iconWind from '../assets/icons/bassoon.png';
import iconVocal from '../assets/icons/microphone.png';
import iconChoral from '../assets/icons/choir.png';
import iconChoreography from '../assets/icons/salsa.png';
import iconTheatrical from '../assets/icons/theatre.png';
import { useNavigate } from 'react-router-dom';

function DepartmentSchool(){
    const navigate = useNavigate();
    return(
        <div>
            <Header/>
            <Nav/>
            <hr className="hr-line"></hr>
            <h3 className="directions">Отделения школы</h3>
        
        <div className="card-container2">
            <div id="departament-piano" className="card2" onClick={() => navigate('/departments/piano')}>
                <img src={iconRoal}/>
                <p>Отдел фортепиано</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>

            <div id="department-string-bowed" className="card2" onClick={() => navigate('/departments/stringBowed')}>
                <img src={iconViolin}/>
                <p>Отдел струнно смычковых инструментов</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>

            <div id="departament-string-pluced" className="card2" onClick={() => navigate('/departments/stringPlucked')}>
                <img src={iconGuitar}/>
                <p>Отдел струнно-щипковых инструментов</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-folk" className="card2" onClick={() => navigate('/departments/folk')}>
                <img src={iconAccordion}/>
                <p>Отдел народных инструментов</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-wind" className="card2" onClick={() => navigate('/departments/wind')}>
                <img src={iconWind}/>
                <p>Отдел духовых инструментов</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-vocal" className="card2" onClick={() => navigate('/departments/vocal')}>
                <img src={iconVocal}/>
                <p>Отдел вокала</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-choral-singing" className="card2" onClick={() => navigate('/departments/choralSinging')}>
                <img src={iconChoral}/>
                <p>Отдел хорового пения</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-choreography" className="card2" onClick={() => navigate('/departments/choreography')}>
                <img src={iconChoreography}/>
                <p>Отдел<br/>хореографического искусства</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-theatrical" className="card2" onClick={() => navigate('/departments/theatrical')}>
                <img src={iconTheatrical}/>
                <p>Отдел театрального искусства</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
        </div>
        </div>
    );
}
export default DepartmentSchool;