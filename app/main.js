window.onload = function() {
  loadSnow();
}

/**
 * Load Snow Effect
 */
function loadSnow() {
  const initialSnow = document.querySelector('.initial-snow');
  const numbSnow = 25;

  for (let i = 0; i < numbSnow; i++) {
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snow.innerHTML = "&#10052;";

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