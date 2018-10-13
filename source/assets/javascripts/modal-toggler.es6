class ModalToggler {
  constructor() {
    this.html    = document.querySelector('html')
    this.openers = document.querySelectorAll('[data-behavior="open-modal"]')
    this.closers = document.querySelectorAll('[data-behavior="close-modal"]')

    this.modalIsOpen = false
  }

  watch() {
    this._watchOpeners()
    this._watchClosers()
    this._watchEscKey()
  }

  // private

  _watchOpeners() {
    this.openers.forEach(toggler => {
      toggler.addEventListener('click', event => {
        const modalId   = event.target.dataset.modal
        const modal     = document.getElementById(modalId)
        const modalBody = modal.querySelector('.modal-card-body')

        modalBody.scrollTop = 0
        modal.classList.add('is-active')
        this.html.classList.add('overflow-hidden')

        this.modalIsOpen = true
      })
    })
  }

  _watchClosers() {
    this.closers.forEach(toggler => {
      toggler.addEventListener('click', () => {
        this._closeModal()
      })
    })
  }

  _closeModal() {
    const modal = document.querySelector('.modal.is-active')

    modal.classList.remove('is-active')
    this.html.classList.remove('overflow-hidden')

    this.modalIsOpen = false
  }

  _watchEscKey() {
    document.onkeydown = event => {
      event = event || window.event

      let isEscape = false

      if ('key' in event) {
        isEscape = (event.key === 'Escape' || event.key === 'Esc')
      } else {
        isEscape = (event.keyCode === 27)
      }

      if (isEscape && this.modalIsOpen) {
        this._closeModal()
      }
    }
  }
}
