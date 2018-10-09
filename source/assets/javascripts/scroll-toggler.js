class ScrollToggler {
  constructor() {
    this.html      = document.getElementsByTagName('html')[0]
    this.body      = document.body
    this.backCover = document.querySelector('.back-cover')
  }

  toggle() {
    this.html.classList.toggle('overflow-hidden')
    this.body.classList.toggle('overflow-hidden')
    this.backCover.classList.toggle('overflow-hidden')
  }
}
