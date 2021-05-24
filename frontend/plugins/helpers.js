export default ({ app }, inject) => {
  const helpers = {
    decodeHTML: (str) => { // nao funciona muito bem, melhor usar apenas decode
      if (process.browser) { // just client for variable window
        const txt = window.document.createElement('textarea')
        txt.innerHTML = str
        return txt.value
      } else { return '' }
    },
    encode: (str) => {
      const buf = []
      for (let i = str.length - 1; i >= 0; i--) {
        buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
      }
      return buf.join('')
    },
    decode: (str) => {
      return str.replace(/&#(\d+);/g, function (match, dec) {
        return String.fromCharCode(dec)
      })
    }
  }
  inject('helpers', helpers)
}
