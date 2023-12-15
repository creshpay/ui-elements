import {
  CountryCode,
  parsePhoneNumber,
} from 'libphonenumber-js'
import parseMobile from 'libphonenumber-js/mobile'
import parseMax from 'libphonenumber-js/max'

function isValidPhoneNumber(
  value: string,
  countryCode: CountryCode = 'FR',
) {
  try {
    const phoneNumber = parsePhoneNumber(value, countryCode)
    return phoneNumber.isValid()
  } catch (e) {
    return false
  }
}

function isValidMobilePhoneNumber(
  value: string,
  countryCode: CountryCode = 'FR',
) {
  try {
    const phoneNumber = parseMobile(value, countryCode)
    return phoneNumber?.isValid()
  } catch (e) {
    return false
  }
}

function isValidFixedPhoneNumber(
  value: string,
  countryCode: CountryCode = 'FR',
) {
  try {
    const phoneNumber = parseMax(value, countryCode)
    return phoneNumber?.isValid() && phoneNumber?.getType() === 'FIXED_LINE'
  } catch (e) {
    return false
  }
}

function parse(phoneNumber: string, countryCode:CountryCode = 'FR') {
  try {
    const number = parsePhoneNumber(phoneNumber, countryCode)

    return number
  } catch (e) {
    return undefined
  }
}

export default {
  parse,
  isValidPhoneNumber,
  isValidMobilePhoneNumber,
  isValidFixedPhoneNumber,
}
