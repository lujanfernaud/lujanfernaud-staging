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
    if (this.running == true) return false

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

const fader = {
  fadeIn:  function(element) { element.classList.remove('opacity-hidden') },
  fadeOut: function(element) { element.classList.add('opacity-hidden') },
  toggle:  function(element) { element.classList.toggle('opacity-hidden') }
};

class LetsTalkAnimator {
  watch() {
    let letsTalk = new LetsTalkToggler()

    inView.threshold(0.9)

    inView('.back-cover')
      .on('enter', () => {
        letsTalk.toggleAnimation()
        letsTalk.toggleHoverActive()
      })
      .on('exit', () => {
        letsTalk.toggleAnimation()
        letsTalk.toggleHoverActive()
      })
  }
}

class LetsTalkToggler {
  constructor() {
    this.letsTalk       = document.querySelector('.lets-talk-container')
    this.letsTalkButton = document.querySelector('.lets-talk')
    this.letsTalkText   = document.querySelector('.lets-talk__text')
    this.letsTalkMail   = document.querySelector('.lets-talk__mail')

    this.delayedToggler = new DelayedClassToggler()
  }

  toggle(formIsOpen = false) {
    this.toggleAnimation()
    this.toggleHoverActive(formIsOpen)
    this.toggleContainer()
  }

  toggleAnimation() {
    this.letsTalkText.classList.toggle('lets-talk__text--paused')
    this.letsTalkMail.classList.toggle('lets-talk__mail--paused')
  }

  toggleHoverActive(formIsOpen = false) {
    this.delayedToggler.toggle({
      element:    this.letsTalkButton,
      klass:      'lets-talk--hover-active',
      formIsOpen: formIsOpen
    });
  }

  toggleContainer() {
    this.letsTalk.classList.toggle('lets-talk-container--hidden')
  }
}

class DelayedClassToggler {
  toggle({element, klass, formIsOpen = false}) {
    if (formIsOpen) {
      element.classList.toggle(klass)
    } else {
      window.setTimeout(() => {
        element.classList.toggle(klass)
      }, 1000) // 1 second, same as CSS transition duration.
    }
  }
}

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
    });
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

class ModalToggler {
  constructor() {
    this.html = document.querySelector('html')
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
        const modalId = event.target.dataset.modal
        const modal = document.getElementById(modalId)

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

new NameFlipper().watch()
new ChevronHider().watch()
new LetsTalkAnimator().watch()
new ContactFormToggler().watch()
new ModalToggler().watch()
