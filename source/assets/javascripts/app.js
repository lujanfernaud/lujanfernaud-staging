//= require helpers/fader
//= require helpers/delayed-class-toggler

//= require name-flipper
//= require scroll-smoother
//= require navigation-toggler
//= require keyboard-navigator
//= require text-selector
//= require lets-talk-animator
//= require contact-form-toggler
//= require modal-toggler
//= require note-tooltip

class App {
  constructor() {
    inView.threshold(0.75)
  }

  run() {
    new NameFlipper().watch()
    new ScrollSmoother().run()
    new NavigationToggler().watch()
    new KeyboardNavigator().watch()
    new TextSelector().watch()
    new LetsTalkAnimator().watch()
    new ContactFormToggler().watch()
    new ModalToggler().watch()
    new NoteTooltip().run()
  }
}

new App().run()
