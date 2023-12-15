function divideBy100(value: unknown) {
  if (!Number.isInteger(value)) return undefined
  return +(Number(value) / 100).toFixed(2)
}

function format(value: number): Intl.NumberFormat | string {
  if (Intl && Intl.NumberFormat) {
    const formatedAmount = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    }).format(value)
    return formatedAmount
  }
  if (value) {
    return `${value.toFixed(2)} €`
  }
  return '-'
}

export default {
  divideBy100,
  format,
}
