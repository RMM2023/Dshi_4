import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ImageScroll from '../components/ImageScroll';
import iconProgramm from '../assets/icons/programm_icon.png';
import iconAnnotation from '../assets/icons/annotation_icon.png';
import { useNavigate } from 'react-router-dom';

function DepartmentStringPlucked(){
    const navigate = useNavigate();
    return(
        <div>
            <Header/>
            <Nav/>
            <hr className="hr-line"></hr>
            <div className="department-name">
                <h4>Отделение струнно-щипковых инструментов</h4>
            </div>
            <ImageScroll/>

            <div className="chapter-name">
            <a>Для поступающих</a>
            </div>
            
            <hr className="hr-line-chapter"/>
            
            <div className="info-incoming">
                    <a><h4>Срок обучения: </h4>8 лет</a>
                    <a><h4>Прием в школу: </h4>7-8 лет</a>
                    <a><h4>Уровень образования: </h4>Дополнительное предпрофессиональное образование</a>
                    <a><h4>Документ об образовании: </h4>Свидетельство об окончании Детской школы искусств государствоенного образца</a>
            </div>
            
            <div className="chapter-name">
                <a>Документы</a>
            </div>
            
            <hr className="hr-line-chapter"/>
            
            <div className="docs">
                <div className="card-container-docs">
                    <div id="guitar_annotation" className="card-doc" onClick="window.location.href='programs/string_plucked/guitar_annotation.pdf'">
                        <img src={iconAnnotation}/>
                        <a>Аннотация "Гитара"</a>
                    </div>
                    <div id="balalaika_annotation" className="card-doc" onClick="window.location.href='programs/string_plucked/balalaika_annotation.pdf'">
                        <img src={iconAnnotation}/>
                        <a>Аннотация "Балалайка"</a>
                    </div>
                    <div id="domra_annotation" className="card-doc" onClick="window.location.href='programs/string_plucked/domra_annotation.pdf'">
                        <img src={iconAnnotation}/>
                        <a>Аннотация "Домра"</a>
                    </div>
                    <div id="guitar_5(6)_DPP" className="card-doc" onClick="window.location.href='programs/string_plucked/guitar_5(6)_DPP.pdf'">
                        <img src={iconProgramm}/>
                        <a>ДПП "Гитара 5(6)"</a>
                    </div>
                    <div id="guitar_8(9)_DPP" className="card-doc" onClick="window.location.href='programs/string_plucked/guitar_8(9)_DPP.pdf'">
                        <img src={iconProgramm}/>
                        <a>ДПП "Гитара 8(9)"</a>
                    </div>
                    <div id="balalaika_DPP" className="card-doc" onClick="window.location.href='programs/string_plucked/balalaika_DPP.pdf'">
                        <img src={iconProgramm}/>
                        <a>ДПП "Балалайка"</a>
                    </div>
                    <div id="domra_DPP" className="card-doc" onClick="window.location.href='programs/string_plucked/domra_DPP.pdf'">
                        <img src={iconProgramm}/>
                        <a>ДПП "Домра"</a>
                    </div>
                </div>
            </div>
            
            <div className="chapter-name">
                <a>Об отделе</a>
            </div>
            
            <hr className="hr-line-chapter"/>
        
            <div className="department-info">
                <p>Фортепианное отделение - одно из самых крупных отделений, существует с момента открытия школы.
                    Предмет фортепиано является важным компонентом музыкального обучения в детской музыкальной школе. В первую очередь, это возможность для учащихся лично, в собственной исполнительской практике познакомиться с огромными фактурными возможностями фортепиано. Нельзя также не признать исключительной роли фортепиано в развитии гармонического и полифонического слуха с первых шагов обучения.
                    В копилке преподавателей отделения огромный опыт в воспитании юных музыкантов-пианистов. Многие выпускники фортепианного отделения связали свою жизнь с музыкой, продолжив образование в музыкальных училищах, на музыкальных факультетах институтов.
                    Преподаватели отделения сохраняют лучшие традиции уникальной отечественной пианистической школы. В то же время они открыты всему новому, постоянно совершенствуют свое педагогическое мастерство, находятся в поиске оптимальных решений для успешного обучения детей игре на фортепиано. Активно внедряются в учебный процесс музыкально-информационные технологии.
                    На фортепианное отделение принимаются дети 6,5 – 9 лет на срок обучения – 8 лет (по предпрофессиональным программам).
                    Программы ориентированы на формирование у учеников эстетических взглядов и потребности общаться с культурными ценностями, воспитание детей в творческой атмосфере, обстановке доброжелательности и профессиональной требовательности.
                    Во время учебы юные пианисты осваивают игру на фортепиано соло и в ансамбле, учатся аккомпанировать певцу.
                    Каждый обучающийся отделения получает возможность публичных выступлений на школьных, городских концертах, защищают честь школы искусств «Глазовчанка» на фестивалях и конкурсах городского, областного, межрегионального, Всероссийского и Международного уровней, демонстрируя неизменно высокое качество исполнения и завоевывая новые награды.
                    </p>
                <div className="head-techers-list">
                    <br/><h3>Заведующий отделением:</h3>
                    <br/>Насыбуллина Эльмира Робертовна
                    <br/><h3>Преподаватели отделения:</h3>
                    <br/>Брылякова Ирина Геннадьевна,
                    <br/>Загребина Лариса Михайловна,
                    <br/>Кожина Ольга Сергеевна,
                    <br/>Кондюрина Евгения Борисовна,
                    <br/>Кощеева Ксения Викторовна,
                    <br/>Кычкина Ольга Валентиновна,
                    <br/>Лекомцева Вера Геннадьевна,
                    <br/>Ленчукова Татьяна Александровна,
                    <br/>Пагина Татьяна Евгеньевна,
                    <br/>Трофимова Екатерина Борисовна,
                    <br/>Урасинова Анастасия Юрьевна,
                    <br/>Уткина Любовь Анатольевна.
                </div>
            </div>
        </div>
    );
}
export default DepartmentStringPlucked;