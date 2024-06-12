const headerEl = document.querySelector('#header');

window.addEventListener(
    'scroll',
    _.throttle(function () {
        if (window.scrollY > 200) {
            // #header가 bg-w 클래스 추가
            headerEl.classList.add('bg-w');
            gsap.to(headerEl, {
                // y: -70,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(30px)',
                duration: 0.5,
            });
        } else {
            headerEl.classList.remove('bg-w');
            gsap.to(headerEl, {
                // y: 0,
                backgroundColor: 'transparent',
                backdropFilter: 'blur(0)',
                duration: 0.5,
            });
        }
    }, 300),
);
