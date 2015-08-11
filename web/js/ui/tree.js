var hg = require('mercury');
var h = hg.h;

function renderTreeLeaf(data) {
  return h('li.TreeLeaf', data.id.toString());
}

function renderTreeNode(data) {
  var children = [];

  for (var i = 0; i < data.children.length; i++) {
    var n = data.children[i];
    if (n.container) {
      children.push(hg.partial(renderTreeNode, n));
    } else {
      children.push(hg.partial(renderTreeLeaf, n));
    }
  }

  return h('ul.TreeNode', children);
}

function renderTree(data) {
  return h('div.Tree', hg.partial(renderTreeNode, data.root));
}

module.exports = renderTree;
