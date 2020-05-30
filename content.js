class DarkMode {
  constructor() {
    this.interval = null;
    this.header = null;
    this.setado = false;
    this.button = null;
  }

  iniciarRotina() {
    this.interval = setInterval(() => {
      this.header = this.obterHeader();

      if (this.header) {
        this.pararIntervalo();
        this.inserirBotao();
      }
    }, 1000);
  }

  obterHeader() {
    return document.getElementsByClassName("_3auIg")[0];
  }

  pararIntervalo() {
    clearInterval(this.interval);
  }

  inserirBotao() {
    this.button = document.createElement("button");
    this.button.setAttribute("id", "setThemeModeButton");
    this.button.innerHTML = this.obterTextobotao();
    this.button.addEventListener("click", () => this.alterarTema());
    this.header.appendChild(this.button);
  }

  alterarTema() {
    const body = document.querySelector("body");

    const darkMode = body.classList.contains("dark");

    this.setado = !darkMode;

    body.classList[darkMode ? "remove" : "add"]("dark");

    this.button.innerHTML = this.obterTextobotao();
  }

  obterTextobotao() {
    return this.setado ? "Ligth" : "Dark";
  }
}

const darkModeExtensions = new DarkMode();

console.info("Whatsapp dark mode extensions");
console.info("Author: https://github.com/csalexsander");

darkModeExtensions.iniciarRotina();
