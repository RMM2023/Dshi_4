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
            <h3 className="directions">Отделения школы</h3>
        
        <div className="card-container2">
            <div id="departament-piano" className="card2" onClick="window.location.href = 'DepartmentPiano.js'">
                <img src={iconRoal}/>
                <p>Отдел фортепиано</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>

            <div id="department-string-bowed" className="card2" onClick="window.location.href = 'department-piano.html'">
                <img src={iconViolin}/>
                <p>Отдел струнно смычковых инструментов</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>

            <div id="departament-string-pluced" className="card2" onClick="window.location.href = 'department-string-plucked.html'">
                <img src={iconGuitar}/>
                <p>Отдел струнно-щипковых инструментов</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-folk" className="card2" onClick="window.location.href = 'department-folk.html'">
                <img src={iconAccordion}/>
                <p>Отдел народных инструментов</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-wind" className="card2" onClick="window.location.href = 'department-wind.html'">
                <img src={iconWind}/>
                <p>Отдел духовых инструментов</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-vocal" className="card2" onClick="window.location.href = 'department-vocal.html'">
                <img src={iconVocal}/>
                <p>Отдел вокала</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-choral-singing" className="card2" onClick="window.location.href = 'department-choral-singing.html'">
                <img src={iconChoral}/>
                <p>Отдел хорового пения</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-choreography" className="card2" onClick="window.location.href = 'department-choreography.html'">
                <img src={iconChoreography}/>
                <p>Отдел<br/>хореографического искусства</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-theatrical" className="card2" onClick="window.location.href = 'department-theatrical.html'">
                <img src={iconTheatrical}/>
                <p>Отдел театрального искусства</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
        </div>
        </div>
    );
}
export default DepartmentSchool;