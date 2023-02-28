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

birds.forEach(function(bird){
    bird.onclick = function(){
        setNewSong(bird.dataset.audio)
    }
});
