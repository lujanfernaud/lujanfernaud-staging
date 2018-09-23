class ContactFormToggler {
  constructor() {
    this.formIsOpen      = false
    this.contactSection  = document.querySelector('.contact-section-container')
    this.sectionOpener   = document.querySelector('.lets-talk-link')
    this.sectionCloser   = document.querySelector('.contact-section__close')
    this.sectionTogglers = [this.sectionOpener, this.sectionCloser]

    this.delayedToggler  = new DelayedClassToggler()
    this.scrollToggler   = new ScrollToggler()
    this.letsTalkToggler = new LetsTalkToggler()
  }

  watch() {
    this.sectionTogglers.forEach(toggler => {
      toggler.addEventListener('click', (event) => {
        event.preventDefault()

        this._scrollToBottom()
        this._toggleContactSection()
      })
    })
  }

  // private

  _scrollToBottom() {
    document.querySelector('.scroll-to-back-cover').click()
  }

  _toggleContactSection() {
    this.formIsOpen = !this.formIsOpen // Switch the boolean.

    this._toggleVisibility()
    this._toggleNavigation()
    this._toggleScroll()
    this._toggleLetsTalk()
    this._toggleContactForm()
  }

  _toggleVisibility() {
    this.delayedToggler.toggle({
      element:    this.contactSection,
      klass:      'visibility-hidden',
      formIsOpen: this.formIsOpen
    })
  }

  _toggleNavigation() {
    let backCover  = document.querySelector('.back-cover')
    let navigation = backCover.querySelector('.navigation')

    if (this.formIsOpen) {
      navigation.style.display = 'none'
    } else {
      navigation.style.display = 'block'
    }

    this.delayedToggler.toggle({
      element:     navigation,
      klass:       'navigation--hidden',
      formIsOpen:  this.formIsOpen,
      miliseconds: 300
    })
  }

  _toggleScroll() {
    this.scrollToggler.toggle()
  }

  _toggleLetsTalk() {
    this.letsTalkToggler.toggle(this.formIsOpen)
  }

  _toggleContactForm() {
    this.contactSection.classList.toggle('contact-section-container--revealed')
  }
}

class ScrollToggler {
  constructor() {
    this.html = document.getElementsByTagName('html')[0]
    this.body = document.body
    this.backCover = document.querySelector('.back-cover')
  }

  toggle() {
    this.html.classList.toggle('overflow-hidden')
    this.body.classList.toggle('overflow-hidden')
    this.backCover.classList.toggle('overflow-hidden')
  }
}
