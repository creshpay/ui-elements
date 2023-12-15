import * as ChartHelpers from 'chart.js/helpers'
import type {
  BubbleDataPoint,
  Chart,
  ChartTypeRegistry,
  ScatterDataPoint,
  TooltipModel,
} from 'chart.js'

type ChartTooltipContext = {
  chart: Chart<
    keyof ChartTypeRegistry,
    (number | ScatterDataPoint | BubbleDataPoint | null
      )[], unknown>
  tooltip: TooltipModel<keyof ChartTypeRegistry>
}

export function customTooltips (context: ChartTooltipContext): void {
  // Tooltip Element
  let tooltipEl = document.getElementById('chartjs-tooltip')

  // Create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement('div')
    tooltipEl.id = 'chartjs-tooltip'
    tooltipEl.innerHTML = '<table></table>'
    document.body.appendChild(tooltipEl)
  }

  // Hide if no tooltip
  const tooltipModel = context.tooltip
  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = String(0)
    return
  }

  // Set caret Position
  tooltipEl.classList.remove('above', 'below', 'no-transform')
  if (tooltipModel.yAlign) {
    tooltipEl.classList.add(tooltipModel.yAlign)
  } else {
    tooltipEl.classList.add('no-transform')
  }

  const getBody = (bodyItem:
   { before: string[]; lines: string[]; after: string[] }) => (
    bodyItem.lines
  )

  // Set Text
  if (tooltipModel.body) {
    const titleLines = tooltipModel.title || []
    const bodyLines = tooltipModel.body.map(getBody)
    let innerHtml = '<thead>'

    titleLines.forEach(title => {
      innerHtml += `<div class="tooltip-title">${title}</div>`
    })
    innerHtml += '</thead><tbody>'

    bodyLines.forEach((body, i) => {
      const colors = tooltipModel.labelColors[i]
      let style = `background:${colors.backgroundColor}`
      style += ` border-color:${colors.borderColor}`
      style += ' border-width: 2px'
      const span = `<span
            class="chartjs-tooltip-key"
            style="${style}">
          </span>`
      innerHtml += `<tr><td>${span}${body}</td></tr>`
    })
    innerHtml += '</tbody>'

    const tableRoot = tooltipEl.querySelector('table')
    if (tableRoot) {
      tableRoot.innerHTML = innerHtml
    }
  }

  const position = context.chart.canvas.getBoundingClientRect()
  const bodyFont = ChartHelpers.toFont(
  // eslint-disable-next-line
    tooltipModel.options.bodyFont as any,
  )

  // Display, position, and set styles for font
  tooltipEl.style.opacity = String(1)
  tooltipEl.style.position = 'absolute'
  tooltipEl.style.left = `${position.left + window.scrollX + tooltipModel.caretX}px`
  tooltipEl.style.top = `${position.top + window.scrollY + tooltipModel.caretY}px`
  tooltipEl.style.pointerEvents = 'none'
  tooltipEl.style.fontSize = `${context.tooltip}px`
  tooltipEl.style.fontFamily = bodyFont.family
  tooltipEl.style.fontStyle = bodyFont.style
}

export default {
  customTooltips,
}
