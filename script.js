window.onload = function() {
    let credits = document.querySelector('.credits');
    let duration = 3.5 * 60 * 1000; // 4.5 minutos en milisegundos
    const backgroundMusic = document.getElementById('backgroundMusic');
    const container = document.getElementById('space');
    const iframe = document.getElementById('iframeIntroActive');

    window.addEventListener('message', (event) => {
        if (event.data == 'activeLoadFrame') {
            container.classList.remove("hidden-page");
            container.classList.add("show-page");
            iframe.classList.add("hidden-page");
            setTimeout(() => {
                credits.style.transition = `transform ${duration}ms linear`;
                credits.style.transform = 'translateY(-100%)';
                backgroundMusic.play();

                setTimeout(() => {
                    credits.style.display = 'none';
                }, duration);

            }, 500);

            // const reproPlay = document.getElementById("reproPlay");
            // reproPlay.classList.remove("play")
            // reproPlay.classList.add("pause")
        }
    })

    //Author Lala || ShatteredDoll
};