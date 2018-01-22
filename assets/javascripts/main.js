class NameFlipper {

  constructor() {
    this.questionMark = document.querySelector(".name-question-mark");
    this.name         = document.querySelector(".cover-name");
    this.running      = false;
  }

  watch() {
    this.questionMark.addEventListener("mouseover", () => {
      this.flipName();
    });
  }

  flipName() {
    if (this.running == true) return false;

    this.running = true;

    fader.fadeOut(this.questionMark);
    this.flipWith("lu-han fer-noh");
    this.flipBackWith("Luján Fernaud");

    window.setTimeout(() => {
      fader.fadeIn(this.questionMark);
      this.running = false;
    }, 4700);
  }

  flipWith(message) {
    this.name.classList.toggle("flip");

    window.setTimeout(() => {
      this.name.innerText = message;
    }, 500);

    window.setTimeout(() => {
      this.name.classList.toggle("flip");
    }, 1000);
  }

  flipBackWith(message) {
    window.setTimeout(() => {
      this.flipWith(message);
    }, 3700);
  }

}

class ChevronHider {

  constructor() {
    this.chevron = document.querySelector(".chevron-down");
  }

  watch() {
    document.onscroll = () => {
      let pageScrolled = window.pageYOffset ||
                         document.documentElement.scrollTop ||
                         document.body.scrollTop;

      if (pageScrolled > 40) {
        fader.fadeOut(this.chevron);
      }

      if (pageScrolled < 40) {
        fader.fadeIn(this.chevron);
      }
    };
  }

}

const fader = {
  fadeIn:  function(element) { element.classList.remove("opacity-hidden"); },
  fadeOut: function(element) { element.classList.add("opacity-hidden"); }
};

new NameFlipper().watch();
new ChevronHider().watch();
