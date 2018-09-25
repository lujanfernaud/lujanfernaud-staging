class NavigationToggler {
  constructor() {
    this.nullElement = document.querySelector('.null-element')
  }

  watch() {
    inView.threshold(0.75)

    inView('.screen')
      .on('enter', element => {
        let navigationTop    = this._select(element, '.navigation--top')
        let navigationBottom = this._select(element, '.navigation--bottom')

        this._toggleNavigationOpacity(navigationTop, navigationBottom)
        this._switchNavigationOnHover(navigationTop, navigationBottom)
        this._hideNavigationOnClick(navigationTop, navigationBottom)
      })
      .on('exit', element => {
        let navigationTop    = this._select(element, '.navigation--top')
        let navigationBottom = this._select(element, '.navigation--bottom')

        this._toggleNavigationOpacity(navigationTop, navigationBottom)
        this._restoreNavigation(navigationTop, navigationBottom)
      })
  }

  // private

  _select(element, klass) {
    return element.querySelector(klass) || this.nullElement
  }

  _toggleNavigationOpacity(navigationTop, navigationBottom) {
    navigationTop.classList.toggle('opacity-hidden')
    navigationBottom.classList.toggle('opacity-hidden')
  }

  _switchNavigationOnHover(navigationTop, navigationBottom) {
    navigationBottom.addEventListener('mouseover', () => {
      navigationTop.classList.add('opacity-hidden')
    })

    navigationBottom.addEventListener('mouseout', () => {
      navigationTop.classList.remove('opacity-hidden')
    })
  }

  _hideNavigationOnClick(navigationTop, navigationBottom) {
    let navigationControls = [navigationTop, navigationBottom]

    navigationControls.forEach(navigationControl => {
      navigationControl.addEventListener('click', () => {
        navigationControl.classList.add('display-none')
      })
    })
  }

  _restoreNavigation(navigationTop, navigationBottom) {
    let navigationControls = [navigationTop, navigationBottom]

    navigationControls.forEach(navigationControl => {
      navigationControl.classList.remove('display-none')
    })
  }
}
