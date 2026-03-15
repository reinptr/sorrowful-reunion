const playBtn = document.getElementById("playBtn");
const song = document.getElementById("song");
const quoteText = document.getElementById("quoteText");
const nextQuoteBtn = document.getElementById("nextQuoteBtn");

const quotes = [
  '"Some reunions are only meant to happen in memories."',
  '"The saddest hello is the one that arrives too late."',
  '"Not every meeting is meant to heal."',
  '"Sometimes the heart remembers what time tries to erase."',
  '"We met again, but not in the way I once prayed for."'
];

let quoteIndex = 0;

playBtn.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    playBtn.textContent = "Pause Reff";
  } else {
    song.pause();
    playBtn.textContent = "Play Reff";
  }
});

nextQuoteBtn.addEventListener("click", () => {
  quoteIndex++;
  if (quoteIndex >= quotes.length) {
    quoteIndex = 0;
  }
  quoteText.textContent = quotes[quoteIndex];
});

song.addEventListener("ended", () => {
  playBtn.textContent = "Play Reff";
});