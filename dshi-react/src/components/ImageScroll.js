import React, {useState, useEffect} from 'react';

const ImageScroll=() => {
    const [currentIndex, setCurrentIndex] = useState(0);//[currentIndex, setCurrentIndex] - откуда?  useState(0) - начальное состояние
    const [isAnimating, setIsAnimating] = useState (false);//[isAnimating, setIsAnimating] - сочиненные или встроенные?
    const images = [
        '/Foto/1.jpg',
        '/Foto/2.jpg',
        '/Foto/3.jpg',
        '/Foto/4.jpg',
        '/Foto/5.jpg',
        '/Foto/6.jpg',
        '/Foto/7.jpg',
        '/Foto/8.jpg',
        '/Foto/9.jpg',
        '/Foto/10.jpg'
    ];

    const scrollLeft = () => {//функция перелистывания налево
        if(!isAnimating){//проверка если не пустой isAnimating
            setIsAnimating(true); //запускается анимация?
            setCurrentIndex((prevIndex) => {//изменение начального индекса
                const newIndex = prevIndex -1;//на один меньше
                if(newIndex < 0){//если ниже ноля инндекс фото
                    return images.length-1;//возвращает -1 индекс, переход к начальному
                }else{
                    return newIndex;
                }
            });
            setTimeout(() => {setIsAnimating(false)},800);//время срабатывания анимации
        };
    }
    const scrollRight = () => {
        if(!isAnimating){
            setIsAnimating(true);
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex +1;//увелечине на 1
                if(newIndex >= images.length){
                    return 0;//дойдя до конца, переходит в 0 индекс
                }else{
                    return newIndex;
                }
            });
            setTimeout(() => {setIsAnimating(false)},800);
        };
    }
    return(
        <div className="image-scroll">
                <div className="gallery">
                    <button 
                        className="arrow left-arrow"
                        onClick={scrollLeft}
                    />
                    <img 
                        className={isAnimating ? 'img-list-scroll' : ''} //если isAnimating true - поставить класс img-list-scroll иначе пустой класс ''. проверка ? если true : если false. До ? if, после ? положительный результат, после : отрицательный результат
                        src={images[currentIndex]}
                    />
                    <button 
                        className="arrow right-arrow"
                        onClick={scrollRight}
                    />
                </div>
            </div>
    );
}
export default ImageScroll;