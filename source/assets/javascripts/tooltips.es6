// Select and configure tooltips.

tippy('[data-behavior="tooltip"]', {
  html:      '#note-tooltip-content',
  theme:     'dark shadow',
  arrow:     true,
  arrowType: 'round',
  placement: 'top',
  size:      'large'
});

// Hide tooltips on scroll.

window.addEventListener('scroll', () => {
  for (const popper of document.querySelectorAll('.tippy-popper')) {
    const instance = popper._tippy;

    if (instance.state.visible) {
      instance.popperInstance.disableEventListeners();
      instance.hide();
    }
  }
});
