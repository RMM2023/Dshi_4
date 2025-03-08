document.addEventListener('DOMContentLoaded', function(){
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');
    const galleryPhoto = document.getElementById('gallery-photo');
    
    const images = [
        'Foto/foto1.jpg',
        'Foto/foto2.jpg'
    ];

    let index = 0;

    function update(){
        galleryPhoto.src = images[index];
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