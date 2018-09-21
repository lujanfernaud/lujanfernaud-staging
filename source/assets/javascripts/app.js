// Main App File

class App {
  run() {
    new NameFlipper().watch()
    new ChevronHider().watch()
    new TextSelector().watch()
  }
}

new App().run()
