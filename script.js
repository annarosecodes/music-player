"use strict";

const imgEl = document.getElementById("bg_img");
const imgCoverEl = document.getElementById(cover);
const musicTitleEl = document.getElementById("music_title");
const musicArtistEl = document.getElementById("music_artist");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");

const prevBtnEl = document.getElementById("prev");
const playBtnEl = document.getElementById("play");
const nextBtnEl = document.getElementById("next");

songs = [
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