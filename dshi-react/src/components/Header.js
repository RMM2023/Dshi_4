import react from 'react';
import logo from '../assets/icons/cooperation.png';

function Header(){
    return (
        <header class="hed">
            <div class="logo">
                <img src={logo}/>
            </div>
            
            <div class="school-info">
                <div class="school-name">
                    Муниципальное бюджетное учреждение дополнительного образования
                    <br/>
                    "Детская школа искусств №4 Советского района г. Казани
                </div>
            </div>
            
            <div class="contact-info">
                <div class="adress-contect">
                    г. Казань, Проспект Победы,
                    <br/>
                    д.108 +7(843)-261-20-57
                </div>
            </div>
        </header>
    );
}
export default Header;