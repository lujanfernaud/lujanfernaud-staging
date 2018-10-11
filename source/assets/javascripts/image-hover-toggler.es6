class ImageHoverToggler {
  constructor() {
    this.delayedToggler = new DelayedClassToggler()
    this.projectImageContainer = '.project__image-container'
    this.imageHoverActive = 'project__image-container--hover'
    this.miliseconds = 200
  }

  watch() {
    inView(this.projectImageContainer).on('enter', element => {
      this._toggleHoverActive(element)
    })

    inView(this.projectImageContainer).on('exit', element => {
      this._toggleHoverActive(element)
    })
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
