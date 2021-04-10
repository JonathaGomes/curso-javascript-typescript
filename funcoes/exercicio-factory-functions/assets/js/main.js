function createCalculator() {
  
  return {
    display: document.querySelector(".display"),
    
    start() {
      this.buttonClicks();
      this.pressEnter();
    },
    buttonClicks() {
      document.addEventListener("click", (event) => {
        const element = event.target;
        if (element.classList.contains("btn-num")) {
          this.buttonDisplay(element.innerText);
        }

        if (element.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (element.classList.contains("btn-del")) {
          this.deleteOne();
        }

        if (element.classList.contains("btn-eq")) {
          this.calculate()
        }
      });
    },
    buttonDisplay(value) {
      this.display.value += value;
    },
    clearDisplay() {
      this.display.value = "";
    },
    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    calculate() {
      let displayValue = this.display.value;

      try {
        displayValue = eval(displayValue);

        if (!displayValue) {
          alert("Conta inválida");
          return;
        }

        this.display.value = displayValue;
      } catch(err) {
        alert("Conta inválida");
        return;
      }
    },
    pressEnter() {
      this.display.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
          this.calculate();
        } 
      });
    }

  };
}

const calculator = createCalculator();
calculator.start();