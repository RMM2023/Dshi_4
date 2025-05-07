import react from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ImageScroll from '../components/ImageScroll';
import iconMasks from '../assets/icons/masks.png';
import iconCalendar from '../assets/icons/calendar.png';
import iconMessage from '../assets/icons/message.png'
import DepartmentSchool from './DepartmentSchool';
import { useNavigate } from 'react-router-dom';

function MainPage(){
    const navigate = useNavigate();
    return(
        <div>
            <Header/>
            <Nav/>
            <ImageScroll/>          
            <div class="card-container">
                <div id="card-direction" class="card" onclick={() => navigate('DepartmentSchool')}>
                    <img src={iconMasks}/>
                    <p>Наши направления</p>
                </div>

                <div id="calendar" class="card" onclick={() => navigate('DepartmentSchool')}>
                    <img src={iconCalendar}/>
                    <p>Расписание</p>
                </div>

                <div class="card" onclick={() => navigate('DepartmentSchool')}>
                    <img src={iconMessage}/>
                    <p>Написать нам</p>
                </div>
            </div>
        </div>
    );
}
export default MainPage;