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
  // const options = loaderUtils.getOptions(this)
  source = vueTagEscape(source).replace(/:::(\w*)\s(?!:)([\s\S]*?):::/gm, (...$) => {
    const lang = $[1] || 'html'
    return '<div class="demo">' + $[2] + '</div>' +
      '<pre class="hljs language-' + lang + '"><code>' + hljs.highlight(lang, $[2]).value +
      '</code></pre>'
  })
  source = `<div data-type="doc-component">${md.render(source)}</div>`

  return vueTagUnEscape(source)
}

function vueTagEscape (source) {
  return source.replace('@', '___at___')
}

function vueTagUnEscape (source) {
  return source.replace('___at___', '@')
}
