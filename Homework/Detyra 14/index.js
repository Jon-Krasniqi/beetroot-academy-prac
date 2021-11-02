var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

var favoriteSongsList = document.getElementById("favorite-songs-list");
var favoriteSongsTitle = document.getElementById("favorite-songs-title");

favoriteSongsTitle.innerText = "Favorite Band";

var favoriteBandSongs = playList.filter((song) => song.author === "QUEEN");

// for (var i = 0; i < favoriteBandSongs.length; i++) {
//   console.log("Old for loop", favoriteBandSongs[i]);
// }

// console.log("----------");

favoriteBandSongs.forEach((item) => {
  favoriteSongsList.insertAdjacentHTML(
    "beforeend",
    `<li>
    <h3>${item.song} </h3>
    <p>${item.author}</p>
    </li>`
  );
});

var allSongsList = document.getElementById("all-songs-list");
var allSongsTitle = document.getElementById("all-songs-title");

allSongsTitle.innerText = "All Songs";

playList.forEach((item) => {
  allSongsList.insertAdjacentHTML(
    "beforeend",
    `<li>
    <h3>${item.song}</h3>
    <p>${item.author}</p>
    </li>`
  );
});
