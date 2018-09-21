class TextSelector {
  constructor() {
    this.text = document.querySelector('.projects-header__title--selected')
  }

  watch() {
    inView.offset(-300)

    inView('.projects-header')
      .on('enter', () => {
        this.text.classList.add('select-text')
      })
  }
}
