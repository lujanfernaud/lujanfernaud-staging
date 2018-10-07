//= require helpers/fader
//= require helpers/delayed-class-toggler

//= require name-flipper
//= require scroll-smoother
//= require navigation-toggler
//= require navigator
//= require text-selector
//= require image-hover-toggler
//= require lets-talk-animator
//= require contact-form-toggler
//= require modal-toggler
//= require note-tooltip

class App {
  constructor() {
    this.textSelector = new TextSelector()

    inView.threshold(0.75)
  }

  run() {
    new NameFlipper().watch()
    new ScrollSmoother().run()
    new NavigationToggler().watch()
    new Navigator(this).watch()
    this.textSelector.watch()
    new ImageHoverToggler().watch()
    new LetsTalkAnimator().watch()
    new ContactFormToggler().watch()
    new ModalToggler().watch()
    new NoteTooltip().run()
  }

  reset() {
    this.textSelector.reset()
  }
}

new App().run()
