class TextSelector {
  constructor() {
    this.text = document.querySelector('.projects-header__title--selected')
  }

  watch() {
    inView('.projects-header')
      .on('enter', () => {
        this.text.classList.add('select-text')
      })
  }
}
