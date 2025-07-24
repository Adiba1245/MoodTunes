const moodMap = {
    happy: {
        video: 'https://www.youtube.com/embed/UPkMkIOzej8', 
        emoji: '😊',
    },
    sad: {
        video: 'https://www.youtube.com/embed/qkzjd5k2vUM',
        emoji: '😔',
    },
    relaxed: {
        video: 'https://www.youtube.com/embed/lFcSrYw-ARY',
        emoji: '😎',
    },
    energetic: {
        video: 'https://www.youtube.com/embed/i77Q-NefbtY',
        emoji: '💪',
    },
    romantic: {
        video: 'https://www.youtube.com/embed/3-buUW3gmtU',
        emoji: '💖',
    },
    nostalgic: {
        video: 'https://www.youtube.com/embed/5Q80DnX4V_M',
        emoji: '🕰️',
    },
    monsoon: {
        video: 'https://www.youtube.com/embed/8OwQEx3CPhw',
        emoji: '🌧️',
    },
};
window.addEventListener('load', () => {
  const moodButtons = document.querySelector('.mood-buttons');

  // wait 3 seconds after load to show mood buttons
  setTimeout(() => {
    moodButtons.classList.remove('hidden');
    moodButtons.classList.add('show');
  }, 3000);
});
function spawnEmoji(emoji) {
    const emojiEl = document.createElement('div');
    emojiEl.classList.add('floating-emoji');
    emojiEl.innerText = emoji;
    emojiEl.style.left = `${Math.random() * 100}%`;
    emojiEl.style.top = `${Math.random() * 80 + 10}%`;
    document.getElementById('emoji-container').appendChild(emojiEl);
    setTimeout(() => emojiEl.remove(), 2000);
}
const buttons = document.querySelectorAll('.mood-buttons button');
const display = document.getElementById('music-display');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.dataset.mood;
        const { color, video ,emoji} = moodMap[mood];
        document.body.style.backgroundColor = color;
        display.innerHTML = `<iframe width="500" height="250" src="${video}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        spawnEmoji(emoji);
    });
});
function spawnEmoji(emoji) {
  const count = Math.floor(Math.random() * 5) + 3; // Random number between 3 and 7

  for (let i = 0; i < count; i++) {
    const emojiEl = document.createElement('div');
    emojiEl.classList.add('floating-emoji');
    emojiEl.innerText = emoji;

    // Randomize position and size
    emojiEl.style.left = `${Math.random() * 100}%`;
    emojiEl.style.top = `${Math.random() * 80 + 10}%`;
    emojiEl.style.fontSize = `${Math.random() * 1.5 + 1.5}rem`;

    document.getElementById('emoji-container').appendChild(emojiEl);

    setTimeout(() => emojiEl.remove(), 2000);
  }
}