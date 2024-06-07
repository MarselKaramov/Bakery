let slides = document.querySelectorAll('.slide-single')
console.log(slides)
let slider = [];
for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove()
}
console.log(slider);

let step = 0;
let offset = 0;


function draw() {
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slide-single');
    img.style.left = offset * 390 + 'px';
    document.querySelector('#instSlider').appendChild(img);
    if (step + 1 == slider.length) {
        step = 0;
    } else {
        step++;
    }
    offset = 1;
}

function left() {
    let slides2 = document.querySelectorAll('.slide-single');
    let offset2 = 0;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2 * 390 - 390 + 'px';
        offset2++;
    }
    setTimeout(function() {
            slides2[0].remove()
            draw()
        },
        1000);

}
draw();
draw();

document.querySelector('#instSlider').onclick = left;


const links = document.querySelectorAll(".kits_Btn")
links.forEach((item) => {
    item.addEventListener("click", () => {
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({ behavior: "smooth", block: "start" })
    })
})





(function() {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.pageYOffset > 30) {
            header.classList.remove('header')
            header.classList.add('headerActive')
        } else {
            header.classList.remove('headerActive')
            header.classList.add('header')

        }
    }
}())