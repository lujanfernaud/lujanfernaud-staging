// Main App File

class App {
  run() {
    new NameFlipper().watch()
    new ChevronHider().watch()
    new TextSelector().watch()
    new LetsTalkAnimator().watch()
    new ContactFormToggler().watch()
    new ModalToggler().watch()
  }
}

new App().run()
