const CHRISTMAS_AUDIO = document.getElementById('christmas-audio');
const VOLUME_BUTTON = document.getElementById('volume-button');

window.onload = function () {
  loadSnow();
  CHRISTMAS_AUDIO.volume = 0.5;

  if (CHRISTMAS_AUDIO.muted) {
    VOLUME_BUTTON.querySelector('.off-icon').classList.add('active');
    VOLUME_BUTTON.querySelector('.on-icon').classList.remove('active');
  } else {
    VOLUME_BUTTON.querySelector('.on-icon').classList.add('active');
    VOLUME_BUTTON.querySelector('.off-icon').classList.remove('active');
  }
};

VOLUME_BUTTON.addEventListener('click', () => {
  if (CHRISTMAS_AUDIO.muted) {
    CHRISTMAS_AUDIO.muted = false;
    VOLUME_BUTTON.querySelector('.on-icon').classList.add('active');
    VOLUME_BUTTON.querySelector('.off-icon').classList.remove('active');
  } else {
    CHRISTMAS_AUDIO.muted = true;
    VOLUME_BUTTON.querySelector('.off-icon').classList.add('active');
    VOLUME_BUTTON.querySelector('.on-icon').classList.remove('active');
  }
});

/**
 * Load Snow Effect
 */
function loadSnow() {
  const initialSnow = document.querySelector('.initial-snow');
  const numbSnow = 25;

  for (let i = 0; i < numbSnow; i++) {
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snow.innerHTML = '&#10052;';

    const size = getRandomValue(0, 1).toFixed(2);
    const leftInit = getRandomValue(-10, 10).toFixed(2);
    const leftEnd = getRandomValue(-10, 10).toFixed(2);
    const left = getRandomValue(0, 100).toFixed(2);
    const animationTime = getRandomValue(5, 20).toFixed();
    const animationDelay = getRandomValue(1, 10).toFixed(2);

    snow.style.setProperty('--size', `${size}vw`);
    snow.style.setProperty('--left-init', `${leftInit}vw`);
    snow.style.setProperty('--left-end', `${leftEnd}vw`);

    snow.style.animation = `snowfall ${animationTime}s linear infinite`;
    snow.style.animationDelay = `${animationDelay}s`;
    snow.style.left = `${left}vw`;

    initialSnow && initialSnow.appendChild(snow);
  }
}

/**
 * Get Random Number Value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}
