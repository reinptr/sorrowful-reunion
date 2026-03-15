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
    playBtn.textContent = "Pause Refrain";
  } else {
    song.pause();
    playBtn.textContent = "Play Refrain";
  }
});

nextQuoteBtn.addEventListener("click", () => {
  quoteText.style.opacity = 0;

  setTimeout(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteText.textContent = quotes[quoteIndex];
    quoteText.style.opacity = 1;
  }, 250);
});

song.addEventListener("ended", () => {
  playBtn.textContent = "Play Refrain";
});