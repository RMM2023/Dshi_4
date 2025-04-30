import React from 'react';
import Header from '../components/Header';
import Nav from '../components/nav';

function DepartmentSchool(){
    return(
        <div>
            <Header/>
            <Nav/>
            <h3 class="directions">Отделения школы</h3>
        
        <div class="card-container2">
            <div id="departament-piano" class="card2" onclick="window.location.href = 'department-piano.html'">
                <img src="Icons\Roal.png"/>
                <p>Отдел фортепиано</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>

            <div id="department-string-bowed" class="card2" onclick="window.location.href = 'department-piano.html'">
                <img src="Icons\violin.png"/>
                <p>Отдел струнно смычковых инструментов</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>

            <div id="departament-string-pluced" class="card2" onclick="window.location.href = 'department-string-plucked.html'">
                <img src="Icons\guitar.png"/>
                <p>Отдел струнно-щипковых инструментов</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-folk" class="card2" onclick="window.location.href = 'department-folk.html'">
                <img src="Icons\accordion.png"/>
                <p>Отдел народных инструментов</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-wind" class="card2" onclick="window.location.href = 'department-wind.html'">
                <img src="Icons\bassoon.png"/>
                <p>Отдел духовых инструментов</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-vocal" class="card2" onclick="window.location.href = 'department-vocal.html'">
                <img src="Icons\microphone.png"/>
                <p>Отдел вокала</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-choral-singing" class="card2" onclick="window.location.href = 'department-choral-singing.html'">
                <img src="Icons\choir.png"/>
                <p>Отдел хорового пения</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-choreography" class="card2" onclick="window.location.href = 'department-choreography.html'">
                <img src="Icons\salsa.png"/>
                <p>Отдел<br/>хореографического искусства</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
            <div id="department-theatrical" class="card2" onclick="window.location.href = 'department-theatrical.html'">
                <img src="Icons\theatre.png"/>
                <p>Отдел театрального искусства</p>
                <p>Зав. отдела Насыбуллина Э.Р.</p>
            </div>
        </div>
        </div>
    );
}
export default DepartmentSchool;