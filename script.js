let birds = document.querySelectorAll('.birds-li-item');
let playerBtn = document.querySelector('.player-btn-wrapper');
let contentWrapper = document.querySelector('.content-wrapper');
let gitLink = document.querySelector('.footer-git');
let currentSong = new Audio;

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
