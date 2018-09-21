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

        this.scrollToBottom()
        this.toggleContactSection()
      })
    })
  }

  scrollToBottom() {
    document.querySelector('.scroll-to-back-cover').click()
  }

  toggleContactSection() {
    this.formIsOpen = !this.formIsOpen // Switch the boolean.

    this.toggleVisibility()
    this.toggleScroll()
    this.toggleLetsTalk()
    this.toggleContactForm()
  }

  toggleVisibility() {
    this.delayedToggler.toggle({
      element:    this.contactSection,
      klass:      'visibility-hidden',
      formIsOpen: this.formIsOpen
    })
  }

  toggleScroll() {
    this.scrollToggler.toggle()
  }

  toggleLetsTalk() {
    this.letsTalkToggler.toggle(this.formIsOpen)
  }

  toggleContactForm() {
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
