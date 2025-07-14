"use strict";

const imgEl = document.getElementById("bg_img");
const imgCoverEl = document.getElementById("cover");
const musicTitleEl = document.getElementById("music_title");
const musicArtistEl = document.getElementById("music_artist");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");

const prevBtnEl = document.getElementById("prev");
const playBtnEl = document.getElementById("play");
const nextBtnEl = document.getElementById("next");

const songs = [
    {
        path: "audio/Touch The Sky (From BraveSoundtrack).mp3",
        displayName: "Touch The Sky",
        cover: "images/brave poster.png",
        artist: "Julie Fowlis",
    },
    {
        path: "audio/Hedwig's Theme.mp3",
        displayName:"Hedwig's Theme",
        cover: "images/harry potter poster.png",
        artist: "John Williams",
    },
    {
        path: "audio/Main Theme  Pirates of the Caribbean.mp3",
        displayName:"He's a Pirate",
        cover: "images/pirates poster.png",
        artist: "Hans Zimmer",
    },
     {
        path: "audio/Main Title.mp3",
        displayName:"Main Title",
        cover: "images/got poster.png",
        artist: "Ramin Djawadi",
    },
];

const music = new Audio();

let musicIndex = 0;
let isPlaying = false;

// Play song set up as a boolean // 

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    } else{ 
        playMusic();
    }
}

// Play music // 

function playMusic(){
    isPlaying = true;
    playBtnEl.classList.replace('fa-play', 'fa-pause');
    playBtnEl.setAttribute("title", "pause");
    music.play();
}

// Pause music //
function pauseMusic(){
    isPlaying = false;
    playBtnEl.classList.replace('fa-pause', 'fa-play');
    playBtnEl.setAttribute("title", "Play");
    music.pause();
}

// Load songs //
function loadMusic(songs){
    music.src = songs.path;
    musicTitleEl.textContent = songs.displayName;
    musicArtistEl.textContent = songs.artist;
    imgCoverEl.src = songs.cover;
    imgEl.src = songs.cover;
}
// change music //
function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

// set progress // 
function setProgressBar(e) {
const width = playerProgressEl.clientWidth;
const xValue = e.offsetX;
music.currentTime = (xValue / width ) * music.duration;
}


function updateProgressBar (){
    const {duration, currentTime} = music;

    if ( !duration || isNaN(duration)) return;

    const progressPercent = (currentTime / duration) * 100;
    progressEl.style.width = `${progressPercent}%`;

    const formattime = (timeRanges) => String(Math.floor(timeRanges)).padStart(2,"0");
    durationEl.textContent = `${formattime(duration / 60)}:${formattime(duration % 60, 
    )}`;
    currentTimeEl.textContent = `${formattime(currentTime / 60)}:${formattime(currentTime % 60)}`;
}


const btnEvents = () => {
   playBtnEl.addEventListener("click", togglePlay);
   nextBtnEl.addEventListener('click', () => changeMusic(1));
   prevBtnEl.addEventListener('click', () => changeMusic(-1));

// progress bar //
playerProgressEl.addEventListener('click', setProgressBar);

music.addEventListener("timeupdate", updateProgressBar);

music.addEventListener("ended", () => changeMusic(1));

music.addEventListener("loadedmetadata", () => {
    const { duration } = music;
    const formatTime = (time) => String(Math.floor(time)).padStart(2,"0");

    durationEl.textContent = `${formatTime( duration / 60)}:${formatTime(duration % 60)}`;
});
};

document.addEventListener("DOMContentLoaded", btnEvents);

// Calling load music// 
loadMusic(songs[musicIndex]);