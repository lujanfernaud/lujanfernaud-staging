class NameFlipper {
  constructor() {
    this.questionMark = document.querySelector('.cover-name__question-mark')
    this.name         = document.querySelector('.cover-name__name')
    this.running      = false
  }

  watch() {
    if (Modernizr.backgroundcliptext) {
      this.toggleQuestionMark()
    } else {
      return console.log('backgroundcliptext not supported')
    }
  }

  toggleQuestionMark() {
    this.questionMark.classList.toggle('visibility-hidden')
    this.questionMark.classList.toggle('opacity-hidden')
    this.questionMark.addEventListener('mouseover', () => {
      this.flipName()
    })
  }

  flipName() {
    if (this.running === true) return false

    this.running = true

    fader.fadeOut(this.questionMark)
    this.flipWith('lu-han fer-noh')
    this.flipBackWith('Luján Fernaud')

    window.setTimeout(() => {
      fader.fadeIn(this.questionMark)
      this.running = false
    }, 4700)
  }

  flipWith(message) {
    this.name.classList.toggle('flip')

    window.setTimeout(() => {
      this.name.innerText = message
    }, 500)

    window.setTimeout(() => {
      this.name.classList.toggle('flip')
    }, 1000)
  }

  flipBackWith(message) {
    window.setTimeout(() => {
      this.flipWith(message)
    }, 3700)
  }
}
