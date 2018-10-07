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
    this._main()
    this._animators()
    this._togglers()
  }

  reset() {
    this.textSelector.reset()
  }

  // private

  _main() {
    new Navigator(this).watch()
    new ScrollSmoother().run()
    new NoteTooltip().run()
  }

  _animators() {
    this.textSelector.watch()
    new NameFlipper().watch()
    new LetsTalkAnimator().watch()
  }

  _togglers() {
    new NavigationToggler().watch()
    new ModalToggler().watch()
    new ImageHoverToggler().watch()
    new ContactFormToggler().watch()
  }
}

new App().run()
