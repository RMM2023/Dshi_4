import react from 'react';
import Header from '../components/Header';
import NavMainPage from '../components/NavMainPage';
import ImageScroll from '../components/ImageScroll';
import iconMasks from '../assets/icons/masks.png';
import iconCalendar from '../assets/icons/calendar.png';
import iconMessage from '../assets/icons/message.png'
import { useNavigate } from 'react-router-dom';

function MainPage(){
    const navigate = useNavigate();
    return(
        <div>
            <Header/>
            <NavMainPage/>
            <hr className="hr-line"></hr>
            <ImageScroll/>
            <div className="card-container">
                <div id="card-direction" className="card" onClick={() => navigate('/departments/school')}>
                    <img src={iconMasks}/>
                    <p>Наши направления</p>
                </div>

                <div id="calendar" className="card" onClick={() => navigate('/timetable')}>
                    <img src={iconCalendar}/>
                    <p>Расписание</p>
                </div>

                <div className="card" onClick={() => navigate('/departments/school')}>
                    <img src={iconMessage}/>
                    <p>Написать нам</p>
                </div>
            </div>
        </div>
    );
}
export default MainPage;