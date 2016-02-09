var hg = require('mercury');
var h = hg.h;

function renderTableCell(text) {
  function onClick(e) {
    console.log('Clicked' + text);
    e.stopPropagation();
  }
  return h('td.TableCell', {'onclick': onClick}, text);
}

function renderTableRow(data) {
  var classes = 'TableRow';
  if (data.active) {
    classes = 'TableRow active';
  }
  var cells = data.props;

  var children = [hg.partial(renderTableCell, '#' + data.id)];
  for (var i = 0; i < cells.length; i++) {
    children.push(hg.partial(renderTableCell, cells[i]));
  }

  return h('tr', {'className': classes, 'attributes': {'data-id': data.id}}, children);

}

function renderTable(data) {
  var items = data.items;

  var children = [];
  for (var i = 0; i < items.length; i++) {
    children.push(hg.partial(renderTableRow, items[i]));
  }

  return h('table.Table', h('tbody', children));
}

module.exports = renderTable;