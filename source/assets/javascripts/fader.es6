const fader = {
  fadeIn:  function(element) { element.classList.remove('opacity-hidden') },
  fadeOut: function(element) { element.classList.add('opacity-hidden') },
  toggle:  function(element) { element.classList.toggle('opacity-hidden') }
}
