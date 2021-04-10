function getTimeFromSeconds(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT"
  });
}

const clock = document.querySelector(".clock");
let seconds = 0;
let timer;

function playClock() {
  timer = setInterval(function() {
    seconds++;
    clock.innerHTML = getTimeFromSeconds(seconds)
  }, 1000);
}

document.addEventListener("click", (event) => {
  const element = event.target;

  if(element.classList.contains("play")) {
    clock.classList.remove("paused");
    clearInterval(timer);
    playClock();
  }

  if(element.classList.contains("pause")) {
    clock.classList.add("paused");
    clearInterval(timer);
  }

  if(element.classList.contains("reset")) {
    clock.classList.remove("paused");
    seconds = 0;
    clearInterval(timer);
    clock.innerHTML = "00:00:00";
  }
})



