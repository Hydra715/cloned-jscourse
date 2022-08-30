/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    const result = {}
    if (obj) {Object.entries(obj).forEach(([keys, values]) => {
        result[values] = keys
      })
      return result}
    return
  }
