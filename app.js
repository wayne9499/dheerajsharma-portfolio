const slider = document.querySelector('.slider');
const left = document.querySelector('.btn1');
const right = document.querySelector('.btn2');
var sliderIndex = 0;
left.addEventListener('click', () => {
    if (sliderIndex > 0) {
        sliderIndex -= 1;
    } else {
        sliderIndex = 0;
    }
    slider.style.transform = 'translate(' + (sliderIndex) * -100 + '%)';
});
const home = document.getElementById('home');
home.addEventListener('click', () => {
    slider.style.transform = 'translate(' + (0) * -100 + '%)';
});
const resume = document.getElementById('resume');
resume.addEventListener('click', () => {
    slider.style.transform = 'translate(' + (1) * -100 + '%)';
});
const projects = document.getElementById('projects');
projects.addEventListener('click', () => {
    slider.style.transform = 'translate(' + (2) * -100 + '%)';
});
const contactMe = document.getElementById('contactme');
contactMe.addEventListener('click', () => {
    slider.style.transform = 'translate(' + (3) * -100 + '%)';
});
const chessPuzzles = document.getElementById('chesspuzzles');
chessPuzzles.addEventListener('click', () => {
    slider.style.transform = 'translate(' + (4) * -100 + '%)';
});
window.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowRight') {
        if (sliderIndex < 4) {
            sliderIndex += 1;
        } else {
            sliderIndex = 4;
        }
        slider.style.transform = 'translate(' + (sliderIndex) * -100 + '%)';
    } else if (e.code === 'ArrowLeft') {
        if (sliderIndex > 0) {
            sliderIndex -= 1;
        } else {
            sliderIndex = 0;
        }
        slider.style.transform = 'translate(' + (sliderIndex) * -100 + '%)';
    }
});

right.addEventListener('click', () => {
    if (sliderIndex < 4) {
        sliderIndex += 1;
    } else {
        sliderIndex = 4;
    }
    slider.style.transform = 'translate(' + (sliderIndex) * -100 + '%)';
});
function goToLabRepo() {
    window.location.replace('https://github.com/wayne9499/Laboratory-webApp');
}
function goToCovidAppRepo() {
    window.location.replace('https://github.com/wayne9499/covid-19-tracker');
}