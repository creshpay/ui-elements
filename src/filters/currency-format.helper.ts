export default (value: number): string | Intl.NumberFormat => {
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
