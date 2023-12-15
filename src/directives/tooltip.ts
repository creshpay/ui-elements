const getTextWidth = (
  text: string,
  font: string,
  fontSize = 14,
): number => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  if (context) {
    context.font = `${font} ${fontSize}px`
    const metrics = context.measureText(text)
    return metrics.width
  }
  return 0
}

const showTooltip = (el: HTMLElement, message: string) => {
  const tooltip = document.createElement('div')
  const dimension = el.getBoundingClientRect()

  const textWidth = getTextWidth(message, 'lato-regular')

  tooltip.setAttribute('class', 'c-tooltip')
  tooltip.innerHTML = message
  // eslint-disable-next-line max-len
  tooltip.style.left = `${dimension.left - (textWidth - dimension.width / 2) + (textWidth > dimension.width ? 10 : -10)}px`
  // eslint-disable-next-line max-len
  tooltip.style.top = `${dimension.y + dimension.height + window.scrollY + 5}px`
  document.body.appendChild(tooltip)
}

const removeTooltips = () => {
  document.querySelectorAll('.c-tooltip').forEach(
    e => {
      if (e) {
        e.parentNode?.removeChild(e)
      }
    },
  )
}

const tooltipDirective = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  beforeMount: (el: HTMLElement, binding: any): void => {
    el.addEventListener('mouseover', () => {
      setTimeout(() => {
        removeTooltips()
        showTooltip(el, binding.value)
      }, 100)
    })
    el.addEventListener('mouseleave', () => {
      setTimeout(() => {
        removeTooltips()
      }, 100)
    })
  },
  unmounted: (el: HTMLElement): void => {
    removeTooltips()
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    el.removeEventListener('mouseover', () => {})
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    el.removeEventListener('mouseleave', () => {})
  },
}

export default tooltipDirective
