const marked = require('marked')

module.exports = (source) => {
  // 1. 将 markdown 转换为 html 字符串
  const html = marked(source)
  // html => '<h1>About</h1><p>this is a markdown file.</p>'
  // 2. 将 html 字符串拼接为一段导出字符串的 JS 代码
  const code = `module.exports = ${JSON.stringify(html)}`
  return code
  // code => 'export default "<h1>About</h1><p>this is a markdown file.</p>"'
}
