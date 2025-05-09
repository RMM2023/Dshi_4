import react from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
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
            <Nav/>
            <ImageScroll/>          
            <div className="card-container">
                <div id="card-direction" className="card" onClick={() => navigate('/departments/school')}>
                    <img src={iconMasks}/>
                    <p>Наши направления</p>
                </div>

                <div id="calendar" className="card" onClick={() => navigate('/departments/school')}>
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