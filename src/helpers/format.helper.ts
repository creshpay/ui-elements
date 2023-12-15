export const formatCurrency = (value: number): string | Intl.NumberFormat => {
  if (Intl && Intl.NumberFormat) {
    const formatedAmount = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    }).format(value)
    return formatedAmount
  }
  if (value) {
    return value.toFixed(2)
  }
  return '-'
}

export const formatDate = (value: Date | string, withTime = true) => {
  if (!value) return ''
  const date = new Date(value)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' }
  if (!withTime) {
    return date.toLocaleDateString('fr-FR', options)
  }
  const time = date.toLocaleTimeString('fr-FR')
  return `${date.toLocaleDateString('fr-FR', options)} ${time} `
}

const toDDMMYYYY = (date: Date) => {
  const mm = date.getMonth() + 1
  const dd = date.getDate()
  const yyyy = date.getFullYear()

  return `${dd}${mm}${yyyy}`
}

export default {
  formatCurrency,
  formatDate,
  toDDMMYYYY,
}
