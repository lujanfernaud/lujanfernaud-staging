class TextSelector {
  constructor() {
    this.delayedClassToggler = new DelayedClassToggler()
    this.text = document.querySelector('.projects-header__title--selected')
  }

  watch() {
    inView('.projects-header')
      .on('enter', () => {
        this.text.classList.add('select-text')
      })
  }

  reset() {
    this.delayedClassToggler.remove({
      element: this.text,
      klass: 'select-text',
      miliseconds: 1300
    })
  }
}
