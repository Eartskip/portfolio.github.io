document.addEventListener("DOMContentLoaded", function () {
    const positionWindow = document.querySelector('.position-window');
    const chat = document.getElementById('chat');

    chat.style.transform = `rotate(180deg)`;
    positionWindow.style.transform = 'translateY(95%)';


    chat.addEventListener('click', function () {
        if (positionWindow.style.transform === `translateY(95%)`) {
            positionWindow.style.transform = 'translateY(0)';
            chat.style.transform = `rotate(0deg)`;
        } else {
            positionWindow.style.transform = 'translateY(95%)';
            chat.style.transform = `rotate(180deg)`;
        }
    });
});
