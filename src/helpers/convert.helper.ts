import isObject from './is-object'

function convertSnakeToCamel(str: string) {
  const splits = str.split('_')
  if (splits.length <= 1) {
    return splits[0]
  }
  return str.split('_')
    .reduce(
      (res, word, i) => (i === 0
        ? word.toLowerCase()
        : `${res}${word.charAt(0).toUpperCase()}${word
          .substring(1)
          .toLowerCase()}`),
      '',
    )
}

function convertObjSnakeToCamel(obj: unknown):
  {[key: string]: unknown} | unknown | Array<unknown> {
  if (isObject(obj)) {
    return Object.keys(obj).reduce((
      target: {[key: string]: unknown},
      key,
    ) => {
      const current = obj[key]
      const targetKey = convertSnakeToCamel(key)
      if (isObject(current)) {
        target[targetKey] = convertObjSnakeToCamel(current)
      } else if (Array.isArray(current)) {
        target[targetKey] = current.map(item => convertObjSnakeToCamel(item))
      } else {
        target[targetKey] = current
      }
      return target
    }, {})
  }
  if (Array.isArray(obj)) {
    return obj.map(item => convertObjSnakeToCamel(item))
  }
  return obj
}

export default {
  convertSnakeToCamel,
  convertObjSnakeToCamel,
}
