//= require vendor/smooth-scroll.polyfills.min

class ScrollSmoother {
  run() {
    new SmoothScroll('[data-scroll]', { easing: 'easeInOutQuad' })
  }
}
