var hg = require('mercury');
var h = hg.h;
var renderTable = require('./table');
var renderAnim = require('./anim');
var renderTree = require('./tree');

function renderMain(data) {
  var location = data.location;

  var section;
  if (location === 'table') {
    section = hg.partial(renderTable, {data: data.table});
  } else if (location === 'anim') {
    section = hg.partial(renderAnim, {data: data.anim});
  } else if (location === 'tree') {
    section = hg.partial(renderTree, {data: data.tree});
  }

  return h('div.Main', section);
}

module.exports = renderMain;