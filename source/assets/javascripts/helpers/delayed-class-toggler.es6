// Delays toggling of CSS classes.

class DelayedClassToggler {
  toggle({ element, klass, formIsOpen = false, miliseconds = 1000 }) {
    if (formIsOpen) {
      element.classList.toggle(klass)
    } else {
      window.setTimeout(() => {
        element.classList.toggle(klass)
      }, miliseconds)
    }
  }
}
