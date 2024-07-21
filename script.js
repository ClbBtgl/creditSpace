window.onload = function() {
    let credits = document.querySelector('.credits');
    let duration = 3.0 * 60 * 1000; // 4.5 minutos en milisegundos
    let remainingTime = duration / 1000; // tiempo restante en segundos
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
                // Actualizar el contador cada segundo
                let countdownInterval = setInterval(() => {
                    remainingTime--;
                    if (remainingTime == 37) {
                        showData()
                    }

                }, 1000);

            }, 500);

            // const reproPlay = document.getElementById("reproPlay");
            // reproPlay.classList.remove("play")
            // reproPlay.classList.add("pause")
        }
    })


    function showData() {
        const data = document.getElementById('showData');
        data.classList.remove("hidden-page")
        data.classList.add("show-page-main")
    }


    //Author Lala || ShatteredDoll
};