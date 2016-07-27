var compare = require('compare-flat-package-tree-records')

module.exports = function (tree) {
  tree.forEach(function (record) {
    record.links.sort(compare)
  })
  tree.sort(compare)
  return tree
}
