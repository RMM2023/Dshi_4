import React from 'react'
function Nav(){
    return (
        <nav class="nav">
            <div class="nav-item">
                О школе
                <div class="dropdown-menu">
                    <div class="dropdown-menu-item">История школы</div>
                    <div class="dropdown-menu-item">Новости</div>
                    <div class="dropdown-menu-item">Видеогалерея</div>
                    <div class="dropdown-menu-item">Наши степендиаты</div>
                    <div class="dropdown-menu-item">Лауреаты</div>
                    <div class="dropdown-menu-item">Известные выпускники</div>
                    <div class="dropdown-menu-item">Библиотека</div>
                    <div class="dropdown-menu-item">Одаренные дети</div>
                    <div class="dropdown-menu-item">Наши конкурсы</div>
                    <div class="dropdown-menu-item">Школа в СМИ</div>
                </div>
            </div>
            <div id="index" class="nav-item-main" onclick="window.location.href = 'index.html'">Наша Афиша</div>
            <div class="nav-item">
                Сведения об организации
                <div class="dropdown-menu">
                    <div class="dropdown-menu-item">Основные сведения</div>
                    <div class="dropdown-menu-item">Образовательный процесс</div>
                    <div class="dropdown-menu-item">Документы</div>
                    <div class="dropdown-menu-item">Структура и органы управления образовательной организации</div>
                    <div class="dropdown-menu-item">Руководство</div>
                    <div class="dropdown-menu-item">Преподавательский состав</div>
                    <div class="dropdown-menu-item">Доступная среда</div>
                    <div class="dropdown-menu-item">Рейтинг школы</div>
                    <div class="dropdown-menu-item">Методическая деятельность</div>
                    <div class="dropdown-menu-item">Организационно-массовая деятельность</div>
                    <div class="dropdown-menu-item">Отчет</div>
                    <div class="dropdown-menu-item">Вакансии</div>
                </div>
            </div>
            <div class="nav-item">
                Образование
                <div class="dropdown-menu">
                    <div class="dropdown-menu-item">Направления школы</div>
                    <div class="dropdown-menu-item">День открытых дверей</div>
                    <div class="dropdown-menu-item">Прием в школу</div>
                    <div class="dropdown-menu-item">Платные образовательные услуги</div>
                    <div class="dropdown-menu-item">Учащимся</div>
                    <div class="dropdown-menu-item">Дистанционное обучение</div>
                </div>
            </div>
            <div class="nav-item">
                Ещё
                <div class="dropdown-menu">
                    <div class="dropdown-menu-item">Наши контакты</div>
                    <div class="dropdown-menu-item">Наши отзывы</div>
                </div>
            </div>
        </nav>
    );
}
export default Nav;