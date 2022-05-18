function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  if (player.health === enemy.health) {
    document.getElementById("game-message").innerText = "Draw";
  } else if (player.health > enemy.health) {
    document.getElementById("game-message").innerText = "Player Won";
  } else {
    document.getElementById("game-message").innerText = "Enemy Won";
  }
  document.getElementById("game-message").style.display = "flex";
}

let timer = 60;
let timerId;
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer--;
    document.getElementById("timer").innerText = timer;
  }
  if (timer === 0) {
    determineWinner({ player, enemy, timerId });
  }
}
