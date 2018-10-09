//= require vendor/tippy.min

class TooltipToggler {
  run() {
    this._setupTippy()
    this._watchScroll()
  }

  // private

  _setupTippy() {
    tippy('[data-behavior="tooltip"]', {
      html:      '#note-tooltip-content',
      theme:     'dark shadow',
      arrow:     true,
      arrowType: 'round',
      placement: 'top',
      size:      'large'
    })
  }

  _watchScroll() {
    window.addEventListener('scroll', () => {
      for (const popper of document.querySelectorAll('.tippy-popper')) {
        const instance = popper._tippy

        if (instance.state.visible) {
          instance.popperInstance.disableEventListeners()
          instance.hide()
        }
      }
    })
  }
}
