function isValidDate(date: unknown) {
  return date
    && Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date)
}

function toLocaleDateString(
  date: Date,
  locales: Intl.LocalesArgument = 'fr-FR',
  options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  },
) {
  if (!isValidDate(date)) {
    return ''
  }
  return date.toLocaleDateString(locales, options)
}

// get first time of the date
function beginningOfTheDay(dateObj: Date): Date {
  const date = dateObj.getDate()
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth()

  return new Date(
    year,
    month,
    date,
    0,
    0,
    0,
    0,
  )
}

// get last time of the date
function endOfTheDay(dateObj: Date): Date {
  const date = dateObj.getDate()
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth()

  return new Date(
    year,
    month,
    date,
    23,
    59,
    59,
    999,
  )
}

export default {
  toLocaleDateString,
  isValidDate,
  beginningOfTheDay,
  endOfTheDay,
}
