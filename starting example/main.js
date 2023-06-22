window.addEventListener('load', function () {
    let slides = document.getElementsByClassName('slide');

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        slide.addEventListener('click', function (e) {
            const parent = slide.parentNode;
            parent.removeChild(slide)
            parent.appendChild(slide)
        })
    }
})