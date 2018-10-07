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

  remove({ element, klass, miliseconds = 1000 }) {
    window.setTimeout(() => {
      element.classList.remove(klass)
    }, miliseconds)
  }
}
