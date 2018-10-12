class ImageHoverToggler {
  constructor() {
    this.delayedToggler = new DelayedClassToggler()

    this.projectImageContainer = '.project__image-container'
    this.imageHoverActive      = 'project__image-container--hover'
    this.miliseconds           = 200
  }

  toggle(element) {
    let projectImage = element.querySelector(this.projectImageContainer)

    if (!projectImage) { return }

    this._toggleHoverActive(projectImage)
  }

  // private

  _toggleHoverActive(element) {
    this.delayedToggler.toggle({
      element: element,
      klass: this.imageHoverActive,
      miliseconds: this.miliseconds
    })
  }
}
