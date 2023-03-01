let birds = document.querySelectorAll('.birds-li-item');
let playerBtn = document.querySelector('.player-btn-wrapper');
let contentWrapper = document.querySelector('.content-wrapper');
let gitLink = document.querySelector('.footer-git');
let burger = document.querySelector('.burger');
let burgerStripes = document.querySelectorAll('.burger-stripe');
let menu = document.querySelector('.top-bar');
let currentSong = new Audio;
currentSong.src = 'assets/audio/forest.mp3';

playerBtn.onclick = function(){
    if(playerBtn.classList.contains('playerIsActive')){
        currentSong.pause();
    }else{
        currentSong.play();
    }
    playerBtn.classList.toggle('playerIsActive');
}

function setNewSong(newSong){
    console.log('playing: '+newSong)
    currentSong.src = 'assets/audio/'+newSong;
    currentSong.play();
    playerBtn.classList.add('playerIsActive')
}
function setNewBackground(newBack){
    let content = document.querySelector('.content-wrapper');
    let folder ='url('+'assets/img/'+newBack+')';
    content.style.backgroundImage = folder;
}
function setActiveOption(bird){
    birds.forEach(function(item){
        item.classList.remove('activeSoundOption');
    })
    bird.classList.add('activeSoundOption');
}

birds.forEach(function(bird){
    bird.onclick = function(){
        setNewSong(bird.dataset.audio);
        setNewBackground(bird.dataset.bg);
        setActiveOption(bird);
    }
});

gitLink.onpointerover = function(){
    document.querySelector('.git-nick').style.color = `rgb(180, 146, 63)`;
    document.querySelector('.git-icon').style.backgroundImage = "url('assets/img/gitGolden.png')";
}
gitLink.onpointerout = function(){
    document.querySelector('.git-nick').style.color = `white`;
    document.querySelector('.git-icon').style.backgroundImage = "url('assets/img/gitWhite.png')";
}

function burgerChange(){
    burger.classList.toggle('burgerOpened');
    if(burger.classList.contains('burgerOpened')){
        burgerStripes[1].style.display = 'none';
        burgerStripes[0].style.transform = 'rotate(45deg)';
        burgerStripes[0].style.translate = '0 25px'
        burgerStripes[2].style.transform = 'rotate(-45deg)';
    }
    else{
        burgerStripes[1].style.display = 'flex';
        burgerStripes[0].style.transform = '';
        burgerStripes[0].style.translate = ''
        burgerStripes[2].style.transform = '';
    }
}

burger.onclick = function(e){
    menu.classList.toggle('menuIsOpened');
    burgerChange();
}
