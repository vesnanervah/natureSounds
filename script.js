let birds = document.querySelectorAll('.birds-li-item');
let playerBtn = document.querySelector('.player-btn-wrapper');
let contentWrapper = document.querySelector('.content-wrapper');
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

birds.forEach(function(bird){
    bird.onclick = function(){
        setNewSong(bird.dataset.audio);
        setNewBackground(bird.dataset.bg)
    }
});
