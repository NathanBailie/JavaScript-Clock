"use strict"

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
