import React from 'react';
import { useNavigate } from 'react-router-dom';

function Nav(){
    const navigate = useNavigate();
    return (
        <nav className="nav">
            <div className="nav-item">
                О школе
                <div className="dropdown-menu">
                    <div className="dropdown-menu-item" onClick={() => navigate('/hisroryScool')}>История школы</div>
                    <div className="dropdown-menu-item" onClick={() => navigate('/news')}>Новости</div>
                    <div className="dropdown-menu-item" onClick={() => navigate('/photoGallery')}> Фотогаллерея</div>
                    <div className="dropdown-menu-item" onClick={() => navigate('/videoGallery')}>Видеогалерея</div>
                    <div className="dropdown-menu-item" onClick={() => navigate('/ourStependiates')}>Наши степендиаты</div>
                    <div className="dropdown-menu-item" onClick={() => navigate('/ourLaureates')}>Лауреаты</div>
                    <div className="dropdown-menu-item">Известные выпускники</div>
                    <div className="dropdown-menu-item" onClick={() => navigate('/library')}>Библиотека</div>
                    <div className="dropdown-menu-item">Одаренные дети</div>
                    <div className="dropdown-menu-item">Наши конкурсы</div>
                    <div className="dropdown-menu-item">Школа в СМИ</div>
                </div>
            </div>
            
            <div id="index" className="nav-item-main" onClick={() => navigate('/administration/poster')}>Наша Афиша</div>
            
            <div className="nav-item">
                Сведения об организации
                <div className="dropdown-menu">
                    <div className="dropdown-menu-item">Основные сведения</div>
                    <div className="dropdown-menu-item">Образовательный процесс</div>
                    <div className="dropdown-menu-item">Документы</div>
                    <div className="dropdown-menu-item">Структура и органы управления образовательной организации</div>
                    <div className="dropdown-menu-item">Руководство</div>
                    <div className="dropdown-menu-item">Преподавательский состав</div>
                    <div className="dropdown-menu-item">Доступная среда</div>
                    <div className="dropdown-menu-item">Рейтинг школы</div>
                    <div className="dropdown-menu-item">Методическая деятельность</div>
                    <div className="dropdown-menu-item">Организационно-массовая деятельность</div>
                    <div className="dropdown-menu-item">Отчет</div>
                    <div className="dropdown-menu-item">Вакансии</div>
                </div>
            </div>
            
            <div className="nav-item">
                Образование
                <div className="dropdown-menu">
                    <div className="dropdown-menu-item">Направления школы</div>
                    <div className="dropdown-menu-item">День открытых дверей</div>
                    <div className="dropdown-menu-item">Прием в школу</div>
                    <div className="dropdown-menu-item">Платные образовательные услуги</div>
                    <div className="dropdown-menu-item">Учащимся</div>
                    <div className="dropdown-menu-item">Дистанционное обучение</div>
                </div>
            </div>
            
            <div className="nav-item">
                Ещё
                <div className="dropdown-menu">
                    <div className="dropdown-menu-item">Наши контакты</div>
                    <div className="dropdown-menu-item">Наши отзывы</div>
                </div>
            </div>
        </nav>
    );
}
export default Nav;