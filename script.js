const player = document.getElementById('player');
const game = document.getElementById('game');

let isJumping = false;

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp' && !isJumping) {
    jump();
  }
});

function jump() {
  if (!isJumping) {
    isJumping = true;
    player.style.transition = 'bottom 0.8s';
    player.style.bottom = '200px';
    setTimeout(() => {
      player.style.bottom = '50px';
      setTimeout(() => {
        isJumping = false;
      }, 300);
    }, 300);
  }
}

function createObstacle() {
  const obstacle = document.createElement('div');
  obstacle.classList.add('obstacle');
  obstacle.style.bottom = '1'; // Define a posição inicial do obstáculo na parte inferior do mapa
  obstacle.style.left = '2000%'; // Define a posição inicial do obstáculo na extrema direita
  game.appendChild(obstacle);

  moveObstacle(obstacle);
}

function moveObstacle(obstacle) {
  const interval = setInterval(() => {
    const obstacleLeft = parseInt(obstacle.style.left);
    if (obstacleLeft > -30) {
      obstacle.style.left = `${obstacleLeft - 1}px`; // Move o obstáculo para a esquerda
    } else {
      obstacle.remove();
      clearInterval(interval);
    }
  }, 10); // Ajuste a velocidade do obstáculo aqui
}

setInterval(createObstacle, 3000); // Cria um novo obstáculo a cada 3 segundos
