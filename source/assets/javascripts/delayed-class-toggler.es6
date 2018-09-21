class DelayedClassToggler {
  toggle({element, klass, formIsOpen = false}) {
    if (formIsOpen) {
      element.classList.toggle(klass)
    } else {
      window.setTimeout(() => {
        element.classList.toggle(klass)
      }, 1000) // 1 second, same as CSS transition duration.
    }
  }
}
