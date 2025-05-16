import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

function OurStependiates(){
    return(
        <div>
            <Header/>
            <Nav/>
            <hr className="hr-line"></hr>
            <h1 className="directions">Наша степендиаты</h1>
            <div className='news-container'>
                <image src = "/public/smallСountry.png"/>
                <p>
                    15 декабря на базе нашей школы состоялся X Республиканский конкурс «Маленькая страна».
                    В нём приняли участие и наши учащиеся.
                    Фортепианный отдел:
                    Гайсина Самира - лауреат 1 степени (преп. Насыбуллина Э. Р.);
                    Габитова Амалия - лауреат 1 степени, Абдрахманов Никита - лауреат 2 степени, Вараксина Малика - лауреат 2 степени (преп. Козлова В. В.);
                    Баландина Валерия - лауреат 3 степени, Рамазанова Амина - лауреат 1 степени (преп. Мубаракова Ш. Т.);
                </p>
            </div>
        </div>
    );
}
export default OurStependiates;