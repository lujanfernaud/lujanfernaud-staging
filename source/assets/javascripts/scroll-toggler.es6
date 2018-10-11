class ScrollToggler {
  constructor() {
    this.html = document.getElementsByTagName('html')[0]
    this.body = document.body
  }

  toggle(element) {
    this.html.classList.toggle('overflow-hidden')
    this.body.classList.toggle('overflow-hidden')

    if (element) {
      element.classList.toggle('overflow-hidden')
    }
  }
}
