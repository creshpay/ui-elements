const isObject = (
  obj: Record<string, unknown> | Record<string, unknown>[] | unknown,
): obj is Record<string, unknown> => obj === Object(obj)
  && !Array.isArray(obj) && typeof obj !== 'function'

export default isObject
