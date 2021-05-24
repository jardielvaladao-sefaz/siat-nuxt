const redirects = [
  { from: '/suporte', to: '/suportes' }
]

module.exports = function (req, res, next) {
  // eslint-disable-next-line no-unused-vars
  const host = req.headers.host
  // eslint-disable-next-line no-unused-vars
  const fullUrl = req.url
  const url = req.url.split('?')[0]
  let urlParams = null
  if (req.url.includes('?')) {
    urlParams = '?' + req.url.split('?')[1]
  }

  const redirect = redirects.find(r => r.from === url)
  if (redirect) {
    let newLocation
    if (urlParams) {
      newLocation = redirect.to + urlParams
    } else {
      newLocation = redirect.to
    }
    res.writeHead(301, {
      Location: newLocation
    })
    res.end()
  } else {
    next()
  }
}
