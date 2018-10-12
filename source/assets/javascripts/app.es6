//= require helpers/fader
//= require helpers/delayed-class-toggler

//= require focus-trapper
//= require screen-actionator
//= require navigator
//= require scroll-smoother

//= require text-selector
//= require name-flipper

//= require tooltip-toggler
//= require modal-toggler
//= require contact-form-toggler

class App {
  constructor() {
    this.focusTrapper = new FocusTrapper()
    this.textSelector = new TextSelector()
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
    this.focusTrapper.run()

    new ScreenActionator(this.focusTrapper).run()
    new Navigator(this).watch()
    new ScrollSmoother().run()
  }

  _animators() {
    this.textSelector.watch()
    new NameFlipper().watch()
  }

  _togglers() {
    new TooltipToggler().run()
    new ModalToggler().watch()
    new ContactFormToggler(this.focusTrapper).watch()
  }
}

new App().run()
