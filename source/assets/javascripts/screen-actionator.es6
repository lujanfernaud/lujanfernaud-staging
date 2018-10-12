//= require vendor/in-view.min

//= require navigation-toggler
//= require image-hover-toggler
//= require lets-talk-toggler

class ScreenActionator {
  constructor(focusTrapper) {
    this.focusTrapper = focusTrapper
    this.navigation   = new NavigationToggler()
    this.imageHover   = new ImageHoverToggler()
    this.letsTalk     = new LetsTalkToggler()

    inView.threshold(0.75)
  }

  run() {
    inView('.screen')
      .on('enter', element => {
        element.classList.add('active')

        this.navigation.activate(element)
        this.focusTrapper.toggle(element)
        this.imageHover.toggle(element)
        this._toggleLetsTalk(element)
      })
      .on('exit', element => {
        element.classList.remove('active')

        this.navigation.deactivate(element)
        this.focusTrapper.toggle(element)
        this.imageHover.toggle(element)
        this._toggleLetsTalk(element)
      })
  }

  // private

  _toggleLetsTalk(element) {
    if (!element.classList.contains('back-cover')) { return }

    this.letsTalk.toggleAnimation()
    this.letsTalk.toggleHoverActive()
  }
}
