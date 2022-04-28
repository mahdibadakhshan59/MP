"use strict";
const music = new Audio("./Music/1.mp3");

/////////// Variable

const songItem = document.querySelectorAll(".songItem");
const masterPlay = document.querySelector("#masterPlay");
const wave = document.getElementsByClassName("wave")[0];
const playlistPlay = document.querySelectorAll(".playlistPlay");
const posterMasterPlay = document.querySelector("#poster-master-play");
const title = document.querySelector("#title");
const currentStart = document.querySelector("#currentStart");
const currentEnd = document.querySelector("#currentEnd");
const seek = document.querySelector("#seek");
const bar2 = document.querySelector("#bar2");
const dot = document.getElementsByClassName("dot")[0];
const volIcon = document.querySelector("#vol_icon");
const vol = document.querySelector("#vol");
const volDot = document.querySelector("#vol_dot");
const volBar = document.getElementsByClassName("vol_bar")[0];
const back = document.querySelector("#back");
const next = document.querySelector("#next");
const leftScroll = document.querySelector("#left_scroll");
const rightScroll = document.querySelector("#right_scroll");
const popSong = document.getElementsByClassName("pop-song")[0];
const leftScrolls = document.querySelector("#left-scrolls");
const rightScrolls = document.querySelector("#right-scrolls");
const item = document.getElementsByClassName("item")[0];
const showPlaylist = document.querySelector(".showPlaylist");
const closePlaylist = document.querySelector(".closePlaylist");
const overly = document.querySelector(".overly");
const menuSong = document.querySelector(".menu-song");

let index = 0;
const songs = [
  {
    id: "1",
    songName: `Mehro Mah<br>
        <div class="subtitle">Esfahani</div>`,
    poster: "./Image/1.jpg",
  },
  {
    id: "2",
    songName: `Gol<br>
        <div class="subtitle">Alizadeh</div>`,
    poster: `./Image/2.jpg`,
  },
  {
    id: "3",
    songName: `Arezoo<br>
        <div class="subtitle">Mehraj</div>`,
    poster: `./Image/3.jpg`,
  },
  {
    id: "4",
    songName: `Aram Aram<br>
        <div class="subtitle">Malek Zadeh</div>`,
    poster: `./Image/4.jpg`,
  },
  {
    id: "5",
    songName: `Mahi Kenare Rood<br>
        <div class="subtitle">Chavoshi</div>`,
    poster: `./Image/5.jpg`,
  },
  {
    id: "6",
    songName: `Sarmast<br>
        <div class="subtitle">Tavakoli</div>`,
    poster: `./Image/6.jpg`,
  },
  {
    id: "7",
    songName: `Shirin Bi Farhad<br>
        <div class="subtitle">Nasri</div>`,
    poster: `./Image/7.jpg`,
  },
  {
    id: "8",
    songName: `Mahe Bi Tekrare Man<br>
        <div class="subtitle">Ashraf Zadeh</div>`,
    poster: `./Image/8.jpg`,
  },
  {
    id: "9",
    songName: `Raze Del<br>
        <div class="subtitle">Shahraki</div>`,
    poster: `./Image/9.jpg`,
  },
  {
    id: "10",
    songName: `Fasle Parishani<br>
        <div class="subtitle">Zand Vakili</div>`,
    poster: `./Image/10.jpg`,
  },
  {
    id: "11",
    songName: `Sari Galin<br>
        <div class="subtitle">Alizadeh</div>`,
    poster: `./Image/11.jpg`,
  },
  {
    id: "12",
    songName: `Babe Delami<br>
        <div class="subtitle">Chavoshi</div>`,
    poster: `./Image/12.jpg`,
  },
  {
    id: "13",
    songName: `Zakhm<br>
        <div class="subtitle">AlizaDeh</div>`,
    poster: `./Image/13.jpg`,
  },
  {
    id: "14",
    songName: `Dastam Ra Begir<br>
        <div class="subtitle">Motamedi</div>`,
    poster: `./Image/14.jpg`,
  },
  {
    id: "15",
    songName: `Paridokht<br>
        <div class="subtitle">Aghili</div>`,
    poster: `./Image/15.jpg`,
  },
];

/////////// Function

const makeAllPlays = () => {
  playlistPlay.forEach((element) => {
    element.classList.add("bi-play-circle-fill");
    element.classList.remove("bi-pause-circle-fill");
  });
};

const makeAllBackgrounds = () => {
  songItem.forEach((element) => {
    element.style.background = "rgb(105, 105, 170, 0)";
  });
};

const musicEnded = () => {
  music.addEventListener("ended", () => {
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
    wave.classList.remove("active2");
  });
};

const backNext = () => {
  music.src = `./Music/${index}.mp3`;
  posterMasterPlay.src = `./Image/${index}.jpg`;
  music.play();
  const songTitle = songs.filter((el) => el.id == index);
  // set music title in down player

  title.innerHTML = songTitle[0].songName;
  makeAllPlays();
  document.getElementById(`${index}`).classList.remove("bi-play-fill");
  document.getElementById(`${index}`).classList.add("bi-pause-fill");
  makeAllBackgrounds();
  songItem[`${index - 1}`].style.background = "rgba(105, 105, 170, 0.1)";
};

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
})();

function mute() {
  volIcon.classList.add("bi-volume-mute-fill");
  volBar.style.width = `0%`;
  volDot.style.left = `0%`;
  music.volume = 0;
}

/////////// DOM

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].poster;
  element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
    wave.classList.remove("active2");
  }
});

playlistPlay.forEach((element) => {
  element.addEventListener("click", (e) => {
    index = e.target.id;
    makeAllPlays();
    e.target.classList.remove("bi-play-circle-fill");
    e.target.classList.add("bi-pause-circle-fill");
    music.src = `./Music/${index}.mp3`;
    posterMasterPlay.src = `./Image/${index}.jpg`;
    music.play();
    const songTitle = songs.filter((el) => el.id == index);
    // set music title in down player
    title.innerHTML = songTitle[0].songName;

    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    musicEnded();
    makeAllBackgrounds();
    songItem[`${index - 1}`].style.background = "rgba(105, 105, 170, 0.1)";
  });
});

music.addEventListener("timeupdate", () => {
  const musicCurr = music.currentTime;
  const musicDur = music.duration;

  let min = Math.floor(musicDur / 60);
  let sec = `${Math.floor(musicDur % 60)}`.padStart(2, 0);

  currentEnd.innerHTML = `${min}:${sec}`;

  const min1 = Math.floor(musicCurr / 60);
  let sec1 = `${Math.floor(musicCurr % 60)}`.padStart(2, 0);
  currentStart.innerHTML = `${min1}:${sec1}`;

  let progressbar = Number.parseInt((musicCurr / musicDur) * 100);
  seek.value = progressbar;
  bar2.style.width = `${progressbar}%`;
  dot.style.left = `${progressbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

musicEnded();

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    volIcon.classList.remove("bi-volume-down-fill");
    volIcon.classList.add("bi-volume-mute-fill");
    volIcon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 0) {
    volIcon.classList.add("bi-volume-down-fill");
    volIcon.classList.remove("bi-volume-mute-fill");
    volIcon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 50) {
    volIcon.classList.remove("bi-volume-down-fill");
    volIcon.classList.remove("bi-volume-mute-fill");
    volIcon.classList.add("bi-volume-up-fill");
  }

  let vol_a = vol.value;
  volBar.style.width = `${vol_a}%`;
  volDot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

back.addEventListener("click", () => {
  index--;
  if (index < 1) index = songItem.length - 1;
  backNext();
});

next.addEventListener("click", () => {
  index++;
  if (index > songItem.length - 1) index = 1;
  backNext();
});

leftScroll.addEventListener("click", () => {
  popSong.scrollLeft -= 330;
});

rightScroll.addEventListener("click", () => {
  popSong.scrollLeft += 330;
});

leftScrolls.addEventListener("click", () => {
  item.scrollLeft -= 330;
});

rightScrolls.addEventListener("click", () => {
  item.scrollLeft += 330;
});

showPlaylist.addEventListener("click", () => {
  document.querySelector(".menu-side").classList.add("showPlaylistProperty");
  overly.style.display = "block";
});

closePlaylist.addEventListener("click", () => {
  document.querySelector(".menu-side").classList.remove("showPlaylistProperty");
});
overly.addEventListener("click", (e) => {
  document.querySelector(".menu-side").classList.remove("showPlaylistProperty");
  e.target.style.display = "none";
});

document.querySelector(".sun").addEventListener("click", (e) => {
  if (e.target.classList.contains("bi-sun-fill")) {
    e.target.classList.add("bi-moon-stars-fill");
    e.target.classList.remove("bi-sun-fill");
  } else {
    e.target.classList.remove("bi-moon-stars-fill");
    e.target.classList.add("bi-sun-fill");
  }
});



/////////////////////////
