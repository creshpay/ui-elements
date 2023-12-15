export type NotifyType = 'error'
| 'warning'
| 'info'
| 'raw'
| 'default'
| 'success'

export type NotifyPosition = 'top-left'
| 'top-right'
| 'top'
| 'bottom-left'
| 'bottom-right'
| 'bottom'
| 'left'
| 'right'

export type NotifyOptions = {
  duration: number
  type: NotifyType
  position: NotifyPosition
  closable: boolean
  persistent: boolean
  classes?: string[]
  callback?: (event: Event) => void
}
