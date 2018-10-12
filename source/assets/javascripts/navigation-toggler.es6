class NavigationToggler {
  constructor() {
    this.nullElement = document.querySelector('.null-element')
  }

  watch() {
    inView('.screen')
      .on('enter', element => {
        let navigation = this._selectNavigationControls(element)

        this._toggleNavigationOpacity(navigation)
        this._switchNavigationOnHover(navigation)
        this._hideNavigationOnClick(navigation)
      })
      .on('exit', element => {
        let navigation = this._selectNavigationControls(element)

        this._toggleNavigationOpacity(navigation)
        this._restoreNavigation(navigation)
      })
  }

  // private

  _selectNavigationControls(element) {
    let top    = this._select(element, '.navigation--top')
    let left   = this._select(element, '.navigation--left')
    let bottom = this._select(element, '.navigation--bottom')

    return { top, left, bottom }
  }

  _select(element, klass) {
    return element.querySelector(klass) || this.nullElement
  }

  _toggleNavigationOpacity(navigation) {
    let navigationControls = [
      navigation.top, navigation.left, navigation.bottom
    ]

    navigationControls.forEach(navigationControl => {
      navigationControl.classList.toggle('opacity-hidden')
    })
  }

  _switchNavigationOnHover(navigation) {
    navigation.bottom.addEventListener('mouseover', () => {
      navigation.top.classList.add('opacity-hidden')
    })

    navigation.bottom.addEventListener('mouseout', () => {
      navigation.top.classList.remove('opacity-hidden')
    })
  }

  _hideNavigationOnClick(navigation) {
    let navigationControls = [
      navigation.top, navigation.left, navigation.bottom
    ]

    navigationControls.forEach(navigationControl => {
      navigationControl.addEventListener('click', () => {
        navigationControl.classList.add('display-none')
      })
    })
  }

  _restoreNavigation(navigation) {
    let navigationControls = [
      navigation.top, navigation.left, navigation.bottom
    ]

    navigationControls.forEach(navigationControl => {
      navigationControl.classList.remove('display-none')
    })
  }
}
