// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
const isValidDate = (dateString: string) => {
  const parts = dateString.split('/')
  const day = Number(parts[0])
  const month = Number(parts[1])
  const year = Number(parts[2])

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month === 0 || month > 12) {
    return false
  }
  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  // Adjust for leap years
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthLength[1] = 29
  }
  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1]
}

export default isValidDate
