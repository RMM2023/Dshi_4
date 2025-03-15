document.addEventListener('DOMContentLoaded', function(){
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');
    const galleryPhoto = document.getElementById('gallery-photo');
    
    const images = [
        'Foto/1.jpg',
        'Foto/2.jpg',
        'Foto/3.jpg',
        'Foto/4.jpg',
        'Foto/5.jpg',
        'Foto/6.jpg',
        'Foto/7.jpg',
        'Foto/8.jpg',
        'Foto/9.jpg',
        'Foto/10.jpg'
    ];

    let index = 0;

    function update(){
        galleryPhoto.classList.add('img-list-scroll');
        setTimeout(()=>{
            galleryPhoto.src = images[index]; //заменяем изображение спустя 400 милисек 
        }, 400);
        setTimeout(()=>{
            galleryPhoto.classList.remove('img-list-scroll'); //завершаем(удаляем) анимацию на 800 мс
        }, 800);
    }

    leftButton.addEventListener('click', function(){
        index--;
        if(index < 0){
            index = images.length-1;
        }
        update();
    })

    rightButton.addEventListener('click', function(){
        index++;
        if(index >= images.length){
            index = 0;
        }
        update();
    })
    update();
});