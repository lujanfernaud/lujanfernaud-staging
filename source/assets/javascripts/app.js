//= require helpers/fader
//= require helpers/delayed-class-toggler

//= require name-flipper
//= require chevron-hider
//= require text-selector
//= require lets-talk-animator
//= require contact-form-toggler
//= require modal-toggler

class App {
  run() {
    new NameFlipper().watch()
    new ChevronHider().watch()
    new TextSelector().watch()
    new LetsTalkAnimator().watch()
    new ContactFormToggler().watch()
    new ModalToggler().watch()
  }
}

new App().run()
