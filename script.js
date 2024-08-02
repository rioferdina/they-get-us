document.addEventListener('DOMContentLoaded', function() {
    const surpriseButton = document.getElementById('surprise-button');
    const photosContainer = document.getElementById('photos-container');
    const audio = document.getElementById('audio');
    
    // Array of photo filenames
    const photos = [
        'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg',
        'photo6.jpg', 'photo7.jpg', 'photo8.jpg', 'photo9.jpg', 'photo10.jpg',
        'photo11.jpg', 'photo12.jpg', 'photo13.jpg', 'photo14.jpg', 'photo15.jpg'
    ];
    
    surpriseButton.addEventListener('click', function() {
        document.body.classList.remove('welcome');
        document.body.classList.add('surprise-bg');
        photosContainer.classList.remove('hidden');
        
        // Create and append images
        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = `Photo ${photos.indexOf(photo) + 1}`;
            photosContainer.appendChild(img);
        });

        audio.play();
    });
});