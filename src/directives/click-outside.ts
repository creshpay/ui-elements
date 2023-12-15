/* eslint-disable @typescript-eslint/no-explicit-any */
const clickOutsideDirective = {
  beforeMount (el: any, binding: any) {
    el.clickOutsideEvent = (evt: any) => {
      evt.stopPropagation()
      if (!(el === evt.target || el.contains(evt.target))) {
        binding.value(evt, el)
      }
    }
    // Wait 1 frame otherwise a potential click that mounted
    // the element will immediately trigger a click-outside event:
    window.requestAnimationFrame(() => {
      document.addEventListener('click', el.clickOutsideEvent)
    })
  },

  unmounted (el: any) {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
}

export default clickOutsideDirective
