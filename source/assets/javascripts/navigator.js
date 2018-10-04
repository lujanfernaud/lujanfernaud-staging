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
    this._watchDirection('up', this.wheelUpDisabled, '.navigation--top')
  }

  _watchWheelDown() {
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
  }

  _watchKey(key, keyDisabled, navigationClass) {
    hotkeys(key, event => {
      event.preventDefault()

      this._watchDirection(key, keyDisabled, navigationClass)
    })
  }
}
