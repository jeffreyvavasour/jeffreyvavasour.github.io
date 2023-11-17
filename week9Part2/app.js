let lyricBtn = document.getElementById("button");
let lyrics = document.getElementById("lyrics");

lyricBtn.addEventListener("click", function () {
  writeLyrics();
  writeLyricsInConsole();
});

function writeLyricsInConsole() {
  for (let i = 99; i >= 0; i--) {
    if (i == 0) {
      console.log(
        "No more bottles of beer on the wall, No more bottles of beer"
      );
      console.log(
        "Go to the store and buy some more, 99 bottles of beer on the wall"
      );
    } else if (i == 1) {
      console.log(i + " bottle of beer on the wall, " + i + " bottle of beer");
      console.log(
        "Take one down and pass it around, no more bottles of beer on the wall"
      );
      console.log();
    } else {
      console.log(
        i + " bottles of beer on the wall, " + i + " bottles of beer"
      );
      console.log(
        "Take one down and pass it around, " +
          (i - 1) +
          " bottles of beer on the wall"
      );
      console.log();
    }
  }
}

function writeLyrics() {
  for (let i = 99; i >= 0; i--) {
    if (i == 0) {
      lyrics.innerHTML += `No more bottles of beer on the wall, No more bottles of beer <br>`;
      lyrics.innerHTML += `Go to the store and buy some more, 99 bottles of beer on the wall`;
    } else if (i == 1) {
      lyrics.innerHTML += `${i}  bottle of beer on the wall, ${i} bottle of beer`;
      lyrics.innerHTML += `<br>`;
      lyrics.innerHTML += `Take one down and pass it around, no more bottles of beer on the wall`;
      lyrics.innerHTML += `<br><br>`;
    } else {
      lyrics.innerHTML += `${i} bottles of beer on the wall, ${i} bottles of beer`;
      lyrics.innerHTML += `<br>`;
      lyrics.innerHTML += `Take one down and pass it around, ${
        i - 1
      } bottles of beer on the wall`;
      lyrics.innerHTML += `<br><br>`;
    }
  }
}
