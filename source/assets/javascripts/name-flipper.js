class NameFlipper {
  constructor() {
    this.questionMark = document.querySelector('.cover-name__question-mark')
    this.name         = document.querySelector('.cover-name__name')
    this.running      = false
  }

  watch() {
    if (Modernizr.backgroundcliptext) {
      this._toggleQuestionMark()
    } else {
      return console.log('backgroundcliptext not supported')
    }
  }

  // private

  _toggleQuestionMark() {
    this.questionMark.classList.toggle('visibility-hidden')
    this.questionMark.classList.toggle('opacity-hidden')
    this.questionMark.addEventListener('mouseover', () => {
      this._flipName()
    })
  }

  _flipName() {
    if (this.running === true) return false

    this.running = true

    fader.fadeOut(this.questionMark)
    this._flipWith('lu-han fer-noh')
    this._flipBackWith('Luján Fernaud')

    window.setTimeout(() => {
      fader.fadeIn(this.questionMark)
      this.running = false
    }, 4700)
  }

  _flipWith(message) {
    this.name.classList.toggle('flip')

    window.setTimeout(() => {
      this.name.innerText = message
    }, 500)

    window.setTimeout(() => {
      this.name.classList.toggle('flip')
    }, 1000)
  }

  _flipBackWith(message) {
    window.setTimeout(() => {
      this._flipWith(message)
    }, 3700)
  }
}
