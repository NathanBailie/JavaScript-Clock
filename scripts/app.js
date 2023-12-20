"use strict"

//clock hands moving
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');

const hourDeg = 360 / 12;
const minDeg = 360 / 60;
const secDeg = 360 / 60;

setInterval(() => {
    let day = new Date();
    let hours = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();

    hours = hours % 12;
    hours = hours ? hours : 12;

    let hh = hours * hourDeg;
    let mm = minutes * minDeg;
    let ss = seconds * secDeg;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});

// theme toggler
const toggler = document.querySelector('.toggler');
const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('.toggler h2');
const image = document.querySelector('.toggler img');
const CLOCK_LOC_ST_KEY = 'clockTheme';
let theme = localStorage.getItem(CLOCK_LOC_ST_KEY) || 'dark';
let lightIcon = './assets/images/sun.png';
let darkIcon = './assets/images/moon.png';

updateContent();

toggler.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(CLOCK_LOC_ST_KEY, theme);
    updateContent();
})

function updateContent() {
    wrapper.classList.remove('light', 'dark');
    wrapper.classList.add(theme);
    text.textContent = theme === 'dark' ? 'Dark theme' : 'Light theme';
    image.src = theme === 'dark' ? darkIcon : lightIcon;
}