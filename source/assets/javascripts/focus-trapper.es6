//= require vendor/inert.min

// Inert Documentation:
// https://github.com/wicg/inert

class FocusTrapper {
  run() {
    inertElements = document.querySelectorAll('.inert')

    inertElements.forEach(element => {
      element.inert = true
    })
  }

  toggle(element) {
    if (element.inert) {
      element.classList.remove('inert')
      element.inert = false
    } else {
      element.classList.add('inert')
      element.inert = true
    }
  }
}
