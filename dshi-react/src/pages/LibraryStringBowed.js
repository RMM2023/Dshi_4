import react from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';

function LibraryStringBowed(){
    const navigate = useNavigate();
    return(
        <div>
            <Header/>
            <Nav/>
            <hr className="hr-line"></hr>
            <p>
                Наименование
                Автор: Мубаракова Ш. Т.
                ISBN:
                Издательство:
                Год издания:
                Электронный магазин
                Формат: TXT FB2 EPUB PDF DOC/DOCX LRF и MOBI
            </p>
        </div>
    );
}
export default LibraryStringBowed;