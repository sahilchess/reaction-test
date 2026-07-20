
subheading = document.getElementById("subheading")
clickIt = document.getElementById('startButton');
resultArea = document.getElementById('result');
numberResult = document.getElementById('numberResult');

is_running = false;
game_over = false;
var clicked = false;
var speed = 0;
var delay = 0;
var misclicks = 0;
var screen = "str";

console.log("script loaded")
clickIt.addEventListener('click', () => {
    if (!is_running) {
        startGame()
        console.log("game started")
    }
    else if (is_running && screen == "green" && !clicked) {
        speed = performance.now() - startTime;
        console.log("speed: " + speed)
        resultArea.style.display = "block";
        numberResult.textContent = speed.toFixed(2) + " ms";
        resetGame()
    }
    else if (is_running && screen == "red" && !clicked) {
        misclicks += 1;
        console.log("misclicks: " + misclicks)
        delay = getRandomDecimal(1, 10) * 1000;
        resultArea.style.display = "block";
        numberResult.textContent = "misclicks: " + misclicks;
        resetGame()
    }
    else {
        clicked = true
        console.log("clicked")
    }

});

                                                                            

function getRandomDecimal(min, max) {
  const random = Math.random() * (max - min) + min;
  return parseFloat(random.toFixed(2));
}


function startGame() {
  is_running = true;
  game_over = false;
  clicked = false;
  document.body.style.backgroundColor = "#dc2626";  
  screen = "red";
  subheading.textContent = "wait......";

  const delay = getRandomDecimal(1, 10) * 1000;
  setTimeout(() => {
    document.body.style.backgroundColor = "#16a34a";
    subheading.textContent = "click now!";
    startTime = performance.now();
    screen = "green";
  }, delay);
}

function resetGame() {
    is_running = false
    game_over = false

}



                             
