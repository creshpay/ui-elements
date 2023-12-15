export const getCookie = (
  cookieName: string,
): string | null => {
  if (document.cookie.length > 0) {
    let startAt = document.cookie.indexOf(`${cookieName}=`)
    if (startAt !== -1) {
      startAt = startAt + cookieName.length + 1
      let endAt = document.cookie.indexOf(';', startAt)
      if (endAt === -1) {
        endAt = document.cookie.length
      }
      return unescape(document.cookie.substring(startAt, endAt))
    }
  }
  return null
}

const setCookie = (
  domain: string,
  name: string,
  value: string,
  expiresAt: Date | null = null,
): void => {
  let expires
  if (expiresAt === null) {
    const date = new Date()
    const days = 2
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = `; expires=${date.toUTCString()}`
  } else {
    expires = `; expires=${expiresAt.toUTCString()}`
  }
  const targetDomain = `;domain=${domain};SameSite=Lax;path=/`
  document.cookie = `${name}=${value}${expires}${targetDomain}`
}

// set cookie expires date 1 day ago to force remove
const removeCookie = (domain: string, name: string): void => {
  const date = new Date()
  const days = 2
  date.setTime(date.getTime() - (days * 24 * 60 * 60 * 1000))
  const expires = `; expires=${date.toUTCString()}`

  const targetDomain = `;domain=${domain};path=/`
  document.cookie = `${name}=${expires}${targetDomain}`
}

export default {
  getCookie,
  setCookie,
  removeCookie,
}
