document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('video');
    const playButton = document.querySelector('.play-button');

    if (playButton && video) {
        playButton.addEventListener('click', () => {
            video.play();
            playButton.style.display = 'none';
        });

        video.addEventListener('pause', () => {
            playButton.style.display = 'block';
        });

        video.addEventListener('play', () => {
            playButton.style.display = 'none';
        });
    }

    // Add slider functionality
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const conditionsGrid = document.querySelector('.conditions-grid');

    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.condition-card').length;

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            currentSlide = Math.max(currentSlide - 1, 0);
            updateSlider();
        });

        nextButton.addEventListener('click', () => {
            currentSlide = Math.min(currentSlide + 1, totalSlides - 3);
            updateSlider();
        });
    }

    function updateSlider() {
        const offset = currentSlide * -100;
        conditionsGrid.style.transform = `translateX(${offset}%)`;
    }

    document.addEventListener('DOMContentLoaded', function() {
        const options = document.querySelectorAll('.option');
        const progress = document.querySelector('.progress');

        options.forEach(option => {
            option.addEventListener('click', function() {
                options.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                progress.style.width = this.classList.contains('yes') ? '75%' : '50%';
            });
        });
    });
});