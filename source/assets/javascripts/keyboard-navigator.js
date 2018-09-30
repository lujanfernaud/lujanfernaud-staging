//= require vendor/hotkeys.min

class KeyboardNavigator {
  constructor() {
    this.keyDisabledTimeout = 325
    this.upKeyDisabled = false
    this.downKeyDisabled = false
  }

  watch() {
    this._watchKey('up', this.upKeyDisabled, '.navigation--top')
    this._watchKey('down', this.downKeyDisabled, '.navigation--bottom')
  }

  // private

  _watchKey(key, keyDisabled, navigationClass) {
    hotkeys(key, event => {
      event.preventDefault()

      if (keyDisabled) { return }

      let activeScreen = document.querySelector('.screen.active')

      if (!activeScreen) { return }

      let navigationControl = activeScreen.querySelector(navigationClass)

      if (!navigationControl) { return }

      keyDisabled = true

      window.setTimeout(() => {
        keyDisabled = false
      }, this.keyDisabledTimeout)

      navigationControl.children[0].click()
    })
  }
}
