class NameFlipper {

  constructor() {
    this.questionMark = document.querySelector(".cover-name__question-mark");
    this.name         = document.querySelector(".cover-name__name");
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
    this.chevron = document.querySelector(".front-cover__chevron-down");
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
  fadeOut: function(element) { element.classList.add("opacity-hidden"); },
  toggle:  function(element) { element.classList.toggle("opacity-hidden"); }
};

class contactFormToggler {

  constructor() {
    this.backCover       = document.querySelector(".back-cover");
    this.letsTalk        = document.querySelector(".lets-talk-container");
    this.letsTalkButton  = document.querySelector(".lets-talk");
    this.letsTalkText    = document.querySelector(".lets-talk__text");
    this.letsTalkMail    = document.querySelector(".lets-talk__mail");
    this.contactSection  = document.querySelector(".contact-section-container");
    this.sectionOpen     = document.querySelector(".lets-talk-link");
    this.sectionClose    = document.querySelector(".contact-section__close");
    this.sectionTogglers = [this.sectionOpen, this.sectionClose];
    this.showForm        = false;
  }

  watch() {
    this.sectionTogglers.forEach(toggler => {
      toggler.addEventListener("click", (event) => {
        event.preventDefault();

        this.scrollToBottom();
        this.toggleContactSection();
      });
    });
  }

  scrollToBottom() {
    document.querySelector(".scroll-to-back-cover").click();
  }

  toggleContactSection() {
    this.showForm = !this.showForm; // Switch the boolean.

    this.toggleVisibility();
    this.toggleScroll();
    this.toggleButtonAnimation();
    this.toggleButtonHoverActive();

    this.toggleLetsTalk();
    this.toggleContactForm();
  }

  toggleVisibility() {
    this.toggleInAndOut(this.contactSection, "visibility-hidden");
  }

  toggleInAndOut(element, klass) {
    if (this.showForm) {
      element.classList.toggle(klass);
    } else {
      window.setTimeout(() => {
        element.classList.toggle(klass);
      }, 1000); // 1 second, same as CSS transition duration.
    }
  }

  toggleScroll() {
    document.body.classList.toggle("overflow-hidden");
    this.backCover.classList.toggle("overflow-hidden");
  }

  toggleButtonAnimation() {
    this.letsTalkText.classList.toggle("lets-talk__text--paused");
    this.letsTalkMail.classList.toggle("lets-talk__mail--paused");
  }

  toggleButtonHoverActive() {
    this.toggleInAndOut(this.letsTalkButton, "lets-talk--hover-active");
  }

  toggleLetsTalk() {
    this.letsTalk.classList.toggle("lets-talk-container--hidden");
  }

  toggleContactForm() {
    this.contactSection.classList.toggle("contact-section-container--revealed");
  }

}

new NameFlipper().watch();
new ChevronHider().watch();
new contactFormToggler().watch();
