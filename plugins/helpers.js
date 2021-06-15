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
    },
    toggleFullScreen: () => {
      const doc = window.document
      const docEl = doc.documentElement

      const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen
      const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen

      if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl)
      } else {
        cancelFullScreen.call(doc)
      }
    }
  }
  inject('helpers', helpers)
}
