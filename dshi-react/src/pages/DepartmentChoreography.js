import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ImageScroll from '../components/ImageScroll';
import iconProgramm from '../assets/icons/programm_icon.png';
import iconAnnotation from '../assets/icons/annotation_icon.png';

function DepartmentChoreography(){
    return(
        <div>
            <Header/>
            <Nav/>
            <div class="department-name">
                <h4>Отделение хореографического искусства</h4>
            </div>
            <ImageScroll/>
            <div class="chapter-name">
                <a>Для поступающих</a>
            </div>
        
            <hr class="hr-line-chapter"/>
            
            <div class="info-incoming">
                    <a><h4>Срок обучения: </h4>8 лет</a>
                    <a><h4>Прием в школу: </h4>7-8 лет</a>
                    <a><h4>Уровень образования: </h4>Дополнительное предпрофессиональное образование</a>
                    <a><h4>Документ об образовании: </h4>Свидетельство об окончании Детской школы искусств государствоенного образца</a>
            </div>
            
            <div class="chapter-name">
                <a>Документы</a>
            </div>
            
            <hr class="hr-line-chapter/"/>
            
            <div class="docs">
                <div class="card-container-docs">
                    <div id="conversations_about_choreographic_art_annotation" class="card-doc" onclick="window.location.href='programs/choreography/conversations_about_choreographic_art_annotation.pdf'">
                        <img src={iconAnnotation}/>
                        <a>Аннотация "Беседы о хореографическом искусстве"</a>
                    </div>
                    <div id="classical_dance_annotation" class="card-doc" onclick="window.location.href='programs/choreography/classical_dance_annotation.pdf'">
                        <img src={iconAnnotation}/>
                        <a>Аннотация "Классический танец"</a>
                    </div>
                    <div id="folk_stage_dance_annotation" class="card-doc" onclick="window.location.href='programs/choreography/folk_stage_dance_annotation.pdf'">
                        <img src={iconAnnotation}/>
                        <a>Аннотация "Народно-сценический танец"</a>
                    </div>
                    <div id="rhythmics_and_dance_annotation" class="card-doc" onclick="window.location.href='programs/choreography/rhythmics_and_dance_annotation.pdf'">
                        <img src={iconAnnotation}/>
                        <a>Аннотация "Ритмика и танец"</a>
                    </div>
                    <div id="modern_dance_annotation" class="card-doc" onclick="window.location.href='programs/choreography/modern_dance_annotation.pdf'">
                        <img src={iconAnnotation}/>
                        <a>Аннотация "Современный танец"</a>
                    </div>
                    <div id="stage_practice_annotation" class="card-doc" onclick="window.location.href='programs/choreography/stage_practice_annotation.pdf'">
                        <img src={iconAnnotation}/>
                        <a>Аннотация "Сценическая практика"</a>
                    </div>
                    <div id="historical_everyday_and_modern_ballroom_dance_annotation" class="card-doc" onclick="window.location.href='programs/choreography/historical_everyday_and_modern_ballroom_dance_annotation.pdf'">
                        <img src={iconAnnotation}/>
                        <a>Аннотация "Историко-бытовой и современный бальный танец"</a>
                    </div>
                    <div id="conversations_about_choreographic_art_DOO" class="card-doc" onclick="window.location.href='programs/choreography/conversations_about_choreographic_art_DOO.pdf'">
                        <img src={iconProgramm}/>
                        <a>ДОО "Беседы о хореографическом искусстве"</a>
                    </div>
                    <div id="classical_dance_DOO" class="card-doc" onclick="window.location.href='programs/choreography/classical_dance_DOO.pdf'">
                        <img src={iconProgramm}/>
                        <a>ДОО "Классический танец"</a>
                    </div>
                    <div id="classical_dance_3-6_class_DOO" class="card-doc" onclick="window.location.href='programs/choreography/classical_dance_3-6_class_DOO.pdf'">
                        <img src={iconProgramm}/>
                        <a>ДОО "Классический танец 3-6 класс"</a>
                    </div>
                    <div id="folk_stage_dance_DOO" class="card-doc" onclick="window.location.href='programs/choreography/folk_stage_dance_DOO.pdf'">
                        <img src={iconProgramm}/>
                        <a>ДОО "Народно-сценический танец"</a>
                    </div>
                    <div id="rhythmics_and_dance_DOO" class="card-doc" onclick="window.location.href='programs/choreography/rhythmics_and_dance_DOO.pdf'">
                        <img src={iconProgramm}/>
                        <a>ДОО "Ритмика и танец"</a>
                    </div>
                    <div id="modern_dance_annotation" class="card-doc" onclick="window.location.href='programs/choreography/modern_dance_annotation.pdf'">
                        <img src={iconProgramm}/>
                        <a>ДОО "Современный танец"</a>
                    </div>
                    <div id="stage_practice_annotation" class="card-doc" onclick="window.location.href='programs/choreography/stage_practice_annotation.pdf'">
                        <img src={iconProgramm}/>
                        <a>ДОО "Сценическая практика"</a>
                    </div>
                    <div id="historical_everyday_and modern_ballroom_dance_DOO" class="card-doc" onclick="window.location.href='programs/choreography/historical_everyday_and modern_ballroom_dance_DOO.pdf'">
                        <img src={iconProgramm}/>
                        <a>ДОО "Историко-бытовой и современный бальный танец"</a>
                    </div>
                </div>
            </div>
            
            <div class="chapter-name">
                <a>Об отделе</a>
            </div>
            
            <hr class="hr-line-chapter"/>
        
            <div class="department-info">
                <p>Фортепианное отделение - одно из самых крупных отделений, существует с момента открытия школы.
                    Предмет фортепиано является важным компонентом музыкального обучения в детской музыкальной школе. В первую очередь, это возможность для учащихся лично, в собственной исполнительской практике познакомиться с огромными фактурными возможностями фортепиано. Нельзя также не признать исключительной роли фортепиано в развитии гармонического и полифонического слуха с первых шагов обучения.
                    В копилке преподавателей отделения огромный опыт в воспитании юных музыкантов-пианистов. Многие выпускники фортепианного отделения связали свою жизнь с музыкой, продолжив образование в музыкальных училищах, на музыкальных факультетах институтов.
                    Преподаватели отделения сохраняют лучшие традиции уникальной отечественной пианистической школы. В то же время они открыты всему новому, постоянно совершенствуют свое педагогическое мастерство, находятся в поиске оптимальных решений для успешного обучения детей игре на фортепиано. Активно внедряются в учебный процесс музыкально-информационные технологии.
                    На фортепианное отделение принимаются дети 6,5 – 9 лет на срок обучения – 8 лет (по предпрофессиональным программам).
                    Программы ориентированы на формирование у учеников эстетических взглядов и потребности общаться с культурными ценностями, воспитание детей в творческой атмосфере, обстановке доброжелательности и профессиональной требовательности.
                    Во время учебы юные пианисты осваивают игру на фортепиано соло и в ансамбле, учатся аккомпанировать певцу.
                    Каждый обучающийся отделения получает возможность публичных выступлений на школьных, городских концертах, защищают честь школы искусств «Глазовчанка» на фестивалях и конкурсах городского, областного, межрегионального, Всероссийского и Международного уровней, демонстрируя неизменно высокое качество исполнения и завоевывая новые награды.
                    </p>
                <div class="head-techers-list">
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
export default DepartmentChoreography;