function Calculator() {
  this.display = document.querySelector(".display");

  this.start = () => {
    this.buttonClicks();
    this.pressEnter();
  };

  this.buttonClicks = () => {
    document.addEventListener("click", (event) => {
      const element = event.target;
      if (element.classList.contains("btn-num")) this.addNumberDisplay(element);
      if (element.classList.contains("btn-clear")) this.clearDisplay();
      if (element.classList.contains("btn-del")) this.deleteOne();
      if (element.classList.contains("btn-eq")) this.calculate();

    });
  };

  this.pressEnter = () => {
    this.display.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.calculate();
      } 
    });
  }

  this.addNumberDisplay = (element) => {
    this.display.value += element.innerText;
    this.display.focus();
  };
  this.clearDisplay = () => this.display.value = "";

  this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);

  this.calculate = () => {
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
  };
};

const calculator = new Calculator();
calculator.start();