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
import iconMusicTheory from '../assets/icons/musicTheory.png';
import { useNavigate } from 'react-router-dom';

function Library(){
    const navigate = useNavigate();
    return(
        <div>
            <Header/>
            <Nav/>
            <hr className="hr-line"></hr>
            <h3 className="directions2">Библиотека</h3>
        
            <div className="card-container3">
                <div id="departament-piano" className="card3" onClick={() => navigate('/timetable')}>
                    <img src={iconRoal}/>
                    <p>Библиотека отдела фортепиано</p>
                </div>

                <div id="department-string-bowed" className="card3" onClick={() => navigate('/libraryStringBowed')}>
                    <img src={iconViolin}/>
                    <p>Библиотека отдела струнно смычковых инструментов</p>
                </div>

                <div id="departament-string-pluced" className="card3" onClick="window.location.href = 'department-string-plucked.html'">
                    <img src={iconGuitar}/>
                    <p>Библиотека отдела струнно-щипковых инструментов</p>
                </div>
                <div id="department-folk" className="card3" onClick="window.location.href = 'department-folk.html'">
                    <img src={iconAccordion}/>
                    <p>Библиотека отдела народных инструментов</p>
                </div>
                <div id="department-wind" className="card3" onClick="window.location.href = 'department-wind.html'">
                    <img src={iconWind}/>
                    <p>Библиотека отдела духовых инструментов</p>
                </div>
                <div id="department-vocal" className="card3" onClick="window.location.href = 'department-vocal.html'">
                    <img src={iconVocal}/>
                    <p>Библиотека отдела вокала</p>
                </div>
                <div id="department-choral-singing" className="card3" onClick="window.location.href = 'department-choral-singing.html'">
                    <img src={iconChoral}/>
                    <p>Библиотека отдела хорового пения</p>
                </div>
                <div id="department-choreography" className="card3" onClick="window.location.href = 'department-choreography.html'">
                    <img src={iconChoreography}/>
                    <p>Библиотека отдела<br/>хореографического искусства</p>
                </div>
                <div id="department-theatrical" className="card3" onClick="window.location.href = 'department-theatrical.html'">
                    <img src={iconTheatrical}/>
                    <p>Библиотека отдела театрального искусства</p>
                </div>
                <div id="department-theatrical" className="card3" onClick="window.location.href = 'department-theatrical.html'">
                    <img src={iconMusicTheory}/>
                    <p>Библиотека отдела теоретических дисциплин</p>
                </div>
            </div>
        </div>
    );
}
export default Library;