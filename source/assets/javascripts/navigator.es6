//= require vendor/hotkeys.min
//= require vendor/wheel-indicator

// Hotkeys Documentation:
// https://github.com/jaywcjlove/hotkeys

class Navigator {
  constructor(app) {
    this.app = app
    this.wheelIndicator = new WheelIndicator()

    this.scrollDisabledTimeout = 350
    this.wheelUpDisabled       = false
    this.wheelDownDisabled     = false
    this.upKeyDisabled         = false
    this.downKeyDisabled       = false
    this.spaceKeyDisabled      = false
    this.shiftSpaceKeyDisabled = false

    this.modalIsActive = '.modal.is-active'
    this.formIsActive  = '.contact-section-container--revealed'
    this.activeScreen  = '.screen.active'
    this.navTop        = '.navigation--top'
    this.navBottom     = '.navigation--bottom'
    this.backToTop     = document.querySelector('.back-to-top')
  }

  watch() {
    this._watchMouseWheel()
    this._watchKeyboard()
    this._watchBackToTop()
  }

  // private

  _watchMouseWheel() {
    this.wheelIndicator.setOptions({
      callback: scroll => {
        if (scroll.direction === 'up')   { this._watchWheelUp() }
        if (scroll.direction === 'down') { this._watchWheelDown() }
      }
    })
  }

  _watchWheelUp() {
    let modalIsActive     = document.querySelector(this.modalIsActive)
    let formIsActive      = document.querySelector(this.formIsActive)
    let screenIsNotActive = !document.querySelector(this.activeScreen)

    if (modalIsActive || formIsActive || screenIsNotActive) {
      return this.wheelIndicator.setOptions({ preventMouse: false })
    }

    this.wheelIndicator.setOptions({ preventMouse: true })

    this._watchDirection('up', this.wheelUpDisabled, this.navTop)
  }

  _watchWheelDown() {
    let modalIsActive     = document.querySelector(this.modalIsActive)
    let formIsActive      = document.querySelector(this.formIsActive)
    let screenIsNotActive = !document.querySelector(this.activeScreen)

    if (modalIsActive || formIsActive || screenIsNotActive) {
      return this.wheelIndicator.setOptions({ preventMouse: false })
    }

    this.wheelIndicator.setOptions({ preventMouse: true })

    this._watchDirection('down', this.wheelDownDisabled, this.navBottom)
  }

  _watchDirection(direction, directionDisabled, navigationClass) {
    if (directionDisabled) { return }

    let activeScreen = document.querySelector(this.activeScreen)
    if (!activeScreen) { return }

    let navigationControl = activeScreen.querySelector(navigationClass)
    if (!navigationControl) { return }

    directionDisabled = true

    window.setTimeout(() => {
      directionDisabled = false
    }, this.disabledTimeout)

    navigationControl.children[0].click()
  }

  _watchKeyboard() {
    this._watchKey('up', this.upKeyDisabled, this.navTop)
    this._watchKey('down', this.downKeyDisabled, this.navBottom)
    this._watchKey('shift+space', this.shiftSpaceKeyDisabled, this.navTop)
    this._watchKey('space', this.spaceKeyDisabled, this.navBottom)
    this._watchHomeKey()
  }

  _watchKey(key, keyDisabled, navigationClass) {
    hotkeys(key, event => {
      let modalIsActive = document.querySelector(this.modalIsActive)
      let formIsActive  = document.querySelector(this.formIsActive)

      if (modalIsActive || formIsActive) { return }

      event.preventDefault()

      this._watchDirection(key, keyDisabled, navigationClass)
    })
  }

  _watchHomeKey() {
    hotkeys('home', event => {
      let modalIsActive = document.querySelector(this.modalIsActive)
      let formIsActive  = document.querySelector(this.formIsActive)

      if (modalIsActive || formIsActive) { return }

      event.preventDefault()

      this.app.reset()
      this.backToTop.children[0].click()
    })
  }

  _watchBackToTop() {
    this.backToTop.addEventListener('click', () => {
      this.app.reset()
    })
  }
}
