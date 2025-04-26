import react from 'react';
import Header from '../components/Header';
import Nav from '../components/nav';

function MainPage(){
    return(
        <div>
            <Header/>
            <Nav/>
            <hr class="hr-line"/>
        
            <div class="image-scroll">
                <div class="gallery">
                    <button id="left-button" class="arrow left-arrow"></button>
                    <img id="gallery-photo" src="Foto\1.jpg"/>
                    <button id="right-button" class="arrow right-arrow"></button>
                </div>
            </div>
            
            <div class="card-container">
                <div id="card-direction" class="card" onclick="window.location.href = 'school-departments.html'">
                    <img src="Icons\masks.png"/>
                    <p>Наши направления</p>
                </div>

                <div id="calendar" class="card" onclick="window.location.href = 'https/'">
                    <img src="Icons\calendar.png"/>
                    <p>Расписание</p>
                </div>

                <div class="card">
                    <img src="Icons\message.png"/>
                    <p>Написать нам</p>
                </div>
            </div>
        </div>
    );
}
export default MainPage;