document.addEventListener("DOMContentLoaded", () => {

/* NAVBAR SCROLL EFFECT */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

navbar.style.background = "rgba(0,0,0,0.95)";
navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

}else{

navbar.style.background = "rgba(0,0,0,0.85)";
navbar.style.boxShadow = "none";

}

});

/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({
behavior:"smooth"
});

});

});

/* REVEAL ANIMATION */

const revealItems = document.querySelectorAll(
".stat-card,.about-container,.menu-card,.gallery-grid img,.contact-box"
);

const revealObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},
{
threshold:0.15
});

revealItems.forEach(item => {

item.style.opacity = "0";
item.style.transform = "translateY(40px)";
item.style.transition = "all .8s ease";

revealObserver.observe(item);

});

/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".stat-card h2");

const counterObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;

const targetText = counter.innerText;

const target = parseInt(
targetText.replace(/\D/g,'')
);

if(isNaN(target)) return;

let current = 0;

const increment = Math.ceil(target / 100);

const updateCounter = () => {

current += increment;

if(current >= target){

counter.innerText = targetText;

}else{

if(targetText.includes("+")){

counter.innerText = current + "+";

}else{

counter.innerText = current;

}

requestAnimationFrame(updateCounter);

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter => {
counterObserver.observe(counter);
});

/* MENU CARD HOVER GLOW */

const cards = document.querySelectorAll(".menu-card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.boxShadow =
"0 15px 35px rgba(245,179,1,.35)";

});

card.addEventListener("mouseleave", () => {

card.style.boxShadow = "none";

});

});

/* CONSOLE CREDIT */

console.log(
"Zaika Biryani Premium Landing Page Developed By MD IMRAN KHAN"
);

});