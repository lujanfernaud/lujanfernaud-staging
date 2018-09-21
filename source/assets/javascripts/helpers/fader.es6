const fader = {
  fadeIn:  element => { element.classList.remove('opacity-hidden') },
  fadeOut: element => { element.classList.add('opacity-hidden') },
  toggle:  element => { element.classList.toggle('opacity-hidden') }
}
