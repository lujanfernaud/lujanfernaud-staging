class ChevronHider {
  constructor() {
    this.chevron = document.querySelector('.front-cover__chevron-down')
  }

  watch() {
    inView.threshold(0.9)

    inView('.front-cover')
      .on('enter', () => {
        fader.fadeIn(this.chevron)
      })
      .on('exit', () => {
        fader.fadeOut(this.chevron)
      })
  }
}
