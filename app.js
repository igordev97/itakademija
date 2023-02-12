// Audio player app

const songs = [
    {title: "Bebe Rexha_I Got You",img_src:"./images/song1.jpg",auto_src:"./sounds/song1.mp3"},
    {title: "CVIJA - BRZINA ",img_src:"./images/song2.jpg",auto_src:"./sounds/song1.mp3"},
    {title: "Dzenan Loncarevic - Ludujem ",img_src:"./images/song3.jpg",auto_src:"./sounds/song3.mp3"},
    {title: "Dao Sam Ti Dušu",img_src:"./images/song4.jpg",auto_src:"./sounds/song4.mp3"},
    {title: "David Guetta & Bebe Rexha - I'm Good (FRHAD Remix)",img_src:"./images/song5.jpg",auto_src:"./sounds/song5.mp3"},
    {title: "Alexandra Stan - Mr. Saxobeat ",img_src:"./images/song6.jpg",auto_src:"./sounds/song6.mp3"}
   
]

// const audio = document.querySelector("#audio")
// const duration_box= document.querySelector("#duration_timer")
// const previous = document.querySelector("#before")
// const play = document.querySelector("#play-stop")
// const next = document.querySelector("#next")
// const cover = document.querySelector("#cover")


const audio = document.querySelector("#audio")
const duration_box= document.querySelector("#duration_timer")
const previous = document.querySelector("#before")
const play = document.querySelector("#play-stop")
const next = document.querySelector("#next")
const cover = document.querySelector("#cover")
let song_id = 0;

window.onload = ()=>{
    cover.innerHTML = `<img src="${songs[song_id].img_src}">`;
audio.src = songs[song_id].auto_src;
}

function playPauseSong(){
    audio.play();  
}
function perviousSong(){
    if(song_id == 0){
        song_id = songs.length-1;
    }
    else{
        song_id--;
    }
    cover.innerHTML = `<img src="${songs[song_id].img_src}">`;
    audio.src = songs[song_id].auto_src;
    playPauseSong()
}
function nextSong(){
    if(song_id == songs.length-1){
        song_id =0;
    }
    else{
        song_id++;
    }
    cover.innerHTML = `<img src="${songs[song_id].img_src}">`;
    audio.src = songs[song_id].auto_src;
    playPauseSong()
}
play.onclick = playPauseSong
previous.onclick = perviousSong;
next.onclick = nextSong;