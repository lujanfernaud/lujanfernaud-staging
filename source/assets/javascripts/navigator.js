//= require vendor/hotkeys.min
//= require vendor/wheel-indicator

class Navigator {
  constructor() {
    this.scrollDisabledTimeout = 325
    this.wheelIndicator = new WheelIndicator()

    this.wheelUpDisabled = false
    this.wheelDownDisabled = false
    this.upKeyDisabled = false
    this.downKeyDisabled = false

    this.backToTop = document.querySelector('.back-to-top')
  }

  watch() {
    this._watchMouseWheel()
    this._watchKeyboard()
  }

  // private

  _watchMouseWheel() {
    this.wheelIndicator.setOptions({
      callback: scroll => {
        if (scroll.direction === 'up') { this._watchWheelUp() }
        if (scroll.direction === 'down') { this._watchWheelDown() }
      }
    })
  }

  _watchWheelUp() {
    let modalIsActive = document.querySelector('.modal.is-active')

    if (modalIsActive) {
      return this.wheelIndicator.setOptions({ preventMouse: false })
    }

    this.wheelIndicator.setOptions({ preventMouse: true })

    this._watchDirection('up', this.wheelUpDisabled, '.navigation--top')
  }

  _watchWheelDown() {
    let modalIsActive = document.querySelector('.modal.is-active')

    if (modalIsActive) {
      return this.wheelIndicator.setOptions({ preventMouse: false })
    }

    this.wheelIndicator.setOptions({ preventMouse: true })

    this._watchDirection('down', this.wheelDownDisabled, '.navigation--bottom')
  }

  _watchDirection(direction, directionDisabled, navigationClass) {
    if (directionDisabled) { return }

    let activeScreen = document.querySelector('.screen.active')
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
    this._watchKey('up', this.upKeyDisabled, '.navigation--top')
    this._watchKey('down', this.downKeyDisabled, '.navigation--bottom')
    this._watchHomeKey()
  }

  _watchKey(key, keyDisabled, navigationClass) {
    hotkeys(key, event => {
      let modalIsActive = document.querySelector('.modal.is-active')
      if (modalIsActive) { return }

      event.preventDefault()

      this._watchDirection(key, keyDisabled, navigationClass)
    })
  }

  _watchHomeKey() {
    hotkeys('home', event => {
      let modalIsActive = document.querySelector('.modal.is-active')
      if (modalIsActive) { return }

      event.preventDefault()

      this.backToTop.children[0].click()
    })
  }
}
