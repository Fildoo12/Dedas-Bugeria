const logenzie = document.getElementById("logenzie");
const welcome = document.getElementById("Welcome");
const clicker = document.getElementById("clicker");
const vchod = document.getElementById("vchod");

const kuchar = document.getElementById("kuchar");
const check = document.getElementById("check");
const burgers = document.getElementById("burgers");
const restaurace = document.getElementById("restaurace");
const jobos = document.getElementById("jobos");
const text = document.getElementById("text");

const jobphoto = document.getElementById("sidejob");
const counter = document.getElementById("counter");
const prace = document.getElementById("prace");
const back = document.getElementById("back");

const hunger = document.getElementById("hunger");

function Outside() { 
    restaurace.style.display = "flex";
    welcome.style.display = "flex";
    vchod.style.display = "flex";
    clicker.style.display = "none";
    logenzie.style.display = "none";
    back.style.display = "none";
    
    
}

function Inside() {
    kuchar.style.display = "flex";
    check.style.display = "flex";
    burgers.style.display = "flex";
    jobos.style.display = "flex";
    text.style.display = "flex";
    vchod.style.display = "none";
    restaurace.style.display = "none";
    welcome.style.display = "none";
    back.style.display = "none";
    hunger.style.display = "flex";
    
    
}


function Pracicka() {
    counter.style.display = "flex";
    prace.style.display = "flex";
    jobphoto.style.display = "flex";
    jobos.style.display = "none";
    burgers.style.display = "none";
    kuchar.style.display = "none";
    check.style.display = "none";
    text.style.display = "none";
    hunger.style.display = "none";
}

function Zpet(){
    counter.style.display = "flex";
    kuchar.style.display = "flex";
    burgers.style.display = "flex";
    check.style.display = "flex";
    jobos.style.display = "flex";
    jobphoto.style.display = "none";
    prace.style.display = "none";
    hunger.style.display = "flex";
}

let money = 0;
let jidlo = 0;
let counterAdd = 1;

prace.onclick = () => {
    money += counterAdd;
    counter.innerHTML = `Peníze: ${money}$`;
};

back.style.display = "none";
function showStuff() {
    back.style.display = "inline";
}

function myFunction() {
    window.location = "index.html"
}

setTimeout(showStuff, 10000);

let smallBurger = 5;
let mediumBurger = 10;
let largeBurger = 20;
let luxuryBurger = 100;


function Small() {
    money -= smallBurger;
    counter.innerHTML = `Peníze: ${money}$`;
    jidlo += smallBurger;
    hunger.innerHTML = `Hunger: ${jidlo}/100`;
    if(jidlo > 100){
        alert("Dohrál jsi hru gratuluji");
        window.location.reload();
        }
    if(money < 0){
        alert("Zbankrotoval jsi!");
        window.location.reload();
    }
}
function Medium() {
    money -= mediumBurger;
    counter.innerHTML = `Peníze: ${money}$`;
    jidlo += mediumBurger;
    hunger.innerHTML = `Hunger: ${jidlo}/100`;
    if(jidlo > 100){
        alert("Dohrál jsi hru gratuluji");
        window.location.reload();
        }
    if(money < 0){
        alert("Zbankrotoval jsi!");
        window.location.reload();
    }
}
function Large() {
    money -= largeBurger;
    counter.innerHTML = `Peníze: ${money}$`;
    jidlo += largeBurger;
    hunger.innerHTML = `Hunger: ${jidlo}/100`;
    if(jidlo > 100){
        alert("Dohrál jsi hru gratuluji");
        window.location.reload();
    }
    if(money < 0){
    alert("Zbankrotoval jsi!");
    window.location.reload();
}
}
function Luxury() {
    money -= luxuryBurger;
    counter.innerHTML = `Peníze: ${money}$`;
    jidlo += luxuryBurger;
    hunger.innerHTML = `Hunger: ${jidlo}/100`;
    if(jidlo > 100){
    alert("Dohrál jsi hru gratuluji");
    window.location.reload();
    }
    if(money < 0){
    alert("Zbankrotoval jsi!");
    window.location.reload();
}
}

