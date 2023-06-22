window.addEventListener('load', function () {
    let slides = document.getElementsByClassName('slide');

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        slide.addEventListener('click', function (e) {
            const first = slide.getBoundingClientRect().top
            const parent = slide.parentNode;
            parent.removeChild(slide);
            parent.appendChild(slide);
            const last = slide.getBoundingClientRect().top;
            const invertDistance = first - last;
            // Invert and Play. Go from the inverted position to last.
            slide.animate([
                { transform: `translateY(${invertDistance}px)` },
                { transform: 'translateY(0)' }
            ], {
                duration: 500,
                easing: 'cubic-bezier(0,0,0.32,1)',
            });
        })
    }
})