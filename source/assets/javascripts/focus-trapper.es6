//= require vendor/inert.min

class FocusTrapper {
  run() {
    inertElements = document.querySelectorAll('.inert')

    inertElements.forEach(element => {
      element.inert = true
    })

    inView('.screen')
      .on('enter', element => {
        element.classList.add('active')
        this.toggle(element)
      })
      .on('exit', element => {
        element.classList.remove('active')
        this.toggle(element)
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
