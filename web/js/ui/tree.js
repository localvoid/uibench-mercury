var hg = require('mercury');
var h = hg.h;

function renderTreeLeaf(props) {
  return h('li.TreeLeaf', props.data.id.toString());
}

function renderTreeNode(props) {
  var data = props.data;
  var children = [];

  for (var i = 0; i < data.children.length; i++) {
    var n = data.children[i];
    if (n.container) {
      children.push(hg.partial(renderTreeNode, {key: n.id, data: n}));
    } else {
      children.push(hg.partial(renderTreeLeaf, {key: n.id, data: n}));
    }
  }

  return h('ul.TreeNode', children);
}

function renderTree(props) {
  return h('div.Tree', hg.partial(renderTreeNode, {data: props.data.root}));
}

module.exports = renderTree;
