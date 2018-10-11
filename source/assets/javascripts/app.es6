//= require helpers/fader
//= require helpers/delayed-class-toggler

//= require navigator
//= require scroll-smoother

//= require text-selector
//= require name-flipper
//= require lets-talk-animator

//= require navigation-toggler
//= require tooltip-toggler
//= require modal-toggler
//= require image-hover-toggler
//= require contact-form-toggler

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
  }

  _animators() {
    this.textSelector.watch()
    new NameFlipper().watch()
    new LetsTalkAnimator().watch()
  }

  _togglers() {
    new NavigationToggler().watch()
    new TooltipToggler().run()
    new ModalToggler().watch()
    new ImageHoverToggler().watch()
    new ContactFormToggler().watch()
  }
}

new App().run()
