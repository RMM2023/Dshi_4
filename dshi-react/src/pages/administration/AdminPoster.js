import React from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import add from '../../assets/icons/add.svg';
import deletes from '../../assets/icons/delete.svg';
import editing from '../../assets/icons/editing.svg';


function Poster(){
    return(
        <div>
            <Header/>
            <Nav/>
            <hr className="hr-line"></hr>
            <h3 className="directions">Афиша</h3>
            
            <div className="month-contaner">
                    <div className="month">Сентрябрь</div>
                    <div className="month">Октябрь</div>
                    <div className="month">Ноябрь</div>
                    <div className="month">Декабрь</div>
                    <div className="month">Январь</div>
                    <div className="month">Февраль</div>
                    <div className="month">Март</div>
                    <div className="month">Апрель</div>
                    <div className="month">Май</div>
                    <div className="month">Июнь</div>
                    <div className="month">Июль</div>
                    <div className="month">Август</div>
            </div>

            <div className="icon-add">
                <img src={add}/>
            </div>

            <div className='poster-comtainer'>
                <img src="/posters/musicTichers.jpg"/>
                <h5>Музыкальное приношение учителям</h5>
                <p>Дата: 26.09.2024
                    <br/>Время: 17:00
                    <br/>ул. Тредиаковского, 2/4
                    <br/>Вход свободный
                </p>
                <div className="edit-photo">
                    <a>Наименование фото</a>
                    <img src={deletes}/>
                    <img src={editing}/>
                </div>
            </div>
        </div>
    );
}
export default Poster;