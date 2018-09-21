class LetsTalkAnimator {
  watch() {
    let letsTalk = new LetsTalkToggler()

    inView.threshold(0.9)

    inView('.back-cover')
      .on('enter', () => {
        letsTalk.toggleAnimation()
        letsTalk.toggleHoverActive()
      })
      .on('exit', () => {
        letsTalk.toggleAnimation()
        letsTalk.toggleHoverActive()
      })
  }
}

class LetsTalkToggler {
  constructor() {
    this.letsTalk       = document.querySelector('.lets-talk-container')
    this.letsTalkButton = document.querySelector('.lets-talk')
    this.letsTalkText   = document.querySelector('.lets-talk__text')
    this.letsTalkMail   = document.querySelector('.lets-talk__mail')

    this.delayedToggler = new DelayedClassToggler()
  }

  toggle(formIsOpen = false) {
    this.toggleAnimation()
    this.toggleHoverActive(formIsOpen)
    this.toggleContainer()
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

  toggleContainer() {
    this.letsTalk.classList.toggle('lets-talk-container--hidden')
  }
}
