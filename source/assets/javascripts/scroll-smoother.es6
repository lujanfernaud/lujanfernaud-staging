//= require vendor/smooth-scroll.polyfills.min

// Smooth Scroll Documentation:
// https://github.com/cferdinandi/smooth-scroll

class ScrollSmoother {
  run() {
    new SmoothScroll('[data-scroll]', { easing: 'easeInOutQuad' })
  }
}
