const hljs = require('highlight.js')
const loaderUtils = require('loader-utils')
const md = require('markdown-it')({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      const value = hljs.highlight(lang, str).value
      return value
    }
    return str
  }
})

module.exports = function (source, map) {
  const options = loaderUtils.getOptions(this)
  if (/^\s*<!-- doc -->/.test(source)) {
    source = `<div data-type="doc-component">${md.render(source)}</div>`
  }
  return source
}
