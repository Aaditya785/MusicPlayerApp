let songsDetails = [
  {
    title: "Heeriye",
    artist_name: "Arjit Singh",
    song_src: "./music/Heeriye.mp3",
    thumbnail: "./img/heeriye.jpeg",
    playlist: "playlist 1",
    genre: "Bollywood",
  },
  {
    title: "Closer",
    artist_name: "The Chainsmokers",
    song_src: "./music/closer.mp3",
    thumbnail: "./img/closer.jpeg",
    playlist: "playlist 1",
    genre: "Hollywood",
  },
  {
    title: "Iktara",
    artist_name: "song artist name",
    song_src: "./music/Iktara Lofi.mp3",
    thumbnail: "./img/iktara.jpg",
    playlist: "playlist 1",
    genre: "Lofi",
  },
  {
    title: "Chal Bombay ",
    artist_name: "Divine",
    song_src: "./music/Chal Bombay rap.mp3",
    thumbnail: "./img/chal bombay.jpg",
    playlist: "playlist 1",
    genre: "Rap",
  },
  {
    title: "Tere Vaaste",
    artist_name: "song artist name",
    song_src: "./music/Tere Vaaste.mp3",
    thumbnail: "./img/tereVaaste.jpeg",
    playlist: "playlist 1",
    genre: "Bollywood",
  },
  {
    title: "Shape Of You",
    artist_name: "song artist name",
    song_src: "./music/Shape of you.mp3",
    thumbnail: "./img/shape of you.jpeg",
    playlist: "playlist 1",
    genre: "Hollywood",
  },
  {
    title: "Sajdaa",
    artist_name: "song artist name",
    song_src: "./music/Sajdaa Lofi.mp3",
    thumbnail: "./img/sajdaa.jpg",
    playlist: "playlist 1",
    genre: "Lofi",
  },
  {
    title: "Dooriyan",
    artist_name: "Dino James",
    song_src: "./music/Dooriyan Rap.mp3",
    thumbnail: "./img/dooriyan.jpg",
    playlist: "playlist 1",
    genre: "Rap",
  },
  {
    title: "Kesariya",
    artist_name: "Arjit Singh",
    song_src: "./music/Kesariya.mp3",
    thumbnail: "./img/kesariys.jpeg",
    playlist: "playlist 1",
    genre: "Bollywood",
  },
  {
    title: "Sugar n Brownies",
    artist_name: "song artist name",
    song_src: "./music/Sugar n Brownies.mp3",
    thumbnail: "./img/sugar & brownies.jpeg",
    playlist: "playlist 1",
    genre: "Hollywood",
  },
  {
    title: "Jashn-E-Bahaaraa",
    artist_name: "song artist name",
    song_src: "./music/JashnEBahaaraa Lofi.mp3",
    thumbnail: "./img/jashneBahara.jpg",
    playlist: "playlist 1",
    genre: "Lofi",
  },
  {
    title: "Interview",
    artist_name: "Ikaa",
    song_src: "./music/Interview rap.mp3",
    thumbnail: "./img/interview.jpg",
    playlist: "playlist 1",
    genre: "Rap",
  },
  {
    title: "What Jhumka?..",
    artist_name: "song artist name",
    song_src: "./music/What Jhumka.mp3",
    thumbnail: "./img/whatJhumka.jpeg",
    playlist: "playlist 1",
    genre: "Bollywood",
  },
  {
    title: "Thunder",
    artist_name: "Imagine Dragons",
    song_src: "./music/Thunder.mp3",
    thumbnail: "./img/thunder.jpeg",
    playlist: "playlist 1",
    genre: "Hollywood",
  },
  {
    title: "Saibo",
    artist_name: "song artist name",
    song_src: "./music/Saibo.mp3",
    thumbnail: "./img/saibo.jpg",
    playlist: "playlist 1",
    genre: "Lofi",
  },
  {
    title: "Machayenge",
    artist_name: "Emey Bantai",
    song_src: "./music/MACHAYENGE rap.mp3",
    thumbnail: "./img/machaiyenge.jpg",
    playlist: "playlist 1",
    genre: "Rap",
  },
  {
    title: "O Bedardeya",
    artist_name: "Arjit Singh",
    song_src: "./music/O Bedardeya.mp3",
    thumbnail: "./img/obedardeya.jpeg",
    playlist: "playlist 1",
    genre: "Bollywood",
  },
  {
    title: "We Don't Talk Anymore",
    artist_name: "song artist name",
    song_src: "./music/We Don't Talk Anymore.mp3",
    thumbnail: "./img/we don't talk anymore.jpeg",
    playlist: "playlist 1",
    genre: "Hollywood",
  },
  {
    title: "Ranjha",
    artist_name: "song artist name",
    song_src: "./music/Ranjha LoFi.mp3",
    thumbnail: "./img/ranjha.jpg",
    playlist: "playlist 1",
    genre: "Lofi",
  },
  {
    title: "Mirchi",
    artist_name: "Divine",
    song_src: "./music/mirchi rap.mp3",
    thumbnail: "./img/mirchi.jpg",
    playlist: "playlist 1",
    genre: "Rap",
  },
];
let option = document.querySelector("#filter");
let song_list = document.querySelector(".song_list");
let song_card = document.querySelector(".song_card");
let player = document.querySelector(".player");
let player_ctrl = document.querySelector(".player_ctrl");
let song_display = document.querySelector(".song_display");
var prev, next, LIndex, LElem;

let randSong = Math.floor(Math.random() * 20);
displaySong(songsDetails[randSong]);

function startSongs(songsDetails) {
  songsDetails.forEach((elem, i) => {
    LElem = elem;
    const songElement = document.createElement("div");
    songElement.classList.add("song");
    songElement.innerHTML = ` `;
    songElement.innerHTML = `<i class="ri-disc-line"></i> ${elem.title}`;
    songElement.addEventListener("click", () => displaySong(elem, i));
    song_list.appendChild(songElement);
  });
}

startSongs(songsDetails);

function selectOption() {
  let songType = option.value;
  song_list.innerHTML = "";

  if (songType !== "All") {
    let newSongsDetails = songsDetails.filter(
      (elem) => elem.genre === songType
    );
    startSongs(newSongsDetails);
  } else {
    startSongs(songsDetails);
  }
}

function displaySong(elem, index) {
  song_card.innerHTML = `
  <div class="song_img">
                    <img src="${elem.thumbnail}" alt="">
                </div>
                <div class="song_title">${elem.title}</div>
                <div class="song_artist">${elem.artist_name}</div>
  `;
  player.innerHTML = `
  <audio src="${elem.song_src}" controls></audio>
  `;
  prev = index - 1;
  next = index + 1;
  // prevSong(prev);
  // nextSong(next);
  //  player ctrl btn -->  onclick(prev) for <=  && onclick(next) for =>.
  // Create the parent element
  

}
function leftPrint() {
  if (prev < 0) {
    prev = songsDetails.length - 1;
    next = 1;
  }
  // alert("The left is : " + songsDetails[prev].title);
  displaySong(songsDetails[prev], prev);
}
function rightPrint() {
  if (next > songsDetails.length - 1) {
    prev = songsDetails.length - 1;
    next = 0;
  }
  // alert("The right is : " + songsDetails[next].title);
  displaySong(songsDetails[next], next);
}


function addPlaylist() {}
