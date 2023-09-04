let songsDetails = [
  {
    title: "song name 1",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Bollywood",
  },
  {
    title: "song name 2",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Hollywood",
  },
  {
    title: "song name 3",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Lofi",
  },
  {
    title: "song name 4",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Rap",
  },
  {
    title: "song name 5",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Bollywood",
  },
  {
    title: "song name 6",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Hollywood",
  },
  {
    title: "song name 7",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Lofi",
  },
  {
    title: "song name 8",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Rap",
  },
  {
    title: "song name 9",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Bollywood",
  },
  {
    title: "song name 10",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Hollywood",
  },
  {
    title: "song name 11",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Lofi",
  },
  {
    title: "song name 12",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Rap",
  },
  {
    title: "song name 13",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Bollywood",
  },
  {
    title: "song name 14",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Hollywood",
  },
  {
    title: "song name 15",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Lofi",
  },
  {
    title: "song name 16",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Rap",
  },
  {
    title: "song name 17",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Bollywood",
  },
  {
    title: "song name 18",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Hollywood",
  },
  {
    title: "song name 19",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Lofi",
  },
  {
    title: "song name 20",
    artist_name: "song artist name",
    song_src: "https://songs.com",
    thumbnail: "https://picsum.photos",
    playlist: "playlist 1",
    genre: "Rap",
  },
];
let option = document.querySelector("#filter");
let song_list = document.querySelector('.song_list');

function startSongs() {
    songsDetails.forEach((elem) => {
        song_list.innerHTML += `
      <div class="song">${elem.title}</div>`
    })
}
startSongs();

function selectOption() {
  let songType = option.value;
    song_list.innerHTML = ``;
  if (songType != "All") {
    songsDetails.forEach((elem) => {
        if (elem.genre == songType) {
        song_list.innerHTML += `
        <div class="song">${elem.title}</div>`
      }
    });
    }
  else {
      songsDetails.forEach((elem) => {
          song_list.innerHTML += `
        <div class="song">${elem.title}</div>`
      })
    }
}
