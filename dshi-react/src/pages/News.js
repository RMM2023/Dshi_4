import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

function News(){
    return(
        <div>
            <Header/>
            <Nav/>
            <hr className="hr-line"></hr>
            <h1 className="directions">Наши новости</h1>
            <div className='news-contaner'>
                <image src = "/public/smallСountry.png"/>
                <div className='news-text'>
                <a>
                    15 декабря на базе нашей школы состоялся X Республиканский конкурс «Маленькая страна».
                    В нём приняли участие и наши учащиеся.
                    Фортепианный отдел:
                    Гайсина Самира - лауреат 1 степени (преп. Насыбуллина Э. Р.);
                    Габитова Амалия - лауреат 1 степени, Абдрахманов Никита - лауреат 2 степени, Вараксина Малика - лауреат 2 степени (преп. Козлова В. В.);
                    Баландина Валерия - лауреат 3 степени, Рамазанова Амина - лауреат 1 степени (преп. Мубаракова Ш. Т.);
                </a>
                </div>
            </div>
        </div>
    );
}
export default News;