//= require vendor/hotkeys.min

class ContactFormToggler {
  constructor() {
    this.formIsOpen      = false
    this.contactSection  = document.querySelector('.contact-section-container')
    this.linkOpener      = document.querySelector('.lets-talk-link')
    this.navOpener       = document.querySelector('.navigation--left')
    this.linkCloser      = document.querySelector('.contact-section__close')
    this.sectionTogglers = [
      this.linkOpener, this.navOpener, this.linkCloser
    ]

    this.delayedToggler  = new DelayedClassToggler()
    this.scrollToggler   = new ScrollToggler()
    this.letsTalkToggler = new LetsTalkToggler()

    this.contactSectionRevealed = '.contact-section-container--revealed'
  }

  watch() {
    this._watchKeyboardTogglers()
    this._watchUITogglers()
  }

  // private

  _watchKeyboardTogglers() {
    hotkeys('esc, right', event => {
      this._toggleContactSectionIf(this.formIsOpen, event)
    })

    hotkeys('left', event => {
      this._toggleContactSectionIf(!this.formIsOpen, event)
    })
  }

  _toggleContactSectionIf(formIsOpen, event) {
    if (!this._backCoverIsActive()) { return }
    if (!formIsOpen) { return }

    this._runSectionToggler(event)
  }

  _backCoverIsActive() {
    return document.querySelector('.back-cover.active')
  }

  _runSectionToggler(event) {
    event.preventDefault()

    this._scrollToBottom()
    this._toggleContactSection()
  }

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
    let navigation = backCover.querySelectorAll('.navigation')

    if (this.formIsOpen) {
      navigation.forEach(navigationControl => {
        navigationControl.style.display = 'none'
      })
    } else {
      navigation.forEach(navigationControl => {
        navigationControl.classList.remove('display-none')
        navigationControl.style.display = 'block'
      })
    }

    navigation.forEach(navigationControl => {
      this.delayedToggler.toggle({
        element:     navigationControl,
        klass:       'navigation--hidden',
        formIsOpen:  this.formIsOpen
      })
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

  _watchUITogglers() {
    this.sectionTogglers.forEach(toggler => {
      toggler.addEventListener('click', event => {
        this._runSectionToggler(event)
      })
    })
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
