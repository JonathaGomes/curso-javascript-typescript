const form = document.querySelector(".form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const inputWeight = event.target.querySelector(".input-weight")
  const inputHeight = event.target.querySelector(".input-height")
  const height = Number(inputHeight.value.replace(",", "."))
  const weight = Number(inputWeight.value.replace(",", "."))

  if (!weight) {
    setResult("Peso inválido", false)
    return;
  }

  if (!height) {
    setResult("Altura inválida", false)
    return;
  }

  const imc = getImc(weight, height)
  const levelImc = getLevelImc(imc) 

  const msg = `Seu IMC é ${imc} (${levelImc})`
  setResult(msg, true)
})

function getImc(weight, height) {
  const imc = weight / Math.pow(height, 2)
  return imc.toFixed(2)
}

function getLevelImc(imc) {
  const level = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];
  if (imc >= 39.9) return level[5]
  if (imc >= 34.9) return level[4]
  if (imc >= 29.9) return level[3]
  if (imc >= 24.9) return level[2]
  if (imc >= 18.5) return level[1]
  if (imc < 18.5) return level[0]
}

function createP () {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isValid) {
  const resultContainer = document.querySelector(".result");
  resultContainer.innerHTML = "";
  const p = createP();
  if (isValid) {
    p.classList.add("p-result")
  } else {
    p.classList.add("bad")
  }
  p.innerHTML = msg
  resultContainer.appendChild(p)
}