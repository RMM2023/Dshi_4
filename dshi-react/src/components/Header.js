import react from 'react';
function Header(){
    return (
        <header class="hed">
            <div class="logo">
                <img src="Fone\cooperation.png"/>
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