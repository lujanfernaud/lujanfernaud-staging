class LetsTalkToggler {
  constructor() {
    this.delayedToggler = new DelayedClassToggler()

    this.letsTalk       = document.querySelector('.lets-talk-container')
    this.letsTalkButton = document.querySelector('.lets-talk')
    this.letsTalkText   = document.querySelector('.lets-talk__text')
    this.letsTalkMail   = document.querySelector('.lets-talk__mail')
  }

  toggle(formIsOpen = false) {
    this.toggleAnimation()
    this.toggleHoverActive(formIsOpen)
    this._toggleContainer()
  }

  toggleAnimation() {
    this.letsTalkText.classList.toggle('lets-talk__text--paused')
    this.letsTalkMail.classList.toggle('lets-talk__mail--paused')
  }

  toggleHoverActive(formIsOpen = false) {
    this.delayedToggler.toggle({
      element:    this.letsTalkButton,
      klass:      'lets-talk--hover-active',
      formIsOpen: formIsOpen
    })
  }

  // private

  _toggleContainer() {
    this.letsTalk.classList.toggle('lets-talk-container--hidden')
  }
}
