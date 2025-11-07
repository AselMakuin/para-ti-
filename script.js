// Carrusel fade + zoom
const images = document.querySelectorAll('.imagenes img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;

function showImage(index) {
    images.forEach((img,i)=>{
        img.classList.remove('active');
        if(i===index) img.classList.add('active');
    });
}
nextBtn.addEventListener('click', ()=>{ current=(current+1)%images.length; showImage(current); });
prevBtn.addEventListener('click', ()=>{ current=(current-1+images.length)%images.length; showImage(current); });
setInterval(()=>{ current=(current+1)%images.length; showImage(current); },6000);
showImage(current);

// Corazones flotando
const heartsContainer = document.querySelector('.hearts');
function createHeart() {
    const heart=document.createElement('div');
    heart.classList.add('heart');
    heart.style.left=Math.random()*100+'vw';
    heart.style.animationDuration=(3+Math.random()*3)+'s';
    heartsContainer.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
}
setInterval(createHeart,400);

// Estrellitas sutiles
const starsContainer = document.querySelector('.stars');
for(let i=0;i<50;i++){
    const star=document.createElement('div');
    star.classList.add('star');
    star.style.left=Math.random()*100+'vw';
    star.style.top=Math.random()*100+'vh';
    star.style.width=Math.random()*2+1+'px';
    star.style.height=star.style.width;
    star.style.animationDuration=(5+Math.random()*5)+'s';
    starsContainer.appendChild(star);
}

// Scroll animado
const scrollSections=document.querySelectorAll('.scroll-animate');
window.addEventListener('scroll', ()=>{
    const trigger=window.innerHeight*0.85;
    scrollSections.forEach(sec=>{
        const top=sec.getBoundingClientRect().top;
        if(top<trigger) sec.classList.add('visible');
    });
});

// Mensajes sorpresa
const mensajes=["Eres increíble 💖","Cada momento contigo cuenta ✨","Gracias por ser tú 💙"];
const mensajeDiv=document.getElementById('mensaje-sorpresa');
function showMensaje(){
    const text=mensajes[Math.floor(Math.random()*mensajes.length)];
    mensajeDiv.textContent=text;
    mensajeDiv.style.opacity='1';
    setTimeout(()=>{ mensajeDiv.style.opacity='0'; },4000);
}
setInterval(showMensaje,8000);

// Música play/pause
const music=document.getElementById('bg-music');
const toggleBtn=document.getElementById('music-toggle');
let isPlaying=false;
document.addEventListener('DOMContentLoaded',()=>{
    music.volume=0.4;
    music.play().then(()=>{isPlaying=true}).catch(()=>{isPlaying=false;});
});
toggleBtn.addEventListener('click',()=>{
    if(isPlaying){ music.pause(); }else{ music.play(); }
    isPlaying=!isPlaying;
});
