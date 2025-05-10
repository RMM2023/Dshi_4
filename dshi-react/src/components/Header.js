import react from 'react';
import logo from '../assets/icons/cooperation.png';

function Header(){
    return (
        <header className="hed">
            <div className="logo">
                <img src={logo}/>
            </div>
            
            <div className="school-info">
                <div className="school-name">
                    Муниципальное бюджетное учреждение дополнительного образования
                    <br/>
                    "Детская школа искусств №4 Советского района г. Казани
                </div>
            </div>
            
            <div className="contact-info">
                <div className="adress-contect">
                    г. Казань, Проспект Победы,
                    <br/>
                    д.108 +7(843)-261-20-57
                </div>
            </div>
        </header>
    );
}
export default Header;